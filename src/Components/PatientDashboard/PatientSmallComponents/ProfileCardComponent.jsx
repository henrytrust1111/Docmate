import React, { useEffect, useState } from 'react'
import "./ProfileCardComponent.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const ProfileCardComponent = () => {
  const [user, setUser] = useState(); 
  // console.log(user);
  const nav = useNavigate()
  const loggedInUserDetail = JSON.parse(localStorage.getItem("loggedInUser"))
  const img = loggedInUserDetail?.data.profilePicture?.url
  const userToken = loggedInUserDetail?.token;
  const headers = {
    Authorization: `Bearer ${userToken}`,
  };
  const url = "https://doc-mate.onrender.com/get-one-user";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, { headers });
        setUser(response.data.data);
        // console.log(response.data.data);
      } catch (error) {
        // console.error("Error:", error);
        // console.error("Error Response:", error.response);
      }
    };

    fetchData();
  }, [user]);

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
        <h5>Age: {user?.age ? user?.age : "..."}</h5>
      </div>
      <div className="patientProfileCardComponentUpdateBtn" onClick={handleUpdate}>Update</div>
      </div>
    </div>
  )
}

export default ProfileCardComponent