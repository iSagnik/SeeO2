import pandas as pd
import datetime as dt
import scipy.stats as st
import numpy as np

from flask import Flask
from flask_restful import Api, Resource, reqparse

app = Flask(__name__)
api = Api(app)


class HistoricalAir(Resource):
    def get(self, city, day, month, year):
        # See if month/day combo is valid
        try:
            selected_date = dt.datetime(
                day=day, month=month, year=year)  # leap year
        except ValueError:
            return "Date combo is invalid", 400

        # Read the CSV
        df = pd.read_csv("city_day.csv", parse_dates=True)
        df['Date'] = pd.to_datetime(df['Date'])

        # Get the info for each city
        city_df = df[(df['City'] == city)]

        if len(city_df) == 0:
            return "City not in data", 404

        certain_date = city_df[(city_df['Date'] == selected_date)]

        if len(certain_date) == 0:
            return "No data for this city and date", 404

        filtered = certain_date[certain_date['AQI'].notnull()]
        if len(filtered) == 0:
            return "No AQI entry for this daty", 404

        return filtered.iloc[0]['AQI']


class AirCI(Resource):
    def get(self, city, day, month, delta_days=14, confidence=0.99):
        # See if month/day combo is valid
        try:
            dt.datetime(day=day, month=month, year=2000)  # leap year
        except ValueError:
            return "Date combo is invalid", 400

        # See if delta days is in a valid range
        # We can't have data overlapping
        if delta_days < 0 or delta_days > 183:  # 1/2 of a year in days
            return "Delta days not in acceptable range", 400
        dt_delta = dt.timedelta(days=delta_days)

        # See if confidence level is valid
        if confidence < 0 or confidence >= 1:
            return "Confidence interval not valid", 400

        # Read the CSV
        df = pd.read_csv("city_day.csv", parse_dates=True)
        df['Date'] = pd.to_datetime(df['Date'])

        # Get the info for each city
        city_df = df[(df['City'] == city)]

        if len(city_df) == 0:
            return "City not in data", 404

        # Get all the years listed
        years_set = set(city_df['Date'].dt.year)

        # Get all entries within delta days of given date for each year
        year_frames = []
        for year in years_set:
            selected_date = dt.datetime(day=day, month=month, year=year)

            date_mask = (city_df['Date'] < (selected_date +
                                            dt_delta)) & (city_df['Date'] > (selected_date - dt_delta))
            city_date_year_df = city_df[date_mask]
            year_frames.append(city_date_year_df)
        res = pd.concat(year_frames)

        # Filter out all of the null entries
        filtered = res['AQI'].dropna()

        # Calculate and return a ocnfidene interval
        n = len(filtered)
        x = st.t.interval(confidence, n-1, loc=np.mean(filtered),
                          scale=st.sem(filtered))

        return x, 200


api.add_resource(AirCI, "/airci/<string:city>/<int:day>/<int:month>",
                 "/airci/<string:city>/<int:day>/<int:month>/<int:delta_days>",
                 "/airci/<string:city>/<int:day>/<int:month>/<float:confidence>",
                 "/airci/<string:city>/<int:day>/<int:month>/<int:delta_days>/<float:confidence>")
api.add_resource(
    HistoricalAir, "/historicalair/<string:city>/<int:day>/<int:month>/<int:year>")

if __name__ == '__main__':
    app.run()
