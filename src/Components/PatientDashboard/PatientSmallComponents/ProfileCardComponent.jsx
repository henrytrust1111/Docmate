import React from 'react'
import "./ProfileCardComponent.css"

const ProfileCardComponent = ({setPatientHospitalPage,setPatientProfileUpdate,setPatientProfilePage}) => {
  const loggedInUserDetail = JSON.parse(localStorage.getItem("loggedInUser"))
  const img = loggedInUserDetail?.data.profilePicture?.url
  console.log(loggedInUserDetail);
  const handleUpdate = ()=>{
    nav("/patient/patientProfileUpdate")
  }
  return (
    <div className='patientProfileCardComponent'>
      <div className="patientProfileCardComponentImageHolder">
        <img src={img} alt="" />
      </div>
      <div className="patientProfileCardComponentContentHolder">
      <div className="patientProfileCardComponentDetailHolder">
        <p>{loggedInUserDetail?.data.firstName} {loggedInUserDetail?.data.lastName}</p>
        <h5>Age: 54</h5>
      </div>
      <div className="patientProfileCardComponentUpdateBtn" onClick={handleUpdate}>Update</div>
      </div>
    </div>
  )
}

export default ProfileCardComponent