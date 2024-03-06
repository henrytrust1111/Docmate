import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PatientLeftNav = ({setPatientProfilePage,setPatientHospitalSelection,setPatientHospitalPage}) => {
  const nav = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const Url = `https://doc-mate.onrender.com/logout`;
  const userToken = loggedInUser?.token;
  console.log(userToken);
  const headers = {
    // Authorization: `Bearer ${userToken}`,
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWU2MTczMDc1ODc4MzU0ZjFiNjNjZDYiLCJlbWFpbCI6ImFkZWt1bmxlbWljaGFlbDEzMTlAZ21haWwuY29tIiwiaWF0IjoxNzA5NTc5MTkzLCJleHAiOjE3MDk2NjU1OTN9.gkHpEZ5cbyzqWgdWRsvXdzwUiJl6m3OphiRJhUvrtyw",
  };

  // const handleLogout = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.put(Url,{ headers });
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // };
  const handleLogout = () => {
    nav("/patientLogin");
  };
 
  const handlePatientProfile = () => {
    nav("/patient/patientProfilePage")
  };
  const handlePatientDashboard = () => {
    nav("/patient")
  };
  return (
    <>
      <div className="admin-left-nav">
        <div className="admin-left-nav-wrapper">
          <div className="dashboard-content-holder">
            <div className="dashboard-content colored-icon" onClick={handlePatientDashboard}>
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
              <div className="dashboard-text-container" >
                <p>Dashboard</p>
              </div>
            </div>
            <div className="dashboard-content colored-icon"   onClick={handlePatientProfile}>
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
              <div
                className="dashboard-text-container"
              >
                <p>View Profile</p>
              </div>
            </div>
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
            <div className="dashboard-text-container" >
              <p>Logout</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientLeftNav;
