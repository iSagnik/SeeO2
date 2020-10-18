import React, {useContext} from "react"
import { PieChart } from "react-minimal-pie-chart";
import "../styles/airQuality.css";
import Context from "../Context"

function AQIFoercastUI () {
    const {avgAQI, newDate} = useContext(Context)
    const arr = ['#BEE554', '#ffdb4a', '#ff7424', '#f54d3d', '#6b5491', '#0c0021'];

    let color = "";
    let intensity = "";

    if (avgAQI < 50) {
        color = arr[0];
        intensity = "Good";
    } else if (avgAQI > 50 && avgAQI < 100) {
        color = arr[1];
        intensity = "Moderate";
    } else if (avgAQI > 100 && avgAQI < 150) {
        color = arr[2];
        intensity = "Unhealthy for Sensitive Groups";
    } else if (avgAQI > 150 && avgAQI < 200) {
        color = arr[3];
        intensity = "Unhealthy";
    } else if (avgAQI > 200 && avgAQI < 250) {
        color = arr[4];
        intensity = "Very Unhealthy";
    } else {
        color = arr[5];
        intensity = "Hazardous";
    }

    //for the pie chart
    const data=  [
        { title: 'Pollution', value: avgAQI, color: color },
        { title: 'White space', value: 250-avgAQI, color: '#fffff4' }];
    return (
        <div className="my-container">
                <div className="intensity-side">
                    <div className="today-info-container">
                        <div className="intensity-info">
                            <br />
                            <h4 className="intensity title">AQI Forecast</h4>
                            <br /> <br />
                            <span className="day-name">Date: {newDate}</span>
                            <br /> <br />
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
                        <div className="mainp-container">
                            <h2 className="main-pol-title">Air Quality Index: {avgAQI}</h2>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default AQIFoercastUI