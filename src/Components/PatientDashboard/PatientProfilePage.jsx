import React from 'react'
import "./PatientProfilePage.css"
import ProfileCardComponent from './PatientSmallComponents/ProfileCardComponent'
import PatientInformationBox from './PatientSmallComponents/PatientInformationBox'

const PatientProfilePage = ({setPatientHospitalPage,setPatientProfileUpdate,setPatientProfilePage,}) => {
  const loggedInUserDetail = JSON.parse(localStorage.getItem("loggedInUser"))
  console.log(loggedInUserDetail);
  return (
    <div className='PatientProfilePage-container'>
        <div className="PatientProfilePage-wrapper">
            <div className="PatientProfilePage-cardWrapper">
              <ProfileCardComponent setPatientHospitalPage={setPatientHospitalPage} setPatientProfileUpdate={setPatientProfileUpdate} setPatientProfilePage={setPatientProfilePage}/>
            </div>
                <div className="PatientProfilePage-informationWrapper"><p>Information</p> <hr className='hr'/></div>
                <div className="PatientProfilePage-detailWrapper">
                  <div className="PatientProfilePageDetailContainer1">
                  <PatientInformationBox title="Gender" text={loggedInUserDetail?.data.gender} />
                  <PatientInformationBox title="Address" text={loggedInUserDetail?.data.patientAddress} />
                  <PatientInformationBox title="Email" text={loggedInUserDetail?.data.email} />
                  </div>
                  <div className="PatientProfilePageDetailContainer1">
                  <PatientInformationBox title="PhoneMunber" text={loggedInUserDetail?.data.phoneNumber} />
                  <PatientInformationBox title="Allergies" text={loggedInUserDetail?.data.allergies} />
                  <PatientInformationBox title="BloodType" text={loggedInUserDetail?.data.bloodType} />
                    </div> 
                </div>
        </div>
    </div>
  )
}

export default PatientProfilePage