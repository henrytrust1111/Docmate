import React, { useState } from "react";
import "./AdminAppointmentReview.css";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminAppointmentReview = () => {
  const [getAppointmentReview, setGetAppointmentReview] = useState();
  const nav = useNavigate();
  const handleAdminAppointmentReview = () => {
    nav("/admin/adminAppointmentReview/adminAssignDoctor");
  };

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

  const isoDate = getAppointmentReview?.lastVisitation;
  const date = new Date(isoDate);
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-GB", options);
  const lastVisitation = formattedDate==="Invalid Date"? "none": formattedDate;

  console.log(lastVisitation);

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
              <p
                className="admin-appointment-review-patient-name-header"
                id="admin-appointment-review-patient-name-header"
              >
                Patient name
              </p>
              <p className="admin-appointment-review-patient-name">
                {getAppointmentReview?.fullName}
              </p>
            </div>
            <div className="admin-appointment-review-main-content">
              <p
                className="admin-appointment-review-patient-name-header"
                id="admin-appointment-review-patient-name-header"
              >
                Last Visitation
              </p>
              <p className="admin-appointment-review-patient-name">
                {lastVisitation? lastVisitation : "none"}
              </p>
            </div>
            <div className="admin-appointment-review-main-content">
              <p
                className="admin-appointment-review-patient-name-header"
                id="admin-appointment-review-patient-name-header"
              >
                Last Diagnosis
              </p>
              <p className="admin-appointment-review-patient-name">
                {getAppointmentReview?.lastDiagnosis}
              </p>
            </div>
            <div className="admin-appointment-review-main-content">
              <p
                className="admin-appointment-review-patient-name-header"
                id="admin-appointment-review-patient-name-header"
              >
                Present Symtoms
              </p>
              <p className="admin-appointment-review-patient-name">
                {getAppointmentReview?.presentSymptoms}
              </p>
            </div>
          </div>
        </div>
        <div className="admin-appointment-review-button-holder">
          <div
            className="assign-a-doctor-btn"
            onClick={handleAdminAppointmentReview}
          >
            Assign a doctor
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAppointmentReview;
