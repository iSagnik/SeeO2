import React, { useState } from "react";
import axios from "axios"
import WeatherUI from "./WeatherUI"
import Search from "../Search";
import Context from "../Context"
import "../styles/Main.css"
import AirQualityUI from "./AirQualityUI";

const KEY = "e2a71bb47770ce392ca0d557f48055a0"


const Main = (props) => {
    //weather state data
    //const [respW, setRespW] = useState(null)
    const [temp, setTemp] = useState(null)
    const [humid, setHumid] = useState(null)
    const [speed, setSpeed] = useState(null)
    const [precip, setCloud] = useState(null)
    const [desc, setDesc] = useState(null)
    const [location, setLoc] = useState(null)

    //AQI state data
    const [respA, setRespA] = useState(null)
    const [NO2, setNO2] = useState(null)
    const [PM10, setPM10] = useState(null)
    const [PM25, setPM25] = useState(null)
    const [CO, setCO] = useState(null)
    const [SO2, setSO2] = useState(null)
    const [Ozone, setOzone] = useState(null)
    const [AQI, setAQI] = useState(null)
    const [pollutant, setP] = useState(null)

    const fetchW = async (e) => {
        e.preventDefault()
        const loca = e.target.elements.location.value
        setLoc(loca)
        const urlW = `https://api.openweathermap.org/data/2.5/weather?q=${loca}&appid=${KEY}&units=metric`
        //console.log(urlW)
        const request = axios.get(urlW)
        const response = await request

        //setRespW(response.data.main)
        setTemp(response.data.main.temp)
        setHumid(response.data.main.humidity)
        setSpeed(response.data.wind.speed) 
        setCloud(response.data.clouds.all)
        setDesc(response.data.weather[0].description)


        //set data for AQI widget
        const headers = { 'x-api-key': 'qaP2uyLEPz2whhzI3X32o9X0aCdwlhWq90UzMWLl' };
        const urlA = `https://api.ambeedata.com/latest/by-city?city=${loca}`
        const request2 = await axios.get(urlA, { headers })
        const response2 = await request2
        console.log(urlA)
        console.log(response2.data.stations)
        if (response2.data.stations) {
            setRespA(response2.data.stations)
            setNO2(response2.data.stations[0].NO2)
            setPM10(response2.data.stations[0].PM10)
            setPM25(response2.data.stations[0].PM25)
            setCO(response2.data.stations[0].CO) 
            setSO2(response2.data.stations[0].SO2)
            setOzone(response2.data.stations[0].OZONE)
            setAQI(response2.data.stations[0].AQI)
            setP(response2.data.stations[0].aqiInfo.pollutant)
        }
    }   

    return (
        <div className="Weather-Content">
            <Context.Provider value = {
                { apiCallW: fetchW, location, Date: props.Date, 
                    temp, humid, speed, precip, desc, NO2, PM10, PM25,
                    CO, SO2, Ozone, AQI, pollutant            
                }
            }>
                <div className="Widgets">
                    <WeatherUI />
                    <AirQualityUI />
                </div>
                <Search />
            </Context.Provider>
        </div>
    )
    
}

export default Main