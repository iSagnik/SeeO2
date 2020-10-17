// API key call
// http://api.airpollutionapi.com/1.0/aqi?lat={LATITUDE}&lon={LONGITUDE}&APPID={APIKEY}

// Ambee key: cXYotSLZMv6oKi9AqzSMH3B1rYOO0hR01MDV9ZDe

//iqair key: c3bf73d7-87e0-4ea5-adbc-19ad236a47f7
// {{urlExternalAPI}}v2/city?city=Los Angeles&state=California&country=USA&key={{YOUR_API_KEY}}
// {{urlExternalAPI}}v2/city?city={city}&state={state}&country={country}&key={{YOUR_API_KEY}}
// urlExternalAPI = https://api.airvisual.com


import React, { Component } from "react";

class AirQuality extends Component {
    constructor(props) {
        super();
        this.AQIState = {
            city: props.location.city,
            state: props.location.state,
            country: props.location.country,
            coordinates: [],
            forecasts: [],
            current: {},
            history: {},
            units: {}
        }
        
        this.urlExternalAPI = "https://api.airvisual.com/v2/city?city=";
        this.key = "c3bf73d7-87e0-4ea5-adbc-19ad236a47f7";
    }

    invokeAPI() {
        // get info from API
        fetch(`https://api.airvisual.com/v2/city?city=${this.AQIState.city}&state=${this.AQIState.state}&country=${this.AQIState.country}&key=${this.key}`)
            .then(response => response.json())
            //.then(obj => console.log(obj.data.location.coordinates));
        .then(obj => {
            this.setState({
                coordinates: obj.data.location.coordinates,
                forecasts: obj.data.forecasts,
                current: obj.data.current,
                history: obj.history,
                units: obj.units
            })
        });
    }

    render() {
        // RETURN HTML
        this.invokeAPI();
    return <p>Hi!{this.AQIState.coordinates}</p> 
    }


}

export default AirQuality;