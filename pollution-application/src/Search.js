import React, {useContext} from "react"
import "./styles/search.css"
import 'react-infinite-calendar/styles.css'; // only needs to be imported once
import Context from "./Context"

const Search = () => {
  const {apiCallW, location, aqiAPI} = useContext(Context)
  return (
    <div className="container-search">
        <div className="container__item">
            <form onSubmit = {apiCallW} className="form">
                <input name = "location" type="text" className="form__field" placeholder="Search City" />
                <button className="btn btn--primary btn--inside uppercase">Change Location</button>
            </form>
        </div>
        <br /><br />
        {   location && 
            <form onSubmit = {aqiAPI} className="form">
            <input name = "dates" type="text" className="form__field" placeholder="Forecast date: DD/MM" />
            <button className="btn btn--primary btn--inside uppercase">Get AQI Forecast</button>
        </form>
        }
        
    </div>
  )
}

export default Search