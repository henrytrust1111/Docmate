import React, { useState, useEffect } from "react";
import "./AdminBookingReview.css";
import PopUp from "../PopUp/PopUp";
import axios from "axios";
// import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import toast from "react-hot-toast";

const AdminBookingReview = ({ setBookingReview, setAdminRightNav }) => {
  const [popUp, setPopUp] = useState(false);
  const [getAppointmentReview, setGetAppointmentReview] = useState();
  console.log(getAppointmentReview);
  const handleBookAppointment = () => {
    toast.success("This Appointment has sucessfully been confirmed");
    setAdminRightNav(true);
    setBookingReview(false);
  };
  // const handleBookAppointment = ()=>{
  //   setPopUp(true)
  //   setTimeout(() => {
  //     setPopUp(false)
  //     setAdminRightNav(true)
  //     setBookingReview(false)
  //   }, 2000);

  // setTimeout(false)
  // }

  const id = localStorage.getItem("userAppointmentID");
  console.log(id);
  const url = `https://doc-mate.onrender.com/oneappointment/${id}`;
  const loggedInHospital = JSON.parse(localStorage.getItem("loggedInHospital"));
  const userToken = loggedInHospital?.token;
  console.log(userToken);
  const headers = {
    Authorization: `Bearer ${userToken}`,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, { headers });
        console.log(response?.data);
        console.log(response?.data.appointment);
        setGetAppointmentReview(response?.data.appointment);
      } catch (error) {
        console.error("Error:", error.response.data);
        // console.error("Error Response:", error.response);
      }
    };

    fetchData();
  }, []);
  const doctorsReview = JSON.parse(localStorage.getItem("doctorsReview"));
  console.log(doctorsReview.appointment);
  return (
    <>
      {/* {popUp? <PopUp text="Appointment booked successfully" image="./icons/success.svg" />:null} */}
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
                <div className="patient-review-check-top">
                  <p>Patient's Review</p>
                </div>
                <div className="patient-review-check-down">
                  <div className="patient-review-check-down-content">
                    <h3>Patient Name</h3>
                    <p>{getAppointmentReview?.fullName}</p>
                  </div>
                  <div className="patient-review-check-down-content">
                    <h3>Last Visitation</h3>
                    <p>{getAppointmentReview?.lastVisitation}</p>
                  </div>
                  <div className="patient-review-check-down-content">
                    <h3>Last Diagnosis</h3>
                    <p>{getAppointmentReview?.lastDiagnosis}</p>
                  </div>
                  <div className="patient-review-check-down-content">
                    <h3>Present Symtoms</h3>
                    <p>{getAppointmentReview?.presentSymptoms}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="doctor-review-check-container">
              <div className="doctor-review-check">
                <div className="patient-review-check-top">
                  <p>Doctor's Review</p>
                </div>
                <div className="patient-review-check-down">
                  <div className="patient-review-check-down-content">
                    <h3>Doctor's Name</h3>
                    <p>{doctorsReview.appointment.doctorName}</p>
                  </div>
                  <div className="patient-review-check-down-content">
                    <h3>Doctor's Speciality</h3>
                    <p>{doctorsReview.appointment.speciality}</p>
                  </div>
                  <div className="patient-review-check-down-content">
                    <h3>Appointment Day</h3>
                    <p>{doctorsReview.appointment.date}</p>
                  </div>
                  <div className="patient-review-check-down-content">
                    <h3>Appointment Time</h3>
                    <p>{doctorsReview.appointment.time}</p>
                  </div>
                  <div className="patient-review-check-down-content">
                    <h3>Fee</h3>
                    <p>{doctorsReview.appointment.fee}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="AdminBookingReview-page-buttom">
            <div
              className="book-appointment-btn"
              onClick={handleBookAppointment}
            >
              Book Appointment
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminBookingReview;
