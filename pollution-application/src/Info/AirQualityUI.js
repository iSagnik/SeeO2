import React, {useContext} from "react"
import { PieChart } from "react-minimal-pie-chart";
import "../styles/airQuality.css";
import Context from "../Context"

function AirQualityUI () {
    const {NO2, PM10, PM25, CO, SO2, Ozone, AQI, pollutant} = useContext(Context)

    const arr = ['#BEE554', '#ffdb4a', '#ff7424', '#f54d3d', '#6b5491', '#0c0021'];



    let color = "";
    let intensity = "";

    if (AQI < 50) {
        color = arr[0];
        intensity = "Good";
    } else if (AQI > 50 && AQI < 100) {
        color = arr[1];
        intensity = "Moderate";
    } else if (AQI > 100 && AQI < 150) {
        color = arr[2];
        intensity = "Unhealthy for Sensitive Groups";
    } else if (AQI > 150 && AQI < 200) {
        color = arr[3];
        intensity = "Unhealthy";
    } else if (AQI > 200 && AQI < 250) {
        color = arr[4];
        intensity = "Very Unhealthy";
    } else {
        color = arr[5];
        intensity = "Hazardous";
    }

    //for the pie chart
    const data=  [
        { title: 'Pollution', value: AQI, color: color },
        { title: 'White space', value: 250-AQI, color: '#fffff4' }];
    return (
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
                                <span className="day-temp">{PM10}</span>
                            </li>
                            <li>
                                <span className="day-name">PM 25</span>
                                <span className="day-temp">{PM25}</span>
                            </li>
                            <div className="clear"></div>
                        </ul>
                        <ul className="pm-list">
                            <li className="clear">
                                <span className="day-name">NO2</span>
                                <span className="day-temp">{NO2}</span>
                            </li>

                            <li>
                                <span className="day-name">SO2</span>
                                <span className="day-temp">{SO2}</span>
                            </li>
                            <div className="clear"></div>
                        </ul>
                        <ul className="pm-list">
                            <li className="clear">
                                <span className="day-name">CO</span>
                                <span className="day-temp">{CO}</span>
                            </li>

                            <li>
                                <span className="day-name">O3</span>
                                <span className="day-temp">{Ozone}</span>
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
                </div>
            </div>
    )
}

export default AirQualityUI