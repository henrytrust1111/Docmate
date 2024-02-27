import React from 'react'
import './HomePageHeader.css'
import DocMate from "/docmate1232.png"
import { useNavigate } from 'react-router-dom'

const HomePageHeader = () => {
    const nav = useNavigate()
    const handleSignUp = ()=>{
      nav('/patientRegister')
    }
  return (
    <div className='mainHeader' >

    <div className="logo">
        <img src={DocMate} alt=''/>
    </div>
   
    
    <div className="headerhome">

      <nav>Home</nav>
      <nav>About Us</nav>
      <nav>Pricing</nav>
      <nav>FAQ's</nav>
      <nav>Contact Us</nav>
    
    </div>
    <div className="registerbody">
      <button className='headsignup' onClick={handleSignUp}>Sign up </button>
      <button className='headlogin' >Login </button>
    </div>
    </div>
  )
}

export default HomePageHeader
