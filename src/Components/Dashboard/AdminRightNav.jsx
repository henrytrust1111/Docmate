import React from "react";
import "./AdminRightNav.css";

const AdminRightNav = () => {
  return (
    <div className="admin-dashboard-right">
      <div className="admin-dashboard-right-wrapper">
        <div className="dashboard-overview">
          <h2>Dashboard Overview</h2>
        </div>
        <div className="dashboard-main-content-container">
          <div className="select-dashboard-view-container">
            <div className="select-dashboard-view-wrapper" id="active-state">
              <div className="select-dashboard-view-holder active-state-container">
                <div>
                  <p>11</p>
                  <p>All Appointment</p>
                </div>
              </div>
            </div>
            <div className="select-dashboard-view-wrapper">
              <div className="select-dashboard-view-holder">
                <div>
                  <p>11</p>
                  <p>Reschedules</p>
                </div>
              </div>
            </div>
            <div className="select-dashboard-view-wrapper">
              <div className="select-dashboard-view-holder">
                <div>
                  <p>11</p>
                  <p>Attendance</p>
                </div>
              </div>
            </div>
            <div className="select-dashboard-view-wrapper">
              <div className="select-dashboard-view-holder">
                <div>
                  <p>11</p>
                  <p>Unattended</p>
                </div>
              </div>
            </div>
          </div>
          <div className="selected-view-container"></div>
        </div>
      </div>
    </div>
  );
};

export default AdminRightNav;
