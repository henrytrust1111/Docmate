import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PatientLeftNav = () => {
  const [dashboard, setDashboard] = useState(true);
  const [profile, setProfile] = useState(false);
  const nav = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const userToken = loggedInUser?.token;
  console.log(userToken);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("loggedInUserToken");
    nav("/patientLogin");
  };

  const handlePatientProfile = () => {
    nav("/patient/patientProfilePage");
    setDashboard(false)
    setProfile(true)
  };
  const handlePatientDashboard = () => {
    nav("/patient");
    setDashboard(true)
    setProfile(false)
  };
  return (
    <>
      <div className="admin-left-nav">
        <div className="admin-left-nav-wrapper">
          <div className="dashboard-content-holder">
            <div
              className="dashboard-content colored-icon"
              onClick={handlePatientDashboard}
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
                    src="/icons/colored-dashboard.svg"
                    alt="dashboard"
                    // className="colored-payment"
                  />
                )}
                {/* <img
                  src="/icons/dashboard.svg"
                  alt="dashboard"
                  className="black-payment"
                /> */}
              </div>
              <div className="dashboard-text-container">
                <p style={dashboard ? { color: "#2c7da0" } : {}}>Dashboard</p>
              </div>
            </div>
            <div
              className="dashboard-content colored-icon"
              onClick={handlePatientProfile}
            >
              <div className="dashboard-icon-container">
                {
                  profile?   <img
                  src="/icons/colored-profile.svg"
                  alt="dashboard"
                  // className="colored-payment"
                />:  <img
                src="/icons/profile.svg"
                alt="dashboard"
                // className="black-payment"
              />
                }
              
              
              </div>
              <div className="dashboard-text-container">
                <p style={profile ? { color: "#2c7da0" } : {}}>View Profile</p>
              </div>
            </div>
          </div>
          <div
            className="dashboard-content colored-icon"
            id="logout"
            onClick={handleLogout}
          >
            <div className="dashboard-icon-container">
              {profile ? (
                <img
                  src="/icons/logout.svg"
                  alt="dashboard"
                  className="black-payment"
                />
              ) : (
                <img
                  src="/icons/colored-logout.svg"
                  alt="dashboard"
                  className="colored-payment"
                />
              )}
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

export default PatientLeftNav;
