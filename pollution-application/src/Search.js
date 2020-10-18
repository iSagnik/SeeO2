import React, {useContext} from "react"
import "./styles/search.css"

const Search = () => {
  //const {api_call} = useContext(Context)
  return (
    <div className="container-search">
        <div className="container__item">
            <form className="form">
                <input type="text" className="form__field" placeholder="Seatch City" />
                <button type="button" className="btn btn--primary btn--inside uppercase">Send</button>
            </form>
        </div>
    </div>
  )
}

export default Search