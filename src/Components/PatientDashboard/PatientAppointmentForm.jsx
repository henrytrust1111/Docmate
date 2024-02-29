import React, { useState } from 'react'
import "./PatientAppointmentForm.css"
import PopUp from '../PopUp/PopUp'

const PatientAppointmentForm = ({setPatientAppointmentForm,setPatientHospitalSelection}) => {
  const [popUp, setPopUp] = useState(false)
  const handleSendDetails = ()=>{
    setPopUp(true)
    setTimeout(() => {
      setPopUp(false)
      setPatientAppointmentForm(false)
      setPatientHospitalSelection(true)
    }, 2000);
  }
  return (
    <>
       <div className="patientAppointmentForm-container">
      <div className="patientAppointmentForm-wrapper">
        <div className="patientAppointmentForm-holder">
          <div className="patientAppointmentForm-header">
            <p>Patient Appointment Form</p>
          </div>
          <div className="patientAppointmentForm-form-container">
            <p className='patientAppointmentForm-intro'>Please fill the boxes below</p>
            <div className="patientAppointmentForm-input-container">
              <label htmlFor="" className='patientAppointmentForm-label'>Patient Name:</label>
              <input type="text" className='patientAppointmentForm-input-input'/>
            </div>
            <div className="patientAppointmentForm-input-container">
              <label htmlFor="" className='patientAppointmentForm-label'>Last Visitation:</label>
              <input type="text" className='patientAppointmentForm-input-input'/>
            </div>
            <div className="patientAppointmentForm-diagnosis-container">
              <label htmlFor="" className='patientAppointmentForm-diagnosis-label'>Last Diagnosis:</label>
              <textarea name="" id="" cols="30" rows="10" placeholder='Kindly add your last diagnosis if any'></textarea>
            </div>
            <div className="patientAppointmentForm-diagnosis-container">
              <label htmlFor="" className='patientAppointmentForm-diagnosis-label'>Last Symtoms:</label>
              <textarea name="" id="" cols="30" rows="10" placeholder='Kindly add how you feel'></textarea>
            </div>
          </div>
          <div className="patientAppointmentForm-btn-container">
            <div className="patientAppointmentForm-btn" onClick={handleSendDetails}>Send Details</div>
          </div>
        </div>
      </div>
    </div>
    {popUp? <PopUp text="Appointment details has been sent, you would get a mail for your new a appointment" image="./icons/emailIcon.svg" />:null}
    </>
  )
}

export default PatientAppointmentForm