//API: https://api.airvisual.com/v2/city?city=Los%20Angeles&state=California&country=USA&key=08662725-f7b9-4eaa-9a86-6d70bd578f99

import React, { useState, useEffect } from "react";
import axios from "axios"

const url = "https://api.airvisual.com/v2/city?city=Los%20Angeles&state=California&country=USA&key=08662725-f7b9-4eaa-9a86-6d70bd578f99"


const AirQualityWidget = () => {
    // const [temp, setTemp] = useState(null)
    // const [humid, setHumid] = useState(null)
    // const [speed, setSpeed] = useState(null)
    // const [precip, setCloud] = useState(null)
    // const [desc, setDesc] = useState(null)
    const [aqi, setAqi] = useState(null)

    const fetch = async () => {
        console.log(url)
        const request = axios.get(url)
        const response = await request

        setAqi(response.data.data.current.pollution.aqius)
        // setTemp(response.data.main.temp)
        // setHumid(response.data.main.humidity)
        // setSpeed(response.data.wind.speed) 
        // setCloud(response.data.clouds.all)
        // setDesc(response.data.weather[0].description)
    }   

    useEffect(() => {
        fetch()

    }, [])
    
    return (
        <p>{JSON.stringify(aqi)}</p>
    )
}

export default AirQualityWidget