import React from "react";
import "./AdminAppointmentReview.css";

const AdminAppointmentReview = ({setAdminPatientView,setAdminProfile,setAdminRightNav,setAdminPayment,setAdminAppointmentReview,setAdminAssignDoctor,setBookingReview}) => {
  const handleAdminAppointmentReview = ()=>{
    setAdminRightNav(false)
    setAdminPatientView(false)
    setAdminProfile(false)
    setAdminPayment(false)
    setAdminAppointmentReview(false)
    setAdminAssignDoctor(true)
    setBookingReview(false)
  }

  return (
    <div className="AdminAppointmentReview-page">
      <div className="admin-appointment-review-holder">
        <div className="admin-appointment-review-content-holder">
          <div className="admin-appointment-review-header">
            <div className="admin-appointment-review-header-content">
              Appointment Review
            </div>
          </div>
          <div className="admin-appointment-review-content">
            <div className="admin-appointment-review-main-content">
                <p className="admin-appointment-review-patient-name-header" id="admin-appointment-review-patient-name-header">Patient name</p>
                <p className="admin-appointment-review-patient-name">Jeff Praise</p>
            </div>
            <div className="admin-appointment-review-main-content">
                <p className="admin-appointment-review-patient-name-header" id="admin-appointment-review-patient-name-header">Last Visitation</p>
                <p className="admin-appointment-review-patient-name">07/03/2024</p>
            </div>
            <div className="admin-appointment-review-main-content">
                <p className="admin-appointment-review-patient-name-header" id="admin-appointment-review-patient-name-header">Last Diagnosis</p>
                <p className="admin-appointment-review-patient-name">Malaria</p>
            </div>
            <div className="admin-appointment-review-main-content">
                <p className="admin-appointment-review-patient-name-header" id="admin-appointment-review-patient-name-header">Present Symtoms</p>
                <p className="admin-appointment-review-patient-name">Headache</p>
            </div>
          </div>
        </div>
        <div className="admin-appointment-review-button-holder">
            <div className="assign-a-doctor-btn" onClick={handleAdminAppointmentReview}>
                Assign a doctor
            </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAppointmentReview;
