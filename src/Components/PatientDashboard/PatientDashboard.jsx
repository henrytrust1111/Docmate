import React from 'react'
import PatientHeader from './PatientHeader'
import PatientHospitalPage from './PatientHospitalPage'
import PatientLeftNav from './PatientLeftNav'
import PatientAppointmentForm from './PatientAppointmentForm'
import PatientProfileUpdate from './PatientProfileUpdate'
import PatientAppointmentReview from './PatientAppointmentReview'
import PatientRescheduleForm from '../PopUp/PatientRescheduleForm'

const PatientDashboard = () => {
  return (
    <div className="admin-dashboard-container">
    <PatientHeader />
    <div className="admin-dashboard-holder">
      <PatientLeftNav />
      {/* <PatientHospitalPage/> */}
      {/* <PatientAppointmentForm /> */}
      {/* <PatientProfileUpdate /> */}
      {/* <PatientAppointmentReview /> */}
      <PatientRescheduleForm />
    </div>
  </div>
  )
}

export default PatientDashboard