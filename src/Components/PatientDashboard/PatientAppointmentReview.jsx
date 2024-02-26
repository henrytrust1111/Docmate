import React from 'react'
import "./PatientAppointmentReview.css"

const PatientAppointmentReview = () => {
  return (
    <div className='PatientAppointmentReview-container'>
      <div className="PatientAppointmentReview-wrapper">
        <div className="PatientAppointmentReview-container1">
          <h2>Appointment Review</h2>
        </div>
        <div className="PatientAppointmentReview-container2">
          <div className="PatientAppointmentReview-content">
            <p>Doctor's Name</p>
            <span>Dr Ahmed</span>
          </div>
          <div className="PatientAppointmentReview-content">
            <p>Appointment Day</p>
            <span>07/12/2024</span>
          </div>
          <div className="PatientAppointmentReview-content">
            <p>Time of appointment</p>
            <span>12:00pm</span>
          </div>
          <div className="PatientAppointmentReview-content">
            <p>Fee</p>
            <span>₦3,000</span>
          </div>
        </div>
        <div className="PatientAppointmentReview-container3">
          <div className="PatientAppointmentReview-btn1">Request a Reschedule</div>
          <div className="PatientAppointmentReview-btn2">Pay for appointment</div>
        </div>
      </div>
    </div>
  )
}

export default PatientAppointmentReview