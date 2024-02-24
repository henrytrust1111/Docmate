import React, { useState } from "react";

const PatientLeftNav = () => {
  return (
    <>
        <div className="admin-left-nav">
      <div className="admin-left-nav-wrapper">
        <div className="dashboard-content-holder">
          <div className="dashboard-content colored-icon">
            <div className="dashboard-icon-container">
              <img src="/icons/colored-dashboard.svg" alt="dashboard" className="colored-payment" />
              <img src="/icons/dashboard.svg" alt="dashboard" className="black-payment" />
            </div>
            <div className="dashboard-text-container">
              <p>Dashboard</p>
            </div>
          </div>
          <div className="dashboard-content colored-icon">
            <div className="dashboard-icon-container">
             <img src="/icons/colored-profile.svg" alt="dashboard" className="colored-payment" />
              <img src="/icons/profile.svg" alt="dashboard" className="black-payment"/>
            </div>
            <div className="dashboard-text-container">
              <p>View Profile</p>
            </div>
          </div>
        </div>
        <div className="dashboard-content colored-icon" id="logout">
            <div className="dashboard-icon-container">
              <img src="/icons/logout.svg" alt="dashboard" className="black-payment" />
              <img src="/icons/colored-logout.svg" alt="dashboard" className="colored-payment" />
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
