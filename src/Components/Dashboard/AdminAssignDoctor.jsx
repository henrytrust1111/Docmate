import React from "react";
import "./AdminAssignDoctor.css";

const AdminAssignDoctor = () => {
  return (
    <div className="AdminAssignDoctor-page">
      <div className="AdminAssignDoctor-wrapper">
        <div className="AdminAssignDoctor-content-container">
          <div className="AdminAssignDoctor-content-title">
            <h1 className="assign-doctor-title">Assign a Doctor</h1>
          </div>
          <div className="AdminAssignDoctor-content-inputs">
            <div className="AdminAssignDoctor-content-inputs-wrapper">
              <label
                htmlFor=""
                className="AdminAssignDoctor-content-label"
                id="AdminAssignDoctor-content-label"
              >
                Doctor's name:
              </label>
              <input
                type="text"
                className="AdminAssignDoctor-input-input"
                id="AdminAssignDoctor-input-input"
              />
            </div>
            <div className="AdminAssignDoctor-content-inputs-wrapper">
              <label
                htmlFor=""
                className="AdminAssignDoctor-content-label"
                id="AdminAssignDoctor-content-label"
              >
                Doctor's Speciality:
              </label>
              <input
                type="text"
                className="AdminAssignDoctor-input-input"
                id="AdminAssignDoctor-input-input"
              />
            </div>
            <div className="AdminAssignDoctor-content-inputs-wrapper">
              <label
                htmlFor=""
                className="AdminAssignDoctor-content-label"
                id="AdminAssignDoctor-content-label"
              >
                Day of appointment:
              </label>
              <input
                type="text"
                className="AdminAssignDoctor-input-input"
                id="AdminAssignDoctor-input-input"
              />
            </div>
            <div className="AdminAssignDoctor-content-inputs-wrapper">
              <label
                htmlFor=""
                className="AdminAssignDoctor-content-label"
                id="AdminAssignDoctor-content-label"
              >
                Day of appointment:
              </label>
              <input
                type="text"
                className="AdminAssignDoctor-input-input"
                id="AdminAssignDoctor-input-input"
              />
            </div>
            <div className="AdminAssignDoctor-content-inputs-wrapper">
              <label
                htmlFor=""
                className="AdminAssignDoctor-content-label"
                id="AdminAssignDoctor-content-label"
              >
                Fee:
              </label>
              <input
                type="text"
                className="AdminAssignDoctor-input-input"
                id="AdminAssignDoctor-input-input"
              />
            </div>
          </div>
        </div>
        <div className="AdminAssignDoctor-proceed-btn-container">
          <div className="proceed-btn">Proceed</div>
        </div>
      </div>
    </div>
  );
};

export default AdminAssignDoctor;
