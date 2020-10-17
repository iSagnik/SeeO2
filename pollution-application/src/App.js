import React from 'react';
import './styles/App.css';
import WeatherWidget from "./info/Weather.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Polution Tracking!
        </p>
      </header>
      <WeatherWidget />
    </div>
  );
}

export default App;
