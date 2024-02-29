import React, { useState } from "react";
import PatientHeader from "./PatientHeader";
import PatientHospitalPage from "./PatientHospitalPage";
import PatientLeftNav from "./PatientLeftNav";
import PatientAppointmentForm from "./PatientAppointmentForm";
import PatientProfileUpdate from "./PatientProfileUpdate";
import PatientAppointmentReview from "./PatientAppointmentReview";
import PatientRescheduleForm from "../PopUp/PatientRescheduleForm";
import PatientHospitalSelection from "./PatientHospitalSelection";
import PatientProfilePage from "./PatientProfilePage";
import PatientPayment from "./PatientPayment";

const PatientDashboard = () => {
  const [patientHospitalSelection, setPatientHospitalSelection] =
    useState(true);
  const [patientHospitalPage, setPatientHospitalPage] = useState(false);
  const [patientAppointmentForm, setPatientAppointmentForm] = useState(false);

  return (
    <div className="admin-dashboard-container">
      <PatientHeader />
      <div className="admin-dashboard-holder">
        <PatientLeftNav />
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
        ) : null}
        {/* <PatientPayment /> */}
        {/* <PatientProfilePage /> */}
        {/* <PatientProfileUpdate /> */}
        {/* <PatientAppointmentReview /> */}
        {/* <PatientRescheduleForm /> */}
      </div>
    </div>
  );
};

export default PatientDashboard;
