import React from 'react';
import "../styles/weather.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, } from "@fortawesome/free-solid-svg-icons"

function WeatherWidget (props) {
    return (
        <div class="container">
            <div class="weather-side">
                <div class="weather-gradient"></div>
                <div class="date-container">
                    <h2 class="date-dayname">Tuesday</h2><span class="date-day">{props.Date}</span>
                    <i class="location-icon" data-feather="map-pin"></i>
                    <span class="location">{props.City}</span></div>
                <div class="weather-container">
                    <i class="weather-icon" data-feather="sun"></i>
                    <h1 class="weather-temp">{props.Temperature}°C</h1>
                    <h3 class="weather-desc">Sunny</h3>
                </div>
            </div>
            <div class="info-side">
                <div class="today-info-container">
                    <div class="today-info">
                        <div class="precipitation"> <span class="title">PRECIPITATION</span><span class="value">{props.Precip} %</span>
                            <div class="clear"></div>
                        </div>
                        <div class="humidity"> <span class="title">HUMIDITY</span><span class="value">{props.Humid} %</span>
                            <div class="clear"></div>
                        </div>
                        <div class="wind"> <span class="title">WIND</span><span class="value">{props.Wind} km/h</span>
                            <div class="clear"></div>
                        </div>
                    </div>
                </div>
                <div class="week-container">
                    <ul class="week-list">
                        <li class="active"><i class="day-icon" data-feather="sun"></i><span class="day-name">Tue</span><span class="day-temp">29°C</span></li>
                        <li><i class="day-icon" data-feather="cloud"></i><span class="day-name">Wed</span><span class="day-temp">21°C</span></li>
                        <li><i class="day-icon" data-feather="cloud-snow"></i><span class="day-name">Thu</span><span class="day-temp">08°C</span></li>
                        <li><i class="day-icon" data-feather="cloud-rain"></i><span class="day-name">Fry</span><span class="day-temp">19°C</span></li>
                        <div class="clear"></div>
                    </ul>
                </div>
                <div class="location-container">
                    <button class="location-button">
                        <i data-feather="map-pin"></i>
                        <span>Change location</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WeatherWidget