import React from 'react'
import "./PopUp.css"

const PopUp = ({image,text}) => {
  return (
    <div className="popUp-screen">
        <div className="popUp-message-container">
            <div className="sucess-icon-holder">
            <img src={image} alt="success icon"/>
            </div>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default PopUp