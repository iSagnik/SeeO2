import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCouch, faFilter, faHeadSideMask, faHouseUser } from "@fortawesome/free-solid-svg-icons"
import "./styles/Tips.css"

const Tips = (props) => {
    return (
        <div className="container1">
            <div className="grid-1-5">
                <h3><span className="uppercase">{props.tip1}</span></h3>
                <p>{props.aqi}</p>
                <span className="logo-tips"><FontAwesomeIcon icon = {faHouseUser} size = "3x" /></span>
            </div>

            <div className="grid-1-5">
                <h3><span className="uppercase">{props.tip2}</span></h3>
                <p>10,000 monthly visits</p>
                <span className="logo-tips"><FontAwesomeIcon icon = {faHeadSideMask} size = "3x" /></span>

            </div>

            <div className="grid-1-5">
                <h3><span className="uppercase">{props.tip3}</span></h3>
                <p>10,000 monthly visits</p>
                <span className="logo-tips"><FontAwesomeIcon icon = {faCouch} size = "3x" /></span>

            </div>

            <div className="grid-1-5">
                <h3><span className="uppercase">{props.tip4}</span></h3>
                <p>10,000 monthly visits</p>
                <span className="logo-tips"><FontAwesomeIcon icon = {faFilter} size = "3x" /></span>

            </div>

        </div>
    )
}

export default Tips