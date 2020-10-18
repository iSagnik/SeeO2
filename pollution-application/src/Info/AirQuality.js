// API key call
// http://api.airpollutionapi.com/1.0/aqi?lat={LATITUDE}&lon={LONGITUDE}&APPID={APIKEY}

// Ambee key: cXYotSLZMv6oKi9AqzSMH3B1rYOO0hR01MDV9ZDe

//iqair key: 08662725-f7b9-4eaa-9a86-6d70bd578f99
// {{urlExternalAPI}}v2/city?city=Los Angeles&state=California&country=USA&key={{YOUR_API_KEY}}
// {{urlExternalAPI}}v2/city?city={city}&state={state}&country={country}&key={{YOUR_API_KEY}}
// urlExternalAPI = https://api.airvisual.com


import React, { Component } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
// import { PieChart } from "react-easy-pie-chart";
import {PieChart} from "react-minimal-pie-chart";
import "./../styles/airQuality.css";

class AirQuality extends Component {
    constructor(props) {
        super();
        this.city = props.city;
        this.state= {}
        
        this.urlExternalAPI = "https://api.ambeedata.com/latest/by-city?city=";
        this.key = "cXYotSLZMv6oKi9AqzSMH3B1rYOO0hR01MDV9ZDe";
    }

    invokeAPI() {

        const headers = {'x-api-key': 'cXYotSLZMv6oKi9AqzSMH3B1rYOO0hR01MDV9ZDe'};
        fetch(`https://api.ambeedata.com/latest/by-city?city=${this.city}`, {headers})
        .then(response => response.json())
        .then(obj => {
            this.setState({
                city: this.city,
                NO2: obj.stations[0].NO2,
                PM10: obj.stations[0].PM10,
                PM25: obj.stations[0].PM25,
                CO: obj.stations[0].CO,
                SO2: obj.stations[0].SO2,
                OZONE: obj.stations[0].OZONE,
                AQI: obj.stations[0].AQI,
                aqiInfo: obj.stations[0].aqiInfo
                })});
    }
    
    // supporting() {
        // $(".circle-graph").easyPieChart({
        //     scaleColor: false,
        //     lineWidth: 20,
        //     lineCap: 'butt',
        //     barColor: '#a378aa',
        //     trackColor: '#e7b8ef' ,
        //     size: 150,
        //     animate: 800
        // });

        // $(".circle-graph").<PieChart
        // data={[
        //     { title: 'F', value: 10, color: '#FFFFFF' },
        //     { title: 'Zero', value: 15, color: '#000000' },
        // ]}
        // />;
    // }

    render() {
        // RETURN HTML
        this.invokeAPI();

        const aqi = this.state.AQI;

        /*const donutGraph = 
        (<div class="container">
            <section class="graph-one">
                <div class="circle-graph-container">
                <div class="circle-graph" data-percent={aqi}><p>HTML</p></div>
                </div>
            </section> 
        </div>);      

        this.supporting();


        // 
      const domContainer = document.querySelector('#app');
      ReactDOM.render(React.createElement(ApexChart), domContainer);*/


        /*let gauge = (<div class="row">
        <div class="gauge">
          <div class="variable gauge__meter gauge__meter--10"></div>
        </div>
        </div>);

        $(".a-container").append(gauge);*/

        const widget = (
        <div className="container">
            <div class="intensity-side">
                <div class="today-info-container">
                    <div class="intensity-info"> 
                        <h2 class="intensity title">Intensity: ${}</h2>
                    </div>
                </div>
                <div class="week-container">
                    <ul class="pm-list">
                    <li class="clear">
                                <span class="day-name">PM 10</span>
                                <span class="day-temp">${this.state.PM10}</span>
                            </li>
                            <li>
                                <span class="day-name">PM 2.5</span>
                                <span class="day-temp">${this.state.PM25}</span>
                            </li>
                    <div class="clear"></div>
                    </ul>
                        <ul class="pm-list">
                    <li class="clear">
                                <span class="day-name">NO2</span>
                                <span class="day-temp">${this.state.NO2}</span>
                            </li>
                        
                            <li>
                                <span class="day-name">SO2</span>
                                <span class="day-temp">${this.state.SO2}</span>
                            </li>
                    <div class="clear"></div>
                    </ul>
                    <ul class="pm-list">
                            <li class="clear">
                                <span class="day-name">CO</span>
                                <span class="day-temp">${this.state.CO}</span>
                            </li>
                        
                            <li>
                                <span class="day-name">O3</span>
                                <span class="day-temp">${this.state.OZONE}</span>
                            </li>
                    <div class="clear"></div>
                    </ul>
                </div>
            </div>
            <div class="aqi-side">
                <div class="aqi-gradient"></div>
                    <div class="a-container">
                        <PieChart
                        data={[
                            { title: 'F', value: 10, color: '#FFFFFF' },
                            { title: 'Zero', value: 15, color: '#000000' }]}/>;
                    </div>
                    <div class="mainp-container">
                        <h2 class="main-pol-title">Main Pollutant:</h2>
                        <span class="main-pol">${this.state.aqiInfo}</span>
                    </div>
                </div>
            </div>);
    
    return widget;
    }
    
}
export default AirQuality;