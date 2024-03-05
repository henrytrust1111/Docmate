import React from 'react'
import "./PatientInformationBox.css"

const PatientInformationBox = ({title,text}) => {
  return (
    <div className='PatientInformationBoxContainer1'>
      <div className="PatientInformationBoxContentHolder1">
      <h4>{title}</h4>
      <p id="PatientInformationBoxContentHolderText">{text}</p>
      </div>
    </div>
  )
}

export default PatientInformationBox