import React from 'react';
import './styles/App.css';
//import WeatherWidget from "./Info/Weather.js";
import AirQuality from "./Info/AirQuality.js";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Polution Tracking!
        </p>
      </header>
      {/* <WeatherWidget
        Date="15 Jan 2019"
        City="Raleigh"
        Precip="10"
        Temperature="18"
        Humid="36"
      /> */}
    <AirQuality city="Raleigh"/>
    </div>
  );
}

export default App;
