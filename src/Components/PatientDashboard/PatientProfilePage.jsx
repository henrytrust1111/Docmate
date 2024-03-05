import React, { useEffect } from 'react'
import "./PatientProfilePage.css"
import ProfileCardComponent from './PatientSmallComponents/ProfileCardComponent'
import PatientInformationBox from './PatientSmallComponents/PatientInformationBox'

const PatientProfilePage = ({setPatientHospitalPage,setPatientProfileUpdate,setPatientProfilePage,}) => {
  const loggedInUserDetail = JSON.parse(localStorage.getItem("loggedInUser"))
  console.log(loggedInUserDetail);
  useEffect(() => {
    const Url = "https://doc-mate.onrender.com/get-one-user";
  }, [])
  
  return (
    <div className='PatientProfilePage-container'>
        <div className="PatientProfilePage-wrapper">
            <div className="PatientProfilePage-cardWrapper">
              <ProfileCardComponent setPatientHospitalPage={setPatientHospitalPage} setPatientProfileUpdate={setPatientProfileUpdate} setPatientProfilePage={setPatientProfilePage}/>
            </div>
                <div className="PatientProfilePage-informationWrapper"><p>Information</p> <hr className='hr'/></div>
                <div className="PatientProfilePage-detailWrapper">
                  <div className="PatientProfilePageDetailContainer1">
                  <PatientInformationBox title="Gender" text={loggedInUserDetail.data.gender? loggedInUserDetail?.data.gender: "No Gender"} />
                  <PatientInformationBox title="Address" text={loggedInUserDetail.data.patientAddress? loggedInUserDetail?.data.patientAddress: "No Address"} />
                  <PatientInformationBox title="Email" text={loggedInUserDetail?.data.email? loggedInUserDetail?.data.email: "No Email"} />
                  </div>
                  <div className="PatientProfilePageDetailContainer1">
                  <PatientInformationBox title="PhoneMunber" text={loggedInUserDetail?.data.phoneNumber? loggedInUserDetail?.data.phoneNumber: "No Address"} />
                  <PatientInformationBox title="Allergies" text={loggedInUserDetail?.data.allergies? loggedInUserDetail?.data.allergies: "No Allergies"} />
                  <PatientInformationBox title="BloodType" text={loggedInUserDetail?.data.bloodType? loggedInUserDetail?.data.bloodType: "No BloodType"} />
                    </div> 
                </div>
        </div>
    </div>
  )
}

export default PatientProfilePage