import React, { useState } from "react";
import "./AdminLeftNav.css";
import { useNavigate } from "react-router-dom";

const AdminLeftNav = ({
  setAdminPatientView,
  setAdminProfile,
  setAdminRightNav,
  setAdminPayment,
  setAdminAppointmentReview,
  setAdminAssignDoctor,
}) => {
  const [dashboard,setDashboard] = useState(true)
  const [patient,setPatient] = useState(false)
  const [patientMouseOut,setPatientMouseOut] = useState(false)
  const nav= useNavigate()
  const handleDashboardMouseOver = ()=>{
    setDashboard(true)
  }
  const handleDashboardMouseOut = ()=>{
    // setDashboard(false)
  }
  const handlePatientMouseOver = ()=>{
    setPatient(true)
    setPatientMouseOut(true)
  }
  const handlePatientMouseOut = ()=>{
    setPatientMouseOut(false)
  }
  const handleRightDiv = () => {
    nav("/admin")
    setDashboard(true)
    setPatient(false)
  };
  const handlePatientView = () => {
    nav("/admin/adminPatientView")
    setDashboard(false)
    setPatient(true)
  };
  const handleProfile = () => {
  nav("/admin/adminProfile")
  };
  const handlePayment = () => {
   nav("/admin/adminPayment")
  };

  const handleLogoutAdmin = ()=>{
    nav("/hospitalLogin")
  }
  return (
    <>
      <div className="admin-left-nav">
        <div className="admin-left-nav-wrapper">
          <div className="dashboard-content-holder">
            <div
              className="dashboard-content colored-icon"
              onClick={handleRightDiv}
              onMouseOver={handleDashboardMouseOver}
              onMouseOut={handleDashboardMouseOut}
            >
              <div className="dashboard-icon-container">
                {dashboard?  <img
                  src="/icons/colored-dashboard.svg"
                  alt="dashboard"
                  // className="colored-payment"
                />:
                <img
                  src="/icons/dashboard.svg"
                  alt="dashboard"
                  className="black-payment"
                />}
              </div>
              <div className="dashboard-text-container">
                <p >Dashboard</p>
              </div>
            </div>
            <div
              className="dashboard-content colored-icon"
              onClick={handlePatientView}
              onMouseOver={handlePatientMouseOver}   
              onMouseOut={handlePatientMouseOut}
            >
              <div className="dashboard-icon-container">
                {patient?  <img
                  src="/icons/colored-patient.svg"
                  alt="dashboard"
                  // className="colored-payment"
                />:
                <img
                  src="/icons/patient.svg"
                  alt="dashboard"
                  className="black-payment"
                />}
              </div>
              <div className="dashboard-text-container">
              <p >Patient</p>
              </div>
            </div>
            <div
              className="dashboard-content colored-icon"
              onClick={handleProfile}
            >
              <div className="dashboard-icon-container">
                {/* {viewProfile? } */}
                <img
                  src="/icons/colored-profile.svg"
                  alt="dashboard"
                  className="colored-payment"
                />
                <img
                  src="/icons/profile.svg"
                  alt="dashboard"
                  className="black-payment"
                />
              </div>
              <div className="dashboard-text-container">
                <p>View Profile</p>
              </div>
            </div>
            <div
              className="dashboard-content colored-icon"
              onClick={handlePayment}
            >
              <div className="dashboard-icon-container">
                <img
                  src="/icons/payment.svg"
                  alt="dashboard"
                  className="black-payment"
                />
                <img
                  src="/icons/colored-payment.svg"
                  alt="dashboard"
                  className="colored-payment"
                />
              </div>
              <div className="dashboard-text-container">
                <p>Payment</p>
              </div>
            </div>
          </div>
          <div className="dashboard-content colored-icon" id="logout" onClick={handleLogoutAdmin}>
            <div className="dashboard-icon-container">
              <img
                src="/icons/logout.svg"
                alt="dashboard"
                className="black-payment"
              />
              <img
                src="/icons/colored-logout.svg"
                alt="dashboard"
                className="colored-payment"
              />
            </div>
            <div className="dashboard-text-container">
              <p>Logout</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLeftNav;
