import React, { useState } from "react";
import { useEffect } from "react";
import "./PatientHospitalPage.css";
import Swal from "sweetalert2";
import axios from "axios";
import { ThemeContext } from '../context/Theme'
import { useContext } from 'react'
import { useLayoutEffect } from 'react'

import { useNavigate } from "react-router-dom";
const PatientHospitalPage = () => {
  const [hospital,setHospital] = useState()
  const nav = useNavigate()
  
  const handleRequestAppointment = () => {
    nav("/patient/patientHospitalPage/patientAppointmentForm");
  };
  const {showSearch,setShowSearch} = useContext(ThemeContext)
  console.log(showSearch);
  useLayoutEffect(() => {
    const fetchData = ()=>{
      setShowSearch(false)
      
    }

    fetchData()
    console.log(showSearch);
  }, [])

  const id = localStorage.getItem("hospitalID");
  const id2 = localStorage.getItem("hospitalIDSearch");
  console.log(id2);
  console.log(id? id:"no id");
  const url = `https://doc-mate.onrender.com/one-hospital/${id? id:id2}`;
  const userInfo = JSON.parse(localStorage.getItem("loggedInUser"));
  const userToken = userInfo?.token;
  const headers = {
    Authorization: `Bearer ${userToken}`,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, { headers });
        console.log(response?.data.data);
        console.log(response?.data);
        setHospital(response?.data.data);
      } catch (error) {
        console.error("Error:", error);
        console.error("Error Response:", error.response); 
      }
    };

    fetchData();
  }, []);

  return (
    <div className="PatientHospitalPage-container">
      <div className="PatientHospitalPage-wrapper">
        <h3>Welcome to {hospital?.hospitalName}</h3>
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
            <p>View Appointments</p>
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
