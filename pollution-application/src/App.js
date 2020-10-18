import React from 'react';
import './styles/App.css';
import WeatherWidget from "./Info/Weather"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Polution Tracking!
        </p>
        </header>
            <WeatherWidget 
                Date = "15 Jan 2019" 
                City = "London"
            />
    </div>
  );
}

export default App;
