import React from "react";
import "./AdminRescheduleReview.css";

const AdminRescheduleReview = () => {
  return (
    <div className="AdminRescheduleReview-page">
      <div className="AdminRescheduleReview-page-container">
        <div className="AdminRescheduleReview-page-header">
          <div className="AdminRescheduleReview-page-header-container">
            Reschedule Review
          </div>
        </div>
        <div className="AdminRescheduleReview-page-main">
          <div className="patient-review-check-container">
            <div className="patient-review-check">
              <div className="admin-reschedule-subHeader">
                <p>Doctor's Review</p>
              </div>
              <div className="patient-review-check-down">
                <div className="patient-review-check-down-content">
                  <h3>Patient Name</h3>
                  <p>Jeff Praise</p>
                </div>
                <div className="patient-review-check-down-content">
                  <h3>Patient Name</h3>
                  <p>Jeff Praise</p>
                </div>
                <div className="patient-review-check-down-content">
                  <h3>Patient Name</h3>
                  <p>Jeff Praise</p>
                </div>
                <div className="patient-review-check-down-content">
                  <h3>Patient Name</h3>
                  <p>Jeff Praise</p>
                </div>
              </div>
            </div>
          </div>
          <div className="admin-select-time-container">
            <div className="admin-select-time">
              <div className="admin-reschedule-subHeader">
                <p>Select Possible Time</p>
              </div>
              <div className="patient-review-check-down">
                <div className="reschedule-input-holder">
                  <p>First Available Slot</p>
                  <div className="reschedule-slot-input-container">
                    <div className="day-of-reschedule">
                      <label htmlFor="">Day:</label>
                      <input type="text" className="reschedule-input" />
                    </div>
                    <div className="day-of-reschedule">
                      <label htmlFor="">Time:</label>
                      <input type="text" className="reschedule-input" />
                    </div>
                  </div>
                </div>
                <div className="reschedule-input-holder">
                  <p>Second Available Slot</p>
                  <div className="reschedule-slot-input-container">
                    <div className="day-of-reschedule">
                      <label htmlFor="">Day:</label>
                      <input type="text" className="reschedule-input" />
                    </div>
                    <div className="day-of-reschedule">
                      <label htmlFor="">Time:</label>
                      <input type="text" className="reschedule-input" />
                    </div>
                  </div>
                </div>
                <div className="reschedule-input-holder">
                  <p>Third Available Slot</p>
                  <div className="reschedule-slot-input-container">
                    <div className="day-of-reschedule">
                      <label htmlFor="">Day:</label>
                      <input type="text" className="reschedule-input" />
                    </div>
                    <div className="day-of-reschedule">
                      <label htmlFor="">Time:</label>
                      <input type="text" className="reschedule-input" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="AdminRescheduleReview-page-buttom">
          <div className="book-appointment-btn">Send</div>
        </div>
      </div>
    </div>
  );
};

export default AdminRescheduleReview;
