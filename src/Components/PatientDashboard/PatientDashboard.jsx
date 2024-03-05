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
  const [patientProfilePage, setPatientProfilePage] = useState(false);
  const [patientProfileUpdate,setPatientProfileUpdate] = useState(false)

  return (
    <div className="admin-dashboard-container">
      <PatientHeader patientHospitalSelection={patientHospitalSelection} />
      <div className="admin-dashboard-holder">
        <PatientLeftNav
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
        ) :patientProfilePage? <PatientProfilePage setPatientHospitalPage={setPatientHospitalPage} setPatientProfileUpdate={setPatientProfileUpdate} setPatientProfilePage={setPatientProfilePage} />:patientProfileUpdate? <PatientProfileUpdate setPatientProfileUpdate={setPatientProfileUpdate} setPatientHospitalPage={setPatientHospitalPage} />:null}
        {/* <PatientPayment /> */}
        {/* <PatientAppointmentReview /> */}
        {/* <PatientRescheduleForm /> */}
      </div>
    </div>
  );
};

export default PatientDashboard;
