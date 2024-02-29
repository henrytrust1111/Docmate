import React from 'react'
import "./ProfileCardComponent.css"

const ProfileCardComponent = () => {
  return (
    <div className='patientProfileCardComponent'>
      <div className="patientProfileCardComponentImageHolder">
        <img src="/images/profileExample.jpg" alt="" />
      </div>
      <div className="patientProfileCardComponentContentHolder">
      <div className="patientProfileCardComponentDetailHolder">
        <p>David Adebayo</p>
        <h5>Age: 54</h5>
      </div>
      <div className="patientProfileCardComponentUpdateBtn">Update</div>
      </div>
    </div>
  )
}

export default ProfileCardComponent