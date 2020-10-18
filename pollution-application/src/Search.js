import React, {useContext} from "react"
import "./styles/search.css"
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // only needs to be imported once
import Context from "./Context"

const Search = () => {
  const {apiCallW, location} = useContext(Context)
  var today = new Date();
  return (
    <div className="container-search">
        <div className="container__item">
            <form onSubmit = {apiCallW} className="form">
                <input name = "location" type="text" className="form__field" placeholder="Search City" />
                <button className="btn btn--primary btn--inside uppercase">Change Location</button>
                { location && <input name = "date" type="date" className="form__field" placeholder="Forecast Date" /> }
            </form>
        </div>
        
    </div>
  )
}

export default Search