import "../styles/weather.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, } from "@fortawesome/free-solid-svg-icons"
import React, { useState, useEffect } from "react";
import axios from "axios"

const KEY = "e2a71bb47770ce392ca0d557f48055a0"


const WeatherWidget = (props) => {
    const [temp, setTemp] = useState(null)
    const [humid, setHumid] = useState(null)
    const [speed, setSpeed] = useState(null)
    const [precip, setCloud] = useState(null)
    const [desc, setDesc] = useState(null)

    const fetch = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.City}&appid=${KEY}&units=metric`
        console.log(url)
        const request = axios.get(url)
        const response = await request

        setTemp(response.data.main.temp)
        setHumid(response.data.main.humidity)
        setSpeed(response.data.wind.speed) 
        setCloud(response.data.clouds.all)
        setDesc(response.data.weather[0].description)
    }   

    useEffect(() => {
        fetch()

    }, [])
    
    return (
        <div class="container">
            <div class="weather-side">
                <div class="weather-gradient"></div>
                <div class="date-container">
                    <h2 class="date-dayname">Tuesday</h2><span class="date-day">{props.Date}</span>
                    <span className="logo"><FontAwesomeIcon icon = {faMapMarkerAlt} size = "1x" /></span>
                    <span class="location">{props.City}</span></div>
                <div class="weather-container">
                    <i class="weather-icon" data-feather="sun"></i>
                    <h3 class="weather-temp">{temp}°C</h3>
                    <h3 class="weather-desc">{desc}</h3>
                </div>
            </div>
            <div class="info-side">
                <div class="today-info-container">
                    <div class="today-info">
                        <div class="precipitation"> <span class="title">PRECIPITATION  </span><span class="value">{precip} %</span>
                            <div class="clear"></div>
                        </div>
                        <div class="humidity"> <span class="title">HUMIDITY</span><span class="value">{humid} %</span>
                            <div class="clear"></div>
                        </div>
                        <div class="wind"> <span class="title">WIND</span><span class="value">{speed} km/h</span>
                            <div class="clear"></div>
                        </div>
                    </div>
                </div>
                {/* <div class="week-container">
                    <ul class="week-list">
                        <li class="active"><i class="day-icon" data-feather="sun"></i><span class="day-name">Tue</span><span class="day-temp">29°C</span></li>
                        <li><i class="day-icon" data-feather="cloud"></i><span class="day-name">Wed</span><span class="day-temp">21°C</span></li>
                        <li><i class="day-icon" data-feather="cloud-snow"></i><span class="day-name">Thu</span><span class="day-temp">08°C</span></li>
                        <li><i class="day-icon" data-feather="cloud-rain"></i><span class="day-name">Fry</span><span class="day-temp">19°C</span></li>
                        <div class="clear"></div>
                    </ul>
                </div> */}
                <div class="location-container">
                    <button class="location-button">
                        <span className="logo"><FontAwesomeIcon icon = {faMapMarkerAlt} size = "1x" /></span>
                        <span>   Change location</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WeatherWidget