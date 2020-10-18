import React, { useState } from "react";
import axios from "axios"
import WeatherUI from "./WeatherUI"
import Search from "../Search";
import Context from "../Context"
import "../styles/Main.css"
import AirQualityUI from "./AirQualityUI";
import AQIFoercastUI from "./AQIForecastUI";

const KEY = "e2a71bb47770ce392ca0d557f48055a0"


const Main = (props) => {
    //weather state data

    //Forecast AQI
    const [avgAQI, setAQIFore] = useState(null)
    const [ newDate, setNewDate] = useState(null)

    //const [respW, setRespW] = useState(null)
    const [temp, setTemp] = useState(null)
    const [humid, setHumid] = useState(null)
    const [speed, setSpeed] = useState(null)
    const [precip, setCloud] = useState(null)
    const [desc, setDesc] = useState(null)
    const [location, setLoc] = useState(null)

    //AQI state data
    const [NO2, setNO2] = useState(null)
    const [PM10, setPM10] = useState(null)
    const [PM25, setPM25] = useState(null)
    const [CO, setCO] = useState(null)
    const [SO2, setSO2] = useState(null)
    const [Ozone, setOzone] = useState(null)
    const [AQI, setAQI] = useState(null)

    const fetchAPI = async e => {
        e.preventDefault()
        const dates = e.target.elements.dates.value
        console.log("dates: "  + dates)
        const locale = location[0].toUpperCase() + location.slice(1).toLowerCase()


        const urlApi = `https://cors-anywhere.herokuapp.com/https://salty-plains-36642.herokuapp.com/airci/${locale}/${dates}`
        console.log(urlApi)

        const request = axios.get(urlApi)
        const response = await request
        var inum1 = parseInt(response.data[1]);
        var inum0 = parseInt(response.data[0]);
        var avgAQI = (inum0 + inum1) / 2.0
        console.log(avgAQI)
        setAQIFore(avgAQI)
        setNewDate(dates)
        

    }
    const fetchW = async (e) => {
        e.preventDefault()
        const loca = e.target.elements.location.value
        setLoc(loca)
        setAQIFore(null)
        console.log(e)

            
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
        const headers = { 'x-api-key': '7Qiw7LSZ9D6NIGhYrm9O4209g6XNd9XQ8ceFoywf' };
        const urlA = `https://api.ambeedata.com/latest/by-city?city=${loca}`
        const request2 = await axios.get(urlA, { headers })
        const response2 = await request2
        console.log(urlA)
        console.log(response2.data.stations)
        if (response2.data.stations) {
            setNO2(response2.data.stations[0].NO2)
            setPM10(response2.data.stations[0].PM10)
            setPM25(response2.data.stations[0].PM25)
            setCO(response2.data.stations[0].CO) 
            setSO2(response2.data.stations[0].SO2)
            setOzone(response2.data.stations[0].OZONE)
            setAQI(response2.data.stations[0].AQI)
        }
       // }
        
    }   

    return (
        <div className="Weather-Content">
            <Context.Provider value = {
                { apiCallW: fetchW, aqiAPI: fetchAPI,location, Date: props.Date, 
                    temp, humid, speed, precip, desc, NO2, PM10, PM25,
                    CO, SO2, Ozone, AQI, avgAQI, newDate          
                }
            }>
                <div className="Widgets">
                    <WeatherUI />
                    {
                        avgAQI ? <AQIFoercastUI /> : <AirQualityUI />
                        
                    }
                </div>
                <Search />
            </Context.Provider>
        </div>
    )
    
}

export default Main