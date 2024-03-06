import React, { useState } from 'react'
import "./PatientAppointmentForm.css"
import PopUp from '../PopUp/PopUp'
import Swal from "sweetalert2";
import axios from 'axios'

const PatientAppointmentForm = ({setPatientAppointmentForm,setPatientHospitalSelection}) => {
  const [popUp, setPopUp] = useState(false)
  const [fullName, setFullName] = useState()
  const [lastDiagnosis, setLastDiagnosis] = useState()
  const [presentSymptoms, setPresentSymptoms] = useState()
  const [lastVisitation, setLastVisitation] = useState()
  const [patientEmail, setEmail] = useState()
  // console.log(fullName);
  console.log(lastDiagnosis);
  console.log(presentSymptoms);
  console.log(lastVisitation);
    // const fullName= fullNames.toLowerCase();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const id = localStorage.getItem("hospitalID");
  
  const userToken = loggedInUser.token;
  const lowerCaseFullName = fullName ? fullName.toLowerCase() : fullName;
  const data = { fullName: lowerCaseFullName, lastDiagnosis, patientEmail, presentSymptoms, lastVisitation };
  const Url = `https://doc-mate.onrender.com/request/${id}`;
  console.log(userToken);
  console.log(loggedInUser);
  const headers = {
    Authorization: `Bearer ${userToken}`,
    // Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWU2MTczMDc1ODc4MzU0ZjFiNjNjZDYiLCJlbWFpbCI6ImFkZWt1bmxlbWljaGFlbDEzMTlAZ21haWwuY29tIiwiaWF0IjoxNzA5NTc5MTkzLCJleHAiOjE3MDk2NjU1OTN9.gkHpEZ5cbyzqWgdWRsvXdzwUiJl6m3OphiRJhUvrtyw",
  };

  const handleSendDetails = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(Url, data, { headers });
      console.log(response.data);
     nav("/patient")
      Swal.fire({
        title: "Success",
        text: response.data.message,
        icon: "success",
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "error",
        text: error.response.data.message,
        icon: "error",
      });
    }
  };
  // const handleSendDetails = ()=>{
  //   setPopUp(true)
  //   setTimeout(() => {
  //     setPopUp(false)
  //     setPatientAppointmentForm(false)
  //     setPatientHospitalSelection(true)
  //   }, 2000);

  // }


  return (
    <>
       <div className="patientAppointmentForm-container">
      <div className="patientAppointmentForm-wrapper">
        <div className="patientAppointmentForm-holder">
          <div className="patientAppointmentForm-header">
            <p>Patient Appointment Form</p>
          </div>
          <div className="patientAppointmentForm-form-container">
            <p className='patientAppointmentForm-intro'>Please fill the boxes below</p>
            <div className="patientAppointmentForm-input-container">
              <label htmlFor="" className='patientAppointmentForm-label'>Patient Name:</label>
              <input type="text" className='patientAppointmentForm-input-input' onChange={(e)=>setFullName(e.target.value)}/>
            </div>
            <div className="patientAppointmentForm-input-container">
              <label htmlFor="" className='patientAppointmentForm-label'>Last Visitation:</label>
              <input type="date" className='patientAppointmentForm-input-input' onChange={(e)=>setLastVisitation(e.target.value)}/>
            </div>
            <div className="patientAppointmentForm-diagnosis-container">
              <label htmlFor="" className='patientAppointmentForm-diagnosis-label'>Present Diagnosis:</label>
              <textarea name="" id="" cols="30" rows="10" placeholder='Kindly add your last diagnosis if any' onChange={(e)=>setLastDiagnosis(e.target.value)}></textarea>
            </div>
            <div className="patientAppointmentForm-diagnosis-container">
              <label htmlFor="" className='patientAppointmentForm-diagnosis-label'>Email:</label>
              <textarea name="" id="" cols="30" rows="10" placeholder='Kindly add your last diagnosis if any' onChange={(e)=>setEmail(e.target.value)}></textarea>
            </div>
            <div className="patientAppointmentForm-diagnosis-container">
              <label htmlFor="" className='patientAppointmentForm-diagnosis-label'>Present Symtoms:</label>
              <textarea name="" id="" cols="30" rows="10" placeholder='Kindly add how you feel' onChange={(e)=>setPresentSymptoms(e.target.value)}></textarea>
            </div>
          </div>
          <div className="patientAppointmentForm-btn-container">
            <div className="patientAppointmentForm-btn" onClick={handleSendDetails}>Send Details</div>
          </div>
        </div>
      </div>
    </div>
    {popUp? <PopUp text="Appointment details has been sent, you would get a mail for your new a appointment" image="./icons/emailIcon.svg" />:null}
    </>
  )
}

export default PatientAppointmentForm