import React from "react";
import { ImCancelCircle } from "react-icons/im";
import { useNavigate } from "react-router-dom";
// import "./AdminBurgerMenu.css"
const PatientBurgerMenu = ({ showDashboard }) => {
  const nav = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser")
    localStorage.removeItem("loggedInUserToken")
    nav("/patientLogin");
  };

  const handlePatientProfile = () => {
    showDashboard(false)
    nav("/patient/patientProfilePage");
  };
  const handlePatientDashboard = () => {
    showDashboard(false)
    nav("/patient");
  };
  return (
    <div className="admin-burger-menu">
      <ImCancelCircle
        className="ImCancelCircle"
        onClick={() => showDashboard(false)}
      />
      <div className="admin-left-nav-wrapper">
        <div className="dashboard-content-holder">
          <div
            className="dashboard-content colored-icon"
            onClick={handlePatientDashboard}
          >
            <div className="dashboard-icon-container">
              <img
                src="/icons/colored-dashboard.svg"
                alt="dashboard"
                className="colored-payment"
              />
              <img
                src="/icons/dashboard.svg"
                alt="dashboard"
                className="black-payment"
              />
            </div>
            <div className="burgerMenu-text-container">
              <p>Dashboard</p>
            </div>
          </div>
          {/* <div className="dashboard-content colored-icon">
            <div className="dashboard-icon-container">
              <img
                src="/icons/colored-patient.svg"
                alt="dashboard"
                className="colored-payment"
              />
              <img
                src="/icons/patient.svg"
                alt="dashboard"
                className="black-payment"
              />
            </div>
            <div className="burgerMenu-text-container">
              <p>Patient</p>
            </div>
          </div> */}
          <div className="dashboard-content colored-icon" onClick={handlePatientProfile}>
            <div className="dashboard-icon-container">
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
            <div className="burgerMenu-text-container">
              <p>View Profile</p>
            </div>
          </div>
          {/* <div className="dashboard-content colored-icon">
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
            <div className="burgerMenu-text-container">
              <p>Payment</p>
            </div>
          </div> */}
        </div>
        <div className="dashboard-content colored-icon" id="logout" onClick={handleLogout}>
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
          <div className="burgerMenu-text-container">
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientBurgerMenu;
