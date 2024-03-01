import React from 'react'
import "./HospitalOrPatient.css"
import { useNavigate } from 'react-router-dom'

const HospitalOrPatient = () => {
    const nav = useNavigate()
    const handlePatient = ()=>{
        nav("/patientLogin")
    }
    const handleHospital = ()=>{
        nav("/hospitalLogin")
    }
  return (
    <div className='HospitalOrPatientPage'>
        <p onClick={handlePatient}>Patient</p>
        <p onClick={handleHospital}>Hospital</p>
    </div>
  )
}

export default HospitalOrPatient