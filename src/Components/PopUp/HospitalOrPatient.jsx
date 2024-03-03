import React from 'react'
import "./HospitalOrPatient.css"
import { MdLocalHospital } from "react-icons/md";
import { FaPersonCirclePlus } from "react-icons/fa6";
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
        <div className='HospitalOrPatientPageA' onClick={handlePatient}>
        <FaPersonCirclePlus />
          <p>patient</p>
        </div>
        <div className='HospitalOrPatientPageA' onClick={handleHospital}>
        <MdLocalHospital />
          <p>Hospital</p>
        </div>
    </div>
  )
}

export default HospitalOrPatient