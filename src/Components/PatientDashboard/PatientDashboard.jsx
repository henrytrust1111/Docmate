import React from 'react'
import PatientHeader from './PatientHeader'
import PatientHospitalPage from './PatientHospitalPage'
import PatientLeftNav from './PatientLeftNav'
import PatientAppointmentForm from './PatientAppointmentForm'

const PatientDashboard = () => {
  return (
    <div className="admin-dashboard-container">
    <PatientHeader />
    <div className="admin-dashboard-holder">
      <PatientLeftNav />
      {/* <PatientHospitalPage/> */}
      <PatientAppointmentForm />
    </div>
  </div>
  )
}

export default PatientDashboard