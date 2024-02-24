import React from "react";
import { useState } from "react";
import "./AdminPayment.css";

const AdminPayment = () => {
  const [allAppointment, setAllAppointment] = useState(true);
  const [reschedules, setReschedules] = useState(false);
  const [attended, setAttented] = useState(false);
  const [unattended, setUnattended] = useState(false);

  const handleAllAppointment = () => {
    setReschedules(false);
    setAllAppointment(true);
    setAttented(false);
    setUnattended(false);
  };

  const handleReschedules = () => {
    setReschedules(true);
    setAllAppointment(false);
    setAttented(false);
    setUnattended(false);
  };

  const handleAttended = () => {
    setReschedules(false);
    setAllAppointment(false);
    setAttented(true);
    setUnattended(false);
  };

  const handleUnattended = () => {
    setReschedules(false);
    setAllAppointment(false);
    setAttented(false);
    setUnattended(true);
  };
  return (
    <div className="admin-dashboard-right">
      <div className="admin-dashboard-right-wrapper">
        <div className="dashboard-overview">
          <h2>Payment Overview</h2>
        </div>
        <div className="dashboard-main-content-container">
          <div className="selected-view-container">
            <div className="dashboard-attribute-container">
              <div className="dashboard-attribute-wrapper">
                <div className="dashboard-attribute-holder">
                  <div className="s-n">S/N</div>
                  <div className="attribute-fixed-width patient-attribute">
                    PATIENT
                  </div>
                  <div className="attribute-fixed-width email-attribute">
                    EMAIL
                  </div>
                  <div className="attribute-fixed-width request-attribute">
                    PHONE NUMBER
                  </div>
                  <div className="attribute-fixed-width date-attribute">
                    DATE
                  </div>
                  <div className="attribute-fixed-width date-attribute"></div>
                </div>
              </div>
              <div className="dashboard-list-wrapper">
                <div className="list-container">
                  <div className="s-n">1</div>
                  <div className="attribute-fixed-width patient-profile-record">
                    <div className="profile-img-view"></div>
                    <div className="name-view-profile-container">
                      <p>Micheal Adekunle</p>
                      <p className="colored-view-profile">View profile</p>
                    </div>
                  </div>
                  <div className="attribute-fixed-width email-record">
                    Vivian@gmail.com
                  </div>
                  <div className="attribute-fixed-width request-record">
                    07048526737
                  </div>
                  <div className="attribute-fixed-width date-record">
                    Today, 10 May 2023
                  </div>
                  <div className="delete-view-btn">
                    <div className="delete-button">Delete</div>
                  </div>
                </div>
                <div className="list-container">
                  <div className="s-n">2</div>
                  <div className="attribute-fixed-width patient-profile-record">
                    <div className="profile-img-view"></div>
                    <div className="name-view-profile-container">
                      <p>Micheal Adekunle</p>
                      <p className="colored-view-profile">View profile</p>
                    </div>
                  </div>
                  <div className="attribute-fixed-width email-record">
                    Vivian@gmail.com
                  </div>
                  <div className="attribute-fixed-width request-record">
                    08067735478
                  </div>
                  <div className="attribute-fixed-width date-record">
                    Today, 10 May 2023
                  </div>
                  <div className="delete-view-btn">
                    <div className="delete-button">Delete</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPayment;
