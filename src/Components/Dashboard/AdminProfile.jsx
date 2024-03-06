import React, { useEffect, useState } from "react";
// import "./PatientProfilePage.css"
// import ProfileCardComponent from './PatientSmallComponents/ProfileCardComponent'
// import PatientInformationBox from './PatientSmallComponents/PatientInformationBox'
import axios from "axios";
import PatientInformationBox from "../PatientDashboard/PatientSmallComponents/PatientInformationBox";
import ProfileCardComponent from "../PatientDashboard/PatientSmallComponents/ProfileCardComponent";

const AdminProfile = ({
  setPatientHospitalPage,
  setPatientProfileUpdate,
  setPatientProfilePage,
}) => {
  const [user, setUser] = useState();
  const loggedInUserDetail = JSON.parse(localStorage.getItem("loggedInHospital"));
  const userToken = loggedInUserDetail?.token;
  const img = loggedInUserDetail?.data.profilePicture?.url
  console.log(userToken);
  console.log(loggedInUserDetail);
  const headers = {
    Authorization: `Bearer ${userToken}`,
    // Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWU2MTczMDc1ODc4MzU0ZjFiNjNjZDYiLCJlbWFpbCI6ImFkZWt1bmxlbWljaGFlbDEzMTlAZ21haWwuY29tIiwiaWF0IjoxNzA5NTc5MTkzLCJleHAiOjE3MDk2NjU1OTN9.gkHpEZ5cbyzqWgdWRsvXdzwUiJl6m3OphiRJhUvrtyw",
  };
  const url = "https://doc-mate.onrender.com/one-admin";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, { headers });
        setUser(response.data.data);
        console.log(response.data.data);
        // setHospital(response.data.data);
      } catch (error) {
        console.error("Error:", error);
        // console.error("Error Response:", error.response);
      }
    };

    fetchData();
  }, [user]);

  const handleUpdate = ()=>{
    nav("/admin/adminProfileUpdate")
  }

  return (
    <div className="PatientProfilePage-container">
      <div className="PatientProfilePage-wrapper">
        <div className="PatientProfilePage-cardWrapper">
          {/* <ProfileCardComponent
            setPatientHospitalPage={setPatientHospitalPage}
            setPatientProfileUpdate={setPatientProfileUpdate}
            setPatientProfilePage={setPatientProfilePage}
          /> */}
          {/* profile start */}
          <div className='patientProfileCardComponent'>
      <div className="patientProfileCardComponentImageHolder">
        <img src={img} alt="" />
      </div>
      <div className="patientProfileCardComponentContentHolder">
      <div className="patientProfileCardComponentDetailHolder">
        <p>{user?.hospitalName}</p>
        {/* <h5>Age: 54</h5> */}
      </div>
      <div className="patientProfileCardComponentUpdateBtn" onClick={handleUpdate}>Update</div>
      </div>
    </div>
          {/* profile end */}
        </div>
        <div className="PatientProfilePage-informationWrapper">
          <p>Information</p> <hr className="hr" />
        </div>
        <div className="PatientProfilePage-detailWrapper">
          <div className="PatientProfilePageDetailContainer1">
            {/* <PatientInformationBox
              title="Gender"
              text={user?.gender ? user?.gender : "No Gender"}
            /> */}
             <PatientInformationBox
              title="PhoneMunber"
              text={user?.phoneNumber ? user?.phoneNumber : "No Address"}
            />
            <PatientInformationBox
              title="Address"
              text={user?.hospitalAddress ? user?.hospitalAddress : "No Address"}
            />
            <PatientInformationBox
              title="Email"
              text={user?.email ? user?.email : "No Email"}
            />
          </div>
          <div className="PatientProfilePageDetailContainer1">
            {/* <PatientInformationBox
              title="PhoneMunber"
              text={user?.phoneNumber ? user?.phoneNumber : "No Address"}
            />
            <PatientInformationBox
              title="Allergies"
              text={user?.allergies ? user?.allergies : "No Allergies"}
            />
            <PatientInformationBox
              title="BloodType"
              text={user?.bloodType ? user?.bloodType : "No BloodType"}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
