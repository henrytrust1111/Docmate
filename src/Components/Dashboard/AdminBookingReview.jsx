import React, { useState } from "react";
import "./AdminBookingReview.css";
import PopUp from "../PopUp/PopUp";

const AdminBookingReview = ({setBookingReview,setAdminRightNav}) => {
  const [popUp,setPopUp] = useState(false)
  const handleBookAppointment = ()=>{
    setPopUp(true)
    setTimeout(() => {
      setPopUp(false)
      setAdminRightNav(true)
      setBookingReview(false)
    }, 2000);

    // setTimeout(false)
  }
  return (
    <>
     {popUp? <PopUp text="Appointment booked successfully" image="./icons/success.svg" />:null}
    <div className="AdminBookingReview-page">
      <div className="AdminBookingReview-page-container">
        <div className="AdminBookingReview-page-header">
        <div className="AdminBookingReview-page-header-container">
          Booking Review
        </div>
        </div>
        <div className="AdminBookingReview-page-main">
          <div className="patient-review-check-container">
            <div className="patient-review-check">
              <div className="patient-review-check-top"><p>Patient's Review</p></div>
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
          <div className="doctor-review-check-container">
            <div className="doctor-review-check">
              <div className="patient-review-check-top"><p>Doctor's Review</p></div>
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
        </div>
        <div className="AdminBookingReview-page-buttom">
          <div className="book-appointment-btn" onClick={handleBookAppointment}>Book Appointment</div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AdminBookingReview;
