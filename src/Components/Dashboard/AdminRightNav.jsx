import React, { useEffect, useState } from "react";
import "./AdminRightNav.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminRightNav = () => {
  const [allAppointment, setAllAppointment] = useState(true);
  const [reschedules, setReschedules] = useState(false);
  const [attended, setAttended] = useState(false);
  const [unattended, setUnattended] = useState(false);
  const [appointments, setAppointments] = useState({
    all: [],
    reschedules: [],
    confirmed: [],
    pending: [],
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const nav = useNavigate();

  const handleAllAppointment = () => {
    setAllAppointment(true);
    setReschedules(false);
    setAttended(false);
    setUnattended(false);
  };

  const handleReschedules = () => {
    setAllAppointment(false);
    setReschedules(true);
    setAttended(false);
    setUnattended(false);
  };

  const handleAttended = () => {
    setAllAppointment(false);
    setReschedules(false);
    setAttended(true);
    setUnattended(false);
  };

  const handleUnattended = () => {
    setAllAppointment(false);
    setReschedules(false);
    setAttended(false);
    setUnattended(true);
  };

  const handleViewAppointment = (id) => {
    localStorage.setItem("userAppointmentID", id);
    nav("/admin/adminAppointmentReview");
  };

  const loggedInHospital = JSON.parse(localStorage.getItem("loggedInHospital"));
  const userToken = loggedInHospital?.token;
  const headers = {
    Authorization: `Bearer ${userToken}`,
  };

  const fetchData = async (url, setState) => {
    try {
      const response = await axios.get(url, { headers });
      setState(response.data.appointments);
      console.log(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData("https://doc-mate.onrender.com/all-appointments", (data) => setAppointments((prev) => ({ ...prev, all: data })));
    fetchData("https://doc-mate.onrender.com/pendingappointment", (data) => setAppointments((prev) => ({ ...prev, reschedules: data })));
    fetchData("https://doc-mate.onrender.com/get-all-confirmed", (data) => setAppointments((prev) => ({ ...prev, confirmed: data })));
    fetchData("https://doc-mate.onrender.com/all-pending-reschedule", (data) => setAppointments((prev) => ({ ...prev, pending: data })));
  }, []);

  const deleteAppointment = async (appointmentId) => {
    console.log(appointmentId);
    if (window.confirm("Are you sure you want to delete this appointment?")) {
      try {
        const url4 = `https://doc-mate.onrender.com/delete-appointment/${appointmentId}`;
        await axios.delete(url4, { headers });
        setAppointments((prev) => ({
          ...prev,
          all: prev.all? prev.all.filter((appt) => appt._id !== appointmentId):null,
          reschedules: prev?.reschedules? prev?.reschedules.filter((appt) => appt._id !== appointmentId):null,
          confirmed: prev.confirmed? prev.confirmed.filter((appt) => appt._id !== appointmentId):null,
          pending: prev.pending? prev.pending.filter((appt) => appt._id !== appointmentId):null,
        }));
      } catch (error) {
        console.error("Error:", error);
        setError("Failed to delete appointment. Please try again.");
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const renderAppointments = (appointments) => {
    // console.log(appointments === []);
    if(appointments.length === 0){
      return(
        <div className="" >
       <h4>No Appointments </h4>
      </div>
      )

    }
    return appointments.map((e, i) => (
      <div className="list-container" key={i}>
        <div className="s-n">{i + 1}</div>
        <div className="attribute-fixed-width patient-profile-record">
          <div className="name-view-profile-container">
            <p>{e.fullName}</p>
          </div>
        </div>
        <div className="attribute-fixed-width email-record">{e.patientEmail}</div>
        <div className="attribute-fixed-width request-record">{e.status}</div>
        <div className="attribute-fixed-width date-record">Today, 10 May 2023</div>
        <div className="delete-view-btn">
          <div className="view-button" onClick={() => handleViewAppointment(e._id)}>View</div>
          <div className="delete-button" onClick={() => deleteAppointment(e._id)}>Delete</div>
        </div>
      </div>
    ));
  };

  return (
    <div className="admin-dashboard-right">
      <div className="admin-dashboard-right-wrapper">
        <div className="dashboard-overview">
          <h2>Dashboard Overview</h2>
        </div>
        <div className="dashboard-main-content-container">
          <div className="select-dashboard-view-container">
            <div className={` ${allAppointment ? "active-state select-dashboard-view-wrapper11" : "select-dashboard-view-wrapper"}`} onClick={handleAllAppointment}>
              <div className={`select-dashboard-view-holder ${allAppointment ? "active-state-container select-dashboard-view-holder" : "select-dashboard-view-holder"}`}>
                <div>
                  <p>{appointments?.all ? appointments?.all.length:"0"}</p>
                  <p>All Appointment</p>
                </div>
              </div>
            </div>
            <div className={`${reschedules ? "active-state select-dashboard-view-wrapper11" : "select-dashboard-view-wrapper"}`} onClick={handleReschedules}>
              <div className={`select-dashboard-view-holder ${reschedules ? "active-state-container" : ""}`}>
                <div>
                  <p>{appointments.reschedules ? appointments?.reschedules.length:"0"}</p>
                  <p>Reschedules</p>
                </div>
              </div>
            </div>
            <div className={` ${attended ? "active-state select-dashboard-view-wrapper11" : "select-dashboard-view-wrapper"}`} onClick={handleAttended}>
              <div className={`select-dashboard-view-holder ${attended ? "active-state-container" : ""}`}>
                <div>
                  {/* <p>{{getAllConfirmed? getAllConfirmed?.length:"0"}}</p> */}
                  <p>{appointments.confirmed? appointments?.confirmed.length:"0"}</p>
                  <p>Attended</p>
                </div>
              </div>
            </div>
            <div className={` ${unattended ? "active-state select-dashboard-view-wrapper11" : "select-dashboard-view-wrapper"}`} onClick={handleUnattended}>
              <div className={`select-dashboard-view-holder ${unattended ? "active-state-container" : ""}`}>
                <div>
                  <p>{appointments?.pending ? appointments?.pending.length: "0"}</p>
                  <p>Pending</p>
                </div>
              </div>
            </div>
          </div>
          <div className="selected-view-container">
            <div className="dashboard-attribute-container">
              <div className="dashboard-attribute-wrapper">
                <div className="dashboard-attribute-holder">
                  <div className="s-n">S/N</div>
                  <div className="attribute-fixed-width patient-attribute">PATIENT</div>
                  <div className="attribute-fixed-width email-attribute">EMAIL</div>
                  <div className="attribute-fixed-width request-attribute">REQUEST</div>
                  <div className="attribute-fixed-width date-attribute">DATE</div>
                  <div className="attribute-fixed-width date-attribute"></div>
                </div>
              </div>
              <div className="dashboard-list-wrapper">
                {allAppointment && renderAppointments(appointments.all || [])}
                {reschedules && renderAppointments(appointments.reschedules || [])}
                {attended && renderAppointments(appointments.confirmed || [])}
                {unattended && renderAppointments(appointments.pending || [])}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRightNav;




// import React, { useEffect, useState } from "react";
// import "./AdminRightNav.css";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const AdminRightNav = () => {
//   const [allAppointment,setAllAppointment] = useState(true)
//   const [reschedules,setReschedules] = useState(false)
//   const [attended,setAttented] = useState(false)
//   const [unattended,setUnattended] = useState(false)
//   const [getAllAppointment,setGetAllAppointment] = useState()
//   const [getAllReschedules,setGetAllReschedules] = useState()
//   const [getAllConfirmed,setGetAllConfirmed] = useState()
//   const [getAllPending,setGetAllPending] = useState()
//   const notificationLength = getAllAppointment?.length;
//  localStorage.setItem("notificationLength", notificationLength)
  
// const nav = useNavigate();
//   const handleAllAppointment = ()=>{
//     setReschedules(false)
//     setAllAppointment(true)
//     setAttented(false)
//     setUnattended(false)
//   }

//   const handleReschedules = ()=>{
//     setReschedules(true)
//     setAllAppointment(false)
//     setAttented(false)
//     setUnattended(false)
//   }
  
//   const handleAttended = ()=>{
//     setReschedules(false)
//     setAllAppointment(false)
//     setAttented(true)
//     setUnattended(false)
//   }

//   const handleUnattended = ()=>{
//     setReschedules(false)
//     setAllAppointment(false)
//     setAttented(false)
//     setUnattended(true)
//   }

//   const handleViewAppointment= (id)=>{
//     localStorage.setItem("userAppointmentID",id)
//     nav("/admin/adminAppointmentReview")
//   }
//   // const delete1= (id)=>{
//   // const url4 = `https://doc-mate.onrender.com/delete-patient/${id}`;
//   // }

 
  

//   const url = "https://doc-mate.onrender.com/all-appointments";
//   const url1 = "https://doc-mate.onrender.com/pendingappointment";
//   const url2 = "https://doc-mate.onrender.com/get-all-confirmed";
//   const url3 = "https://doc-mate.onrender.com/all-pending-reschedule";
//   const loggedInHospital = JSON.parse(localStorage.getItem("loggedInHospital"))
//   const userToken = loggedInHospital?.token;
//   const headers = {
//     Authorization: `Bearer ${userToken}`,
//   };

 
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(url, { headers });
//         setGetAllAppointment(response?.data.appointments)
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     };
//     const fetchData1 = async () => {
//       try {
//         const response = await axios.get(url1, { headers });
//         setGetAllReschedules(response?.data.appointments)
//       } catch (error) {
//       }
//     };
//     const fetchData2 = async () => {
//       try {
//         const response = await axios.get(url2, { headers });
//         setGetAllConfirmed(response?.data.appointments)
//       } catch (error) {
//         console.error("Error:", error);
//         // console.error("Error Response:", error.response);
//       }
//     };
//     const fetchData3 = async () => {
//       try {
//         const response = await axios.get(url3, { headers });
//         setGetAllPending(response?.data.appointments)
//       } catch (error) {
//         console.error("Error:", error);
//         // console.error("Error Response:", error.response);
//       }
//     };

    

//     fetchData();
//     fetchData1();
//     fetchData2();
//     fetchData3();
//   }, []);

//   const delete1 = async (id) => {
//     try {
//       const url4 = `https://doc-mate.onrender.com/delete-patient/${id}`;
//       const response = await axios.delete(url4, { headers });
//       fetchData(); 
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };


//   return (
//     <div className="admin-dashboard-right">
//       <div className="admin-dashboard-right-wrapper">
//         <div className="dashboard-overview">
//           <h2>Dashboard Overview</h2>
//         </div>
//         <div className="dashboard-main-content-container">
//           <div className="select-dashboard-view-container">
//             <div className="select-dashboard-view-wrapper" id={allAppointment? "active-state":null} onClick={handleAllAppointment}>
//               <div className={allAppointment? "select-dashboard-view-holder active-state-container":"select-dashboard-view-holder"}>
//                 <div>
//                   <p>{getAllAppointment?.length}</p>
//                   <p>All Appointment</p>
//                 </div>
//               </div>
//             </div>
//             <div className="select-dashboard-view-wrapper" id={reschedules? "active-state":null} onClick={handleReschedules}>
//               <div className={reschedules? "select-dashboard-view-holder active-state-container":"select-dashboard-view-holder"}>
//                 <div>
//                   <p>{getAllReschedules? getAllReschedules?.length:"0"}</p>
//                   <p>Reschedules</p>
//                 </div>
//               </div>
//             </div>
//             <div className="select-dashboard-view-wrapper" id={attended? "active-state":null} onClick={handleAttended}>
//               <div className={attended? "select-dashboard-view-holder active-state-container":"select-dashboard-view-holder"}>
//                 <div>
//                   <p>{getAllConfirmed? getAllConfirmed?.length:"0"}</p>
//                   <p>Attended</p>
//                 </div>
//               </div>
//             </div>
//             <div className="select-dashboard-view-wrapper" id={unattended? "active-state":null} onClick={handleUnattended}>
//               <div className={unattended? "select-dashboard-view-holder active-state-container":"select-dashboard-view-holder"}>
//                 <div>
//                   <p>{getAllPending? getAllPending?.length:"0"}</p>
//                   <p>Pending</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="selected-view-container">
//             <div className="dashboard-attribute-container">
//               <div className="dashboard-attribute-wrapper">
//                 <div className="dashboard-attribute-holder">
//                   <div className="s-n">S/N</div>
//                   <div className="attribute-fixed-width patient-attribute">
//                     PATIENT
//                   </div>
//                   <div className="attribute-fixed-width email-attribute">
//                     EMAIL
//                   </div>
//                   <div className="attribute-fixed-width request-attribute">
//                     REQUEST
//                   </div>
//                   <div className="attribute-fixed-width date-attribute">
//                     DATE
//                   </div>
//                   <div className="attribute-fixed-width date-attribute"></div>
//                 </div>
//               </div>
//               <div className="dashboard-list-wrapper">
//                 {allAppointment? getAllAppointment?.map((e,i)=>
//                   <div className="list-container" key={i}>
//                   <div className="s-n">{i+1}</div>
//                   <div className="attribute-fixed-width patient-profile-record">
//                     {/* <div className="profile-img-view"></div> */}
//                     <div className="name-view-profile-container">
//                       <p>{e.fullName}</p>
//                       {/* <p className="colored-view-profile">View profile</p> */}
//                     </div>
//                   </div>
//                   <div className="attribute-fixed-width email-record">
//                     {e.patientEmail}
//                   </div>
//                   <div className="attribute-fixed-width request-record">
//                     {e.status}
//                   </div>
//                   <div className="attribute-fixed-width date-record">
//                     Today, 10 May 2023
//                   </div>
//                   <div className="delete-view-btn">
//                     <div className="view-button" onClick={()=>handleViewAppointment(e._id)}>View</div>
//                     <div className="delete-button" onClick={()=>delete1(e._id)}>Delete</div>
//                   </div>
//                 </div>
//                 ) :reschedules? getAllReschedules?.map((e,i)=>
//                 <div className="list-container" key={i}>
//                 <div className="s-n">{i+1}</div>
//                 <div className="attribute-fixed-width patient-profile-record">
//                   {/* <div className="profile-img-view"></div> */}
//                   <div className="name-view-profile-container">
//                     <p>{e.fullName}</p>
//                     {/* <p className="colored-view-profile">View profile</p> */}
//                   </div>
//                 </div>
//                 <div className="attribute-fixed-width email-record">
//                   {e.patientEmail}
//                 </div>
//                 <div className="attribute-fixed-width request-record">
//                   {e.status}
//                 </div>
//                 <div className="attribute-fixed-width date-record">
//                   Today, 10 May 2023
//                 </div>
//                 <div className="delete-view-btn">
//                   <div className="view-button" onClick={()=>handleViewAppointment(e._id)}>View</div>
//                   <div className="delete-button" onClick={()=>delete1(e._id)}>Delete</div>
//                 </div>
//               </div>) :attended? getAllConfirmed?.map((e,i)=> <div className="list-container" key={i}>
//                   <div className="s-n">{i+1}</div>
//                   <div className="attribute-fixed-width patient-profile-record">
//                     {/* <div className="profile-img-view"></div> */}
//                     <div className="name-view-profile-container">
//                       <p>{e.fullName}</p>
//                       {/* <p className="colored-view-profile">View profile</p> */}
//                     </div>
//                   </div>
//                   <div className="attribute-fixed-width email-record">
//                     {e.patientEmail}
//                   </div>
//                   <div className="attribute-fixed-width request-record">
//                     {e.status}
//                   </div>
//                   <div className="attribute-fixed-width date-record">
//                     Today, 10 May 2023
//                   </div>
//                   <div className="delete-view-btn">
//                     <div className="view-button" onClick={()=>handleViewAppointment(e._id)}>View</div>
//                     <div className="delete-button" onClick={()=>delete1(e._id)}>Delete</div>
//                   </div>
//                 </div>):unattended? getAllPending?.map((e,i)=> <div className="list-container" key={i}>
//                   <div className="s-n">{i+1}</div>
//                   <div className="attribute-fixed-width patient-profile-record">
//                     {/* <div className="profile-img-view"></div> */}
//                     <div className="name-view-profile-container">
//                       <p>{e.fullName}</p>
//                       {/* <p className="colored-view-profile">View profile</p> */}
//                     </div>
//                   </div>
//                   <div className="attribute-fixed-width email-record">
//                     {e.patientEmail}
//                   </div>
//                   <div className="attribute-fixed-width request-record">
//                     {e.status}
//                   </div>
//                   <div className="attribute-fixed-width date-record">
//                     Today, 10 May 2023
//                   </div>
//                   <div className="delete-view-btn">
//                     <div className="view-button" onClick={()=>handleViewAppointment(e._id)}>View</div>
//                     <div className="delete-button" onClick={()=>delete1(e._id)}>Delete</div>
//                   </div>
//                 </div>):null
//                 }
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminRightNav;
