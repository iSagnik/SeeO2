import React from 'react';
import './styles/App.css';
import WeatherWidget from "./Info/Weather"
import Search from "./Search"

function App() {
  return (
    <div className="App">
        <WeatherWidget 
            Date = "17 Oct 2019" 
            City = "Delhi"
        />
        <Search />
    </div>
  );
}

export default App;
