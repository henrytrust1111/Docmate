import React from 'react'
import PatientHeader from './PatientHeader'
import PatientHospitalPage from './PatientHospitalPage'
import PatientLeftNav from './PatientLeftNav'

const PatientDashboard = () => {
  return (
    <div className="admin-dashboard-container">
    <PatientHeader />
    <div className="admin-dashboard-holder">
      <PatientLeftNav />
      <PatientHospitalPage/>
    </div>
  </div>
  )
}

export default PatientDashboard