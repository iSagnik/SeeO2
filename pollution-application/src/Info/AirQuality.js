// API key call
// http://api.airpollutionapi.com/1.0/aqi?lat={LATITUDE}&lon={LONGITUDE}&APPID={APIKEY}

// Ambee key: cXYotSLZMv6oKi9AqzSMH3B1rYOO0hR01MDV9ZDe

//iqair key: c3bf73d7-87e0-4ea5-adbc-19ad236a47f7
// {{urlExternalAPI}}v2/city?city=Los Angeles&state=California&country=USA&key={{YOUR_API_KEY}}
// {{urlExternalAPI}}v2/city?city={city}&state={state}&country={country}&key={{YOUR_API_KEY}}
// urlExternalAPI = https://api.airvisual.com


import React, { Component } from "react";
import { render } from 'react-dom';

export class AirQuality extends Component {
    constructor(_city, _state, _country) {
        super();
        this.state = {
            city: _city,
            state: _state,
            country: _country,
            coordinates: [],
            forecasts: [],
            current: {},
            history: {},
            units: {}
        }
        const urlExternalAPI = "https://api.airvisual.com/v2/city?";
        const key = "c3bf73d7-87e0-4ea5-adbc-19ad236a47f7";
    }

    invokeAPI() {
        // get info from API
        fetch({ urlExternalAPI } + { city } + "&state=" + { state } + "&country=" + { country } + "&key=" + { key })
            .then(response => response.json())
            .then(obj => console.log(obj.data.location.coordinates));
        // .then(obj => {
        //     this.setState({
        //         coordinates: obj.data.location.coordinates,
        //         forecasts: obj.data.forecasts,
        //         current: obj.data.current,
        //         history: obj.history,
        //         units: obj.units
        //     })
        // });
    }

    render() {
        // RETURN HTML 
    }


}