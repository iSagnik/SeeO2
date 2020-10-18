// API key call
// http://api.airpollutionapi.com/1.0/aqi?lat={LATITUDE}&lon={LONGITUDE}&APPID={APIKEY}

// Ambee key: cXYotSLZMv6oKi9AqzSMH3B1rYOO0hR01MDV9ZDe

//iqair key: 08662725-f7b9-4eaa-9a86-6d70bd578f99
// {{urlExternalAPI}}v2/city?city=Los Angeles&state=California&country=USA&key={{YOUR_API_KEY}}
// {{urlExternalAPI}}v2/city?city={city}&state={state}&country={country}&key={{YOUR_API_KEY}}
// urlExternalAPI = https://api.airvisual.com


import React, { Component } from "react";
import { PieChart } from "react-minimal-pie-chart";
import $ from "jquery";
import "../styles/airQuality.css";
import BG from "../images/background.jpg";

class AirQuality extends Component {
    constructor(props) {
        super();
        this.city = props.city;
        this.state = {
            city: this.city,
            NO2: 0,
            PM10: 0,
            PM25: 0,
            CO: 0,
            SO2: 0,
            OZONE: 0,
            AQI: 0,
            aqiInfo: 0 
            
        }

    }

    invokeAPI() {

        const headers = { 'x-api-key': 'qaP2uyLEPz2whhzI3X32o9X0aCdwlhWq90UzMWLl' };
        fetch(`https://api.ambeedata.com/latest/by-city?city=${this.city}`, { headers })
            .then(response => response.json())
            .then(obj => {
                this.setState({
                    city: this.city,
                    NO2: obj.stations[0].NO2,
                    PM10: obj.stations[0].PM10,
                    PM25: obj.stations[0].PM25,
                    CO: obj.stations[0].CO,
                    SO2: obj.stations[0].SO2,
                    OZONE: obj.stations[0].OZONE,
                    AQI: obj.stations[0].AQI,
                    aqiInfo: obj.stations[0].aqiInfo
                }, function() { console.log(this.state);})
            });
    }

    render() {
        // RETURN HTML
        this.invokeAPI();

        console.log(this.state);

        // Good (1-50) #BEE554	
        // Moderate (50-100) #ffdb4a	
        // Unhealthy for Sensitive Groups (100-150) #ff7424
        // Unhealthy (150-200) #f54d3d
        // Very Unhealthy (200-250) #6b5491
        // Hazardous (250+) #0c0021

        const aqi = this.state.AQI;
        const arr = ['#BEE554', '#ffdb4a', '#ff7424', '#f54d3d', '#6b5491', '#0c0021'];
        
        let color = "";
        let intensity = "";

        if (aqi < 50) {
            color = arr[0];
            intensity = "Good";
        } else if (aqi > 50 && aqi < 100) {
            color = arr[1];
            intensity = "Moderate";
        } else if (aqi > 100 && aqi < 150) {
            color = arr[2];
            intensity = "Unhealthy for Sensitive Groups";
        } else if (aqi > 150 && aqi < 200) {
            color = arr[3];
            intensity = "Unhealthy";
        } else if (aqi > 200 && aqi < 250) {
            color = arr[4];
            intensity = "Very Unhealthy";
        } else {
            color = arr[5];
            intensity = "Hazardous";
        }

        const data=  [
            { title: 'Pollution', value: aqi, color: color },
            { title: 'White space', value: 250-aqi, color: '#fffff4' }];
            
        const defaultLabelStyle = {
            fontSize: '5px',
            fontFamily: 'sans-serif',
            };

        const widget = (
            <div className="my-container">
                <div className="intensity-side">
                    <div className="today-info-container">
                        <div className="intensity-info">
                            <h2 className="intensity title">Air Quality: {intensity}</h2>
                        </div>
                    </div>
                    <div className="week-container">
                        <ul className="pm-list">
                            <li className="clear">
                                <span className="day-name">PM 10</span>
                                <span className="day-temp">{this.state.PM10}</span>
                            </li>
                            <li>
                                <span className="day-name">PM 2.5</span>
                                <span className="day-temp">{this.state.PM25}</span>
                            </li>
                            <div className="clear"></div>
                        </ul>
                        <ul className="pm-list">
                            <li className="clear">
                                <span className="day-name">NO2</span>
                                <span className="day-temp">{this.state.NO2}</span>
                            </li>

                            <li>
                                <span className="day-name">SO2</span>
                                <span className="day-temp">{this.state.SO2}</span>
                            </li>
                            <div className="clear"></div>
                        </ul>
                        <ul className="pm-list">
                            <li className="clear">
                                <span className="day-name">CO</span>
                                <span className="day-temp">{this.state.CO}</span>
                            </li>

                            <li>
                                <span className="day-name">O3</span>
                                <span className="day-temp">{this.state.OZONE}</span>
                            </li>
                            <div className="clear"></div>
                        </ul>
                    </div>
                </div>
                <div className="aqi-side">
                    <div className="aqi-gradient"></div>
                    <div className="a-container">
                        <PieChart
                            data = {data}
                            lineWidth={35}
                            totalValue={225}
                            label={(data) => data.value}
                            className="pie-chart"
                            labelPosition={50}
                            animate={true}
                            startAngle={50}
                        />
                    </div>
                    <div className="mainp-container">
                    <h2 className="main-pol-title">Air Quality Index:{this.state.AQI}</h2>
                        <h2 className="main-pol-title">Main Pollutant:{this.state.aqiInfo.pollutant}</h2>
                    </div>
                </div>
            </div>);
            

        return widget;
    }

}
export default AirQuality;