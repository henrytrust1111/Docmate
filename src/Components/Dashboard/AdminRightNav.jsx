import React, { useEffect, useState } from "react";
import "./AdminRightNav.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminRightNav = ({setAdminPatientView,setAdminProfile,setAdminRightNav,setAdminPayment,setAdminAppointmentReview,setAdminAssignDoctor}) => {
  const [allAppointment,setAllAppointment] = useState(true)
  const [reschedules,setReschedules] = useState(false)
  const [attended,setAttented] = useState(false)
  const [unattended,setUnattended] = useState(false)
  const [getAllAppointment,setGetAllAppointment] = useState()
  const [getAllReschedules,setGetAllReschedules] = useState()
  const [getAllConfirmed,setGetAllConfirmed] = useState()
  const [getAllPending,setGetAllPending] = useState()
  
const nav = useNavigate();
  const handleAllAppointment = ()=>{
    setReschedules(false)
    setAllAppointment(true)
    setAttented(false)
    setUnattended(false)
  }

  const handleReschedules = ()=>{
    setReschedules(true)
    setAllAppointment(false)
    setAttented(false)
    setUnattended(false)
  }
  
  const handleAttended = ()=>{
    setReschedules(false)
    setAllAppointment(false)
    setAttented(true)
    setUnattended(false)
  }

  const handleUnattended = ()=>{
    setReschedules(false)
    setAllAppointment(false)
    setAttented(false)
    setUnattended(true)
  }

  const handleViewAppointment= (id)=>{
    console.log(id);
    localStorage.setItem("userAppointmentID",id)
    nav("/admin/adminAppointmentReview")
  }
  const url = "https://doc-mate.onrender.com/all-appointments";
  const url1 = "https://doc-mate.onrender.com/pendingappointment";
  const url2 = "https://doc-mate.onrender.com/get-all-confirmed";
  const url3 = "https://doc-mate.onrender.com/all-pending-reschedule";
  const loggedInHospital = JSON.parse(localStorage.getItem("loggedInHospital"))
  const userToken = loggedInHospital?.token;
  console.log(userToken);
  const headers = {
    Authorization: `Bearer ${userToken}`,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, { headers });
        console.log(response?.data);
        console.log(response?.data.appointments);
        setGetAllAppointment(response?.data.appointments)
      } catch (error) {
        console.error("Error:", error);
        // console.error("Error Response:", error.response);
      }
    };
    const fetchData1 = async () => {
      try {
        const response = await axios.get(url1, { headers });
        console.log(response?.data);
        console.log(response?.data.appointments);
        setGetAllReschedules(response?.data.appointments)
      } catch (error) {
        console.error("Error:", error);
        // console.error("Error Response:", error.response);
      }
    };
    const fetchData2 = async () => {
      try {
        const response = await axios.get(url2, { headers });
        console.log(response?.data);
        console.log(response?.data.appointments);
        setGetAllConfirmed(response?.data.appointments)
      } catch (error) {
        console.error("Error:", error);
        // console.error("Error Response:", error.response);
      }
    };
    const fetchData3 = async () => {
      try {
        const response = await axios.get(url3, { headers });
        console.log(response?.data);
        console.log(response?.data.appointments);
        setGetAllPending(response?.data.appointments)
      } catch (error) {
        console.error("Error:", error);
        // console.error("Error Response:", error.response);
      }
    };

    fetchData();
    fetchData1();
    fetchData2();
    fetchData3();
  }, []);

console.log(getAllAppointment);

  return (
    <div className="admin-dashboard-right">
      <div className="admin-dashboard-right-wrapper">
        <div className="dashboard-overview">
          <h2>Dashboard Overview</h2>
        </div>
        <div className="dashboard-main-content-container">
          <div className="select-dashboard-view-container">
            <div className="select-dashboard-view-wrapper" id={allAppointment? "active-state":null} onClick={handleAllAppointment}>
              <div className={allAppointment? "select-dashboard-view-holder active-state-container":"select-dashboard-view-holder"}>
                <div>
                  <p>{getAllAppointment?.length}</p>
                  <p>All Appointment</p>
                </div>
              </div>
            </div>
            <div className="select-dashboard-view-wrapper" id={reschedules? "active-state":null} onClick={handleReschedules}>
              <div className={reschedules? "select-dashboard-view-holder active-state-container":"select-dashboard-view-holder"}>
                <div>
                  <p>{getAllReschedules? getAllReschedules?.length:"0"}</p>
                  <p>Reschedules</p>
                </div>
              </div>
            </div>
            <div className="select-dashboard-view-wrapper" id={attended? "active-state":null} onClick={handleAttended}>
              <div className={attended? "select-dashboard-view-holder active-state-container":"select-dashboard-view-holder"}>
                <div>
                  <p>{getAllConfirmed? getAllConfirmed?.length:"0"}</p>
                  <p>Attended</p>
                </div>
              </div>
            </div>
            <div className="select-dashboard-view-wrapper" id={unattended? "active-state":null} onClick={handleUnattended}>
              <div className={unattended? "select-dashboard-view-holder active-state-container":"select-dashboard-view-holder"}>
                <div>
                  <p>{getAllPending? getAllPending?.length:"0"}</p>
                  <p>Unattended</p>
                </div>
              </div>
            </div>
          </div>
          <div className="selected-view-container">
            <div className="dashboard-attribute-container">
              <div className="dashboard-attribute-wrapper">
                <div className="dashboard-attribute-holder">
                  <div className="s-n">S/N</div>
                  <div className="attribute-fixed-width patient-attribute">
                    PATIENT
                  </div>
                  <div className="attribute-fixed-width email-attribute">
                    EMAIL
                  </div>
                  <div className="attribute-fixed-width request-attribute">
                    REQUEST
                  </div>
                  <div className="attribute-fixed-width date-attribute">
                    DATE
                  </div>
                  <div className="attribute-fixed-width date-attribute"></div>
                </div>
              </div>
              <div className="dashboard-list-wrapper">
                {allAppointment? getAllAppointment?.map((e,i)=>
                  <div className="list-container" key={i}>
                  <div className="s-n">{i+1}</div>
                  <div className="attribute-fixed-width patient-profile-record">
                    <div className="profile-img-view"></div>
                    <div className="name-view-profile-container">
                      <p>{e.fullName}</p>
                      <p className="colored-view-profile">View profile</p>
                    </div>
                  </div>
                  <div className="attribute-fixed-width email-record">
                    {e.patientEmail}
                  </div>
                  <div className="attribute-fixed-width request-record">
                    {e.status}
                  </div>
                  <div className="attribute-fixed-width date-record">
                    Today, 10 May 2023
                  </div>
                  <div className="delete-view-btn">
                    <div className="view-button" onClick={()=>handleViewAppointment(e._id)}>View</div>
                    <div className="delete-button">Delete</div>
                  </div>
                </div>
                ) :reschedules? getAllReschedules?.map((e,i)=>
                <div className="list-container" key={i}>
                <div className="s-n">{i+1}</div>
                <div className="attribute-fixed-width patient-profile-record">
                  <div className="profile-img-view"></div>
                  <div className="name-view-profile-container">
                    <p>{e.fullName}</p>
                    <p className="colored-view-profile">View profile</p>
                  </div>
                </div>
                <div className="attribute-fixed-width email-record">
                  {e.patientEmail}
                </div>
                <div className="attribute-fixed-width request-record">
                  {e.status}
                </div>
                <div className="attribute-fixed-width date-record">
                  Today, 10 May 2023
                </div>
                <div className="delete-view-btn">
                  <div className="view-button" onClick={()=>handleViewAppointment(e._id)}>View</div>
                  <div className="delete-button">Delete</div>
                </div>
              </div>) :attended? getAllConfirmed?.map((e,i)=> <div className="list-container" key={i}>
                  <div className="s-n">{i+1}</div>
                  <div className="attribute-fixed-width patient-profile-record">
                    <div className="profile-img-view"></div>
                    <div className="name-view-profile-container">
                      <p>{e.fullName}</p>
                      <p className="colored-view-profile">View profile</p>
                    </div>
                  </div>
                  <div className="attribute-fixed-width email-record">
                    {e.patientEmail}
                  </div>
                  <div className="attribute-fixed-width request-record">
                    {e.status}
                  </div>
                  <div className="attribute-fixed-width date-record">
                    Today, 10 May 2023
                  </div>
                  <div className="delete-view-btn">
                    <div className="view-button" onClick={()=>handleViewAppointment(e._id)}>View</div>
                    <div className="delete-button">Delete</div>
                  </div>
                </div>):unattended? getAllPending?.map((e,i)=> <div className="list-container" key={i}>
                  <div className="s-n">{i+1}</div>
                  <div className="attribute-fixed-width patient-profile-record">
                    <div className="profile-img-view"></div>
                    <div className="name-view-profile-container">
                      <p>{e.fullName}</p>
                      <p className="colored-view-profile">View profile</p>
                    </div>
                  </div>
                  <div className="attribute-fixed-width email-record">
                    {e.patientEmail}
                  </div>
                  <div className="attribute-fixed-width request-record">
                    {e.status}
                  </div>
                  <div className="attribute-fixed-width date-record">
                    Today, 10 May 2023
                  </div>
                  <div className="delete-view-btn">
                    <div className="view-button" onClick={()=>handleViewAppointment(e._id)}>View</div>
                    <div className="delete-button">Delete</div>
                  </div>
                </div>):null
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRightNav;
