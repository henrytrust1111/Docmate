import React, { useState } from "react";
import "./AdminLeftNav.css";
import { useNavigate } from "react-router-dom";

const AdminLeftNav = () => {
  const [dashboard, setDashboard] = useState(true);
  const [patient, setPatient] = useState(false);
  const [profile, setProfile] = useState(false);
  const [payment, setPayment] = useState(false);
  const nav = useNavigate();

  const handleRightDiv = () => {
    nav("/admin");
    setDashboard(true);
    setPatient(false);
    setPayment(false);
    setProfile(false);
  };
  const handlePatientView = () => {
    nav("/admin/adminPatientView");
    setDashboard(false);
    setPatient(true);
    setPayment(false);
    setProfile(false);
  };
  const handleProfile = () => {
    nav("/admin/adminProfile");
    setDashboard(false);
    setPatient(false);
    setPayment(false);
    setProfile(true);
  };
  const handlePayment = () => {
    nav("/admin/adminPayment");
    setDashboard(false);
    setPatient(false);
    setPayment(true);
    setProfile(false);
  };

  const handleLogoutAdmin = () => {
    nav("/hospitalLogin");
  };
  return (
    <>
      <div className="admin-left-nav">
        <div className="admin-left-nav-wrapper">
          <div className="dashboard-content-holder">
            <div
              className="dashboard-content colored-icon"
              onClick={handleRightDiv}
            >
              <div className="dashboard-icon-container">
                {dashboard ? (
                  <img
                    src="/icons/colored-dashboard.svg"
                    alt="dashboard"
                    // className="colored-payment"
                  />
                ) : (
                  <img
                    src="/icons/dashboard.svg"
                    alt="dashboard"
                    // className="black-payment"
                  />
                )}
              </div>
              <div className="dashboard-text-container">
                <p style={dashboard ? { color: "#2c7da0" } : {}}>Dashboard</p>
              </div>
            </div>
            <div
              className="dashboard-content colored-icon"
              onClick={handlePatientView}
            >
              <div className="dashboard-icon-container">
                {patient ? (
                  <img
                    src="/icons/colored-patient.svg"
                    alt="dashboard"
                    // className="colored-payment"
                  />
                ) : (
                  <img
                    src="/icons/patient.svg"
                    alt="dashboard"
                    // className="black-payment"
                  />
                )}
              </div>
              <div className="dashboard-text-container">
                <p style={patient ? { color: "#2c7da0" } : {}}>Patient</p>
              </div>
            </div>
            <div
              className="dashboard-content colored-icon"
              onClick={handleProfile}
            >
              <div className="dashboard-icon-container">
                {profile ? (
                  <img
                    src="/icons/colored-profile.svg"
                    alt="dashboard"
                    // className="colored-payment"
                  />
                ) : (
                  <img
                    src="/icons/profile.svg"
                    alt="dashboard"
                    // className="black-payment"
                  />
                )}
              </div>
              <div className="dashboard-text-container">
                <p style={profile ? { color: "#2c7da0" } : {}}> View Profile</p>
              </div>
            </div>
            <div
              className="dashboard-content colored-icon"
              onClick={handlePayment}
            >
              <div className="dashboard-icon-container">
                {
                  payment?
                  <img
                  src="/icons/colored-payment.svg"
                  alt="dashboard"
                  // className="colored-payment"
                />: <img
                src="/icons/payment.svg"
                alt="dashboard"
                // className="black-payment"
              />
                }
               
              </div>
              <div className="dashboard-text-container">
                <p style={payment ? { color: "#2c7da0" } : {}}>Payment</p>
              </div>
            </div>
          </div>
          <div
            className="dashboard-content colored-icon"
            id="logout"
            onClick={handleLogoutAdmin}
          >
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
