import React from 'react';
import './styles/App.css';
import WeatherWidget from "./Info/Weather"
import Search from "./Search"

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
        <Search />
    </div>
  );
}

export default App;
