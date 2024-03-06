import React, { useState } from "react";
import "./AdminAssignDoctor.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminAssignDoctor = () => {
  const [doctorName,setDoctorName] = useState()
  const [fee,setFee] = useState(3000)
  const [time,setTime] = useState()
  const [speciality,setSpeciality] = useState()
  const [date,setDay] = useState()
  const [doctorsReview,setDoctorsReview] = useState()
  console.log(doctorsReview)
  const nav = useNavigate()

  const data = { doctorName,fee,time,speciality,date };
  const id= localStorage.getItem("userAppointmentID")
  const Url = `https://doc-mate.onrender.com/createAppointment/${id}`;
  const loggedInHospital = JSON.parse(localStorage.getItem("loggedInHospital"))
  const userToken = loggedInHospital?.token;
  console.log(userToken);
  const headers = {
    Authorization: `Bearer ${userToken}`,
  };

  const handleAssignDoc = (e) => {
    e.preventDefault();
    try {
      const response = axios.post(Url, data, {headers}).then((res)=>{
        setDoctorsReview(res)
        localStorage.setItem("doctorsReview",JSON.stringify(res.data))
      })
      // console.log(response.data);
      // console.log(response.data.token);
        // const DoctorsReview = localStorage.getItem("DoctorsReview",JSON.stringify(response.data))
      // console.log(response?.data.message);
      nav("/admin/adminAppointmentReview/adminAssignDoctor/bookingReview")
    } catch (error) {
      console.log(error);
    }
  };


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
                onChange={(e) => setDoctorName(e.target.value)}
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
                onChange={(e) => setSpeciality(e.target.value)}
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
                type="date"
                className="AdminAssignDoctor-input-input"
                id="AdminAssignDoctor-input-input"
                onChange={(e) => setDay(e.target.value)}
              />
            </div>
            <div className="AdminAssignDoctor-content-inputs-wrapper">
              <label
                htmlFor=""
                className="AdminAssignDoctor-content-label"
                id="AdminAssignDoctor-content-label"
              >
                Time of appointment:
              </label>
              <input
                type="time"
                className="AdminAssignDoctor-input-input"
                id="AdminAssignDoctor-input-input"
                onChange={(e) => setTime(e.target.value)}
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
                value={fee}
                onChange={(e) => setFee(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="AdminAssignDoctor-proceed-btn-container">
          <div className="proceed-btn" onClick={handleAssignDoc}>
            Proceed
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAssignDoctor;
