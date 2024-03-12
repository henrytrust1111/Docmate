import React, { useEffect, useState } from 'react'
import "./PatientProfilePage.css"
import ProfileCardComponent from './PatientSmallComponents/ProfileCardComponent'
import PatientInformationBox from './PatientSmallComponents/PatientInformationBox'
import axios from 'axios'
import { ThemeContext } from '../context/Theme'
import { useContext } from 'react'
import { useLayoutEffect } from 'react'

const PatientProfilePage = ({setPatientHospitalPage,setPatientProfileUpdate,setPatientProfilePage,}) => {
  const [user,setUser] = useState()
  const loggedInUserDetail = JSON.parse(localStorage.getItem("loggedInUser"))
  const userToken = loggedInUserDetail?.token;
  console.log(userToken);
  console.log(loggedInUserDetail);
  const {showSearch,setShowSearch} = useContext(ThemeContext)
  console.log(showSearch);
  useLayoutEffect(() => {
    const fetchData = ()=>{
      setShowSearch(false)
      
    }

    fetchData()
    console.log(showSearch);
  }, [])
  const headers = {
    Authorization: `Bearer ${userToken}`,
    // Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWU2MTczMDc1ODc4MzU0ZjFiNjNjZDYiLCJlbWFpbCI6ImFkZWt1bmxlbWljaGFlbDEzMTlAZ21haWwuY29tIiwiaWF0IjoxNzA5NTc5MTkzLCJleHAiOjE3MDk2NjU1OTN9.gkHpEZ5cbyzqWgdWRsvXdzwUiJl6m3OphiRJhUvrtyw",
  };
  const url = "https://doc-mate.onrender.com/get-one-user";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, { headers });
        setUser(response.data.data)
        console.log(response.data.data); 
        // setHospital(response.data.data);
      } catch (error) {
        console.error("Error:", error);
        // console.error("Error Response:", error.response);
      }
    };

    fetchData();
  }, [user])

  
  
  return (
    <div className='PatientProfilePage-container'>
        <div className="PatientProfilePage-wrapper">
            <div className="PatientProfilePage-cardWrapper">
              <ProfileCardComponent setPatientHospitalPage={setPatientHospitalPage} setPatientProfileUpdate={setPatientProfileUpdate} setPatientProfilePage={setPatientProfilePage}/>
            </div>
                <div className="PatientProfilePage-informationWrapper"><p>Information</p> <hr className='hr'/></div>
                <div className="PatientProfilePage-detailWrapper">
                  <div className="PatientProfilePageDetailContainer1">
                  <PatientInformationBox title="Gender" text={user?.gender? user?.gender: "No Gender"} />
                  <PatientInformationBox title="Address" text={user?.patientAddress? user?.patientAddress: "No Address"} />
                  <PatientInformationBox title="Email" text={user?.email? user?.email: "No Email"} />
                  </div>
                  <div className="PatientProfilePageDetailContainer1">
                  <PatientInformationBox title="PhoneMunber" text={user?.phoneNumber? user?.phoneNumber: "No Address"} />
                  <PatientInformationBox title="Allergies" text={user?.allergies? user?.allergies: "No Allergies"} />
                  <PatientInformationBox title="BloodType" text={user?.bloodType? user?.bloodType: "No BloodType"} />
                    </div> 
                </div>
        </div>
    </div>
  )
}

export default PatientProfilePage