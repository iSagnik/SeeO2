import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCouch, faFilter, faHeadSideMask, faHouseUser } from "@fortawesome/free-solid-svg-icons"
import "./styles/Tips.css"

const Tips = (props) => {
    return (
        <div className="container1">
            <div className="grid-1-5">
                <h3><span className="uppercase">{props.tip1}</span></h3>
                <p>Exposure to the outdoors during high particle pollution can cause major health effects, especially to those who have pre-existing heart and lung conditions. If possible, ensure that your air indoors is properly filtered.</p>
                <span className="logo-tips"><FontAwesomeIcon icon = {faHouseUser} size = "3x" /></span>
            </div>

            <div className="grid-1-5">
                <h3><span className="uppercase">{props.tip2}</span></h3>
                <p>If going outdoors cannot be avoided, wear a N-95 mask or P-100 respirator. Unlike cloth and paper masks, the N-95 and P-100 can protect your lungs from small particles like PM2.5.</p>
                <span className="logo-tips"><FontAwesomeIcon icon = {faHeadSideMask} size = "3x" /></span>

            </div>

            <div className="grid-1-5">
                <h3><span className="uppercase">{props.tip3}</span></h3>
                <p>Avoid performing strenuous activities while particulate matter concentration is high. Reduction of activity results in reduction in amount of small particulate matter breathed in and lower exposure. </p>
                <span className="logo-tips"><FontAwesomeIcon icon = {faCouch} size = "3x" /></span>

            </div>

            <div className="grid-1-5">
                <h3><span className="uppercase">{props.tip4}</span></h3>
                <p>Air filters keep dangerous particles out of your home. This may include electronic air cleansers, electrostatic precipitators and mechanical filters. Avoid air filters that generate ozone. </p>
                <span className="logo-tips"><FontAwesomeIcon icon = {faFilter} size = "3x" /></span>

            </div>

        </div>
    )
}

export default Tips