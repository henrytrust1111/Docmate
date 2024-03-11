import React, { useState } from "react";
import PatientHeader from "./PatientHeader";
import PatientLeftNav from "./PatientLeftNav";
import { Outlet } from "react-router-dom";
import "./PatientDashboard.css"

const PatientDashboard = () => {
  const [patientHospitalSelection, setPatientHospitalSelection] =
    useState(true);
  const [patientHospitalPage, setPatientHospitalPage] = useState(false);
  const [patientAppointmentForm, setPatientAppointmentForm] = useState(false);
  const [patientProfilePage, setPatientProfilePage] = useState(false);
  const [patientProfileUpdate, setPatientProfileUpdate] = useState(false);

  return (
    <div className="admin-dashboard-container">
      <PatientHeader patientHospitalSelection={patientHospitalSelection} />
      <div className="admin-dashboard-holder">
        <PatientLeftNav />
        {/* <h1 className="helloWorld">HELLO WORLD</h1> */}
        <Outlet />
        {/* <PatientLeftNav
          setPatientHospitalSelection={setPatientHospitalSelection}
          setPatientHospitalPage={setPatientHospitalPage}
          setPatientProfilePage={setPatientProfilePage}
        />
        {patientHospitalSelection ? (
          <PatientHospitalSelection
            setPatientHospitalSelection={setPatientHospitalSelection}
            setPatientHospitalPage={setPatientHospitalPage}
          />
        ) : patientHospitalPage ? (
          <PatientHospitalPage
            setPatientHospitalPage={setPatientHospitalPage}
            setPatientAppointmentForm={setPatientAppointmentForm}
          />
        ) : patientAppointmentForm ? (
          <PatientAppointmentForm
            setPatientHospitalSelection={setPatientHospitalSelection}
            setPatientAppointmentForm={setPatientAppointmentForm}
          />
        ) : patientProfilePage ? (
          <PatientProfilePage
            setPatientHospitalPage={setPatientHospitalPage}
            setPatientProfileUpdate={setPatientProfileUpdate}
            setPatientProfilePage={setPatientProfilePage}
          />
        ) : patientProfileUpdate ? (
          <PatientProfileUpdate
            setPatientProfileUpdate={setPatientProfileUpdate}
            setPatientHospitalPage={setPatientHospitalPage}
          />
        ) : null}
        {/* <PatientPayment /> */}
        {/* <PatientAppointmentReview /> */}
        {/* <PatientRescheduleForm /> */} 
      </div>
    </div>
  );
};

export default PatientDashboard;
