import React from 'react'
import "./PopUp.css"

const PopUp = () => {
  return (
    <div className="popUp-screen">
        <div className="popUp-message-container">
            <div className="sucess-icon-holder">
            <img src="./icons/success.svg" alt="success icon"/>
            </div>
            <p>Appointment booked successfully</p>
        </div>
    </div>
  )
}

export default PopUp