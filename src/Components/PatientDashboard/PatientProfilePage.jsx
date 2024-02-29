import React from 'react'
import "./PatientProfilePage.css"
import ProfileCardComponent from './PatientSmallComponents/ProfileCardComponent'
import PatientInformationBox from './PatientSmallComponents/PatientInformationBox'

const PatientProfilePage = () => {
  return (
    <div className='PatientProfilePage-container'>
        <div className="PatientProfilePage-wrapper">
            <div className="PatientProfilePage-cardWrapper">
              <ProfileCardComponent />
            </div>
                <div className="PatientProfilePage-informationWrapper"><p>Information</p> <hr className='hr'/></div>
                <div className="PatientProfilePage-detailWrapper">
                  <div className="PatientProfilePageDetailContainer1">
                  <PatientInformationBox title="Gender" text="Male" />
                  <PatientInformationBox title="Address" text="No 47, 4th Avenue D Close, Festac Town" />
                  <PatientInformationBox title="Email" text="OBS@gmail.com" />
                  </div>
                  <div className="PatientProfilePageDetailContainer1">
                  <PatientInformationBox title="PhoneMunber" text="08035874563  " />
                  <PatientInformationBox title="Allergies" text="Milk" />
                  <PatientInformationBox title="BloodType" text="0+[Positive]" />
                    </div> 
                </div>
        </div>
    </div>
  )
}

export default PatientProfilePage