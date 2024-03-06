import React from 'react'
import { ImCancelCircle } from "react-icons/im";
import "./AdminBurgerMenu.css"
import { useNavigate } from 'react-router-dom';
const AdminBurgerMenu = ({showDashboard}) => {
  const nav = useNavigate()

  const handleDasboard = ()=>{
    nav("/admin")
    showDashboard(false)   
  }
  const handlePatient = ()=>{
    nav("/admin/adminPatientView")
    showDashboard(false)   
  }
  const handleProfile = ()=>{
    nav("/admin/adminProfile")
    showDashboard(false)   
  }
  const handlePayment = ()=>{
    nav("/admin/adminPayment")
    showDashboard(false)   
  }



  return (
    <div className="admin-burger-menu">
        <ImCancelCircle className='ImCancelCircle'  onClick={()=>showDashboard(false)}/>
      <div className="admin-left-nav-wrapper">
        <div className="dashboard-content-holder">
          <div className="dashboard-content colored-icon" onClick={handleDasboard}>
            <div className="dashboard-icon-container">
              <img src="/icons/colored-dashboard.svg" alt="dashboard" className="colored-payment" />
              <img src="/icons/dashboard.svg" alt="dashboard" className="black-payment" />
            </div>
            <div className="burgerMenu-text-container">
              <p>Dashboard</p>
            </div>
          </div>
          <div className="dashboard-content colored-icon" onClick={handlePatient}>
            <div className="dashboard-icon-container">
             <img src="/icons/colored-patient.svg" alt="dashboard" className="colored-payment" />
              <img src="/icons/patient.svg" alt="dashboard" className="black-payment" />
            </div>
            <div className="burgerMenu-text-container">
              <p>Patient</p>
            </div>
          </div>
          <div className="dashboard-content colored-icon" onClick={handleProfile}>
            <div className="dashboard-icon-container">
             <img src="/icons/colored-profile.svg" alt="dashboard" className="colored-payment" />
              <img src="/icons/profile.svg" alt="dashboard" className="black-payment"/>
            </div>
            <div className="burgerMenu-text-container">
              <p>View Profile</p>
            </div>
          </div>
          <div className="dashboard-content colored-icon" onClick={handlePayment}>
            <div className="dashboard-icon-container">
              <img src="/icons/payment.svg" alt="dashboard" className="black-payment"/>
              <img src="/icons/colored-payment.svg" alt="dashboard" className="colored-payment"/>
            </div>
            <div className="burgerMenu-text-container">
              <p>Payment</p>
            </div>
          </div>
        </div>
        <div className="dashboard-content colored-icon" id="logout">
            <div className="dashboard-icon-container">
              <img src="/icons/logout.svg" alt="dashboard" className="black-payment" />
              <img src="/icons/colored-logout.svg" alt="dashboard" className="colored-payment" />
            </div>
            <div className="burgerMenu-text-container">
              <p>Logout</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default AdminBurgerMenu