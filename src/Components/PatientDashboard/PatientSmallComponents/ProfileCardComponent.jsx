import React from 'react'
import "./ProfileCardComponent.css"

const ProfileCardComponent = ({setPatientHospitalPage,setPatientProfileUpdate,setPatientProfilePage}) => {
  const loggedInUserDetail = JSON.parse(localStorage.getItem("loggedInUserDetail"))
  console.log(loggedInUserDetail);
  const handleUpdate = ()=>{
    setPatientHospitalPage(false)
    setPatientProfilePage(false)
    setPatientProfileUpdate(true)
  }
  return (
    <div className='patientProfileCardComponent'>
      <div className="patientProfileCardComponentImageHolder">
        <img src="/images/profileExample.jpg" alt="" />
      </div>
      <div className="patientProfileCardComponentContentHolder">
      <div className="patientProfileCardComponentDetailHolder">
        <p>{loggedInUserDetail.data.firstName} {loggedInUserDetail.data.lastName}</p>
        <h5>Age: 54</h5>
      </div>
      <div className="patientProfileCardComponentUpdateBtn" onClick={handleUpdate}>Update</div>
      </div>
    </div>
  )
}

export default ProfileCardComponent