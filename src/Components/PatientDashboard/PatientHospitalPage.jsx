import React from "react";
import "./PatientHospitalPage.css";
const PatientHospitalPage = ({setPatientHospitalPage,setPatientAppointmentForm}) => {
  const handleRequestAppointment= ()=>{
    setPatientHospitalPage(false)
    setPatientAppointmentForm(true)
  }
  return (
    <div className="PatientHospitalPage-container">
      <div className="PatientHospitalPage-wrapper">
        <h3>Welcome to Vivian's Hospital</h3>
        <div className="request-view-container" id="request-view-container">
          <div
            className="patient-request-view-box"
            id="patient-request-view-box"
            onClick={handleRequestAppointment}
          >
            <div className="request-appointment-icon">
              <img src="./icons/requestAppointment.svg" alt="" />
            </div>
            <p>Request an Appointment</p>
          </div>
          <div className="patient-request-view-box">
            <div className="request-appointment-icon">
              <img src="./icons/viewAppointment.svg" alt="" />
            </div>
            <p>View Appointment</p>
          </div>
        </div>
        <div className="PatientHospitalPage-container-footer">
          <p>
            Please note you must update your profile before you can book an
            appointment
          </p>
        </div>
      </div>
    </div>
  );
};

export default PatientHospitalPage;
