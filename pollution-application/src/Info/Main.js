import React, { useState } from "react";
import axios from "axios"
import WeatherUI from "./WeatherUI"
import Search from "../Search";
import Context from "../Context"

const KEY = "e2a71bb47770ce392ca0d557f48055a0"


const Main = (props) => {
    const [resp, setResp] = useState(null)
    const [temp, setTemp] = useState(null)
    const [humid, setHumid] = useState(null)
    const [speed, setSpeed] = useState(null)
    const [precip, setCloud] = useState(null)
    const [desc, setDesc] = useState(null)
    const [location, setLoc] = useState(null)

    const fetch = async (e) => {
        e.preventDefault()
        var loca = props.City
        e ? loca = e.target.elements.location.value: //pass
        setLoc(loca)
        const urlW = `https://api.openweathermap.org/data/2.5/weather?q=${loca}&appid=${KEY}&units=metric`
        console.log(urlW)
        const request = axios.get(urlW)
        const response = await request

        setResp(response.data.main)
        setTemp(response.data.main.temp)
        setHumid(response.data.main.humidity)
        setSpeed(response.data.wind.speed) 
        setCloud(response.data.clouds.all)
        setDesc(response.data.weather[0].description)
    }   
    return (
        <div className="Weather-Content">
            <Context.Provider value = {{ apiCall: fetch, location, Date: props.Date, temp, humid, speed, precip, desc}}>
                { 
                resp ?
                <WeatherUI /> : 
                <WeatherUI 
                />
                }
                <Search apiCall = {fetch}/>
            </Context.Provider>
        </div>
    )
    
}

export default Main