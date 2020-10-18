import React, {useContext} from "react"
import { PieChart } from "react-minimal-pie-chart";
import "../styles/airQuality.css";
import Context from "../Context"

function AQIFoercastUI () {


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
                            <h2 className="intensity title">AQI Forecast</h2>
                            <span className="day-name">Date</span>
                            <h2 className="intensity title">Air Quality: {intensity}</h2>
                        </div>
                        
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
                    <h2 className="main-pol-title">Air Quality Index: {AQI}</h2>
                        <h2 className="main-pol-title">Main Pollutant: {pollutant}</h2>
                    </div>
                </div>
            </div>
    )
}

export default AQIFoercastUI