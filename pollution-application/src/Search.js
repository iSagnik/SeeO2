import React, {useContext} from "react"
import "./styles/search.css"
import Context from "./Context"

const Search = () => {
  const {apiCall} = useContext(Context)
  return (
    <div className="container-search">
        <div className="container__item">
            <form onSubmit = {apiCall} className="form">
                <input name = "location" type="text" className="form__field" placeholder="Search City" />
                <button className="btn btn--primary btn--inside uppercase">Change Location</button>
            </form>
        </div>
    </div>
  )
}

export default Search