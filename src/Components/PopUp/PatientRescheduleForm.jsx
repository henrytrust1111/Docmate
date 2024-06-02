import React, { useState } from "react";
import "./PatientRescheduleForm.css";
import { RiErrorWarningLine } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";
import { MdOutlineCancel } from "react-icons/md";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Oval } from "react-loader-spinner";

const PatientRescheduleForm = ({appID,setReschedule}) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reasonForReschedule, setReasonForReschedule] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  

  const appointmentId = appID;
  const navigate = useNavigate();

  const handleReschedule = async () => {
    if (!date || !time || !reasonForReschedule) {
      toast.error("Please enter date, time, and reason for reschedule");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.put(
        `https://doc-mate.onrender.com/reschedule-app/${appointmentId}`,
        { date, time, reasonForReschedule }
      );

      toast.success(response.data.message);
      navigate("/appointments");  // Assuming there's a route to view appointments
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.message
        : "Internal server error";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="reschedule-main-container">
      <div className="reschedule-main-body">
        <div className="res-left-side">
          <div className="res-left-side-up">
            <div className="res-left-side-up-icon">
              <RiErrorWarningLine />
            </div>
          </div>
          <div className="res-left-side-down">
            <h3>By rescheduling the appointment you must agree to these points:</h3>
            <ul>
              <li><GoDotFill /> Vivamus sogitis lacus vel augue laoreet rutrum faucibus dolor auctor.</li>
              <li><GoDotFill /> Vivamus sogitis lacus vel augue laoreet rutrum faucibus dolor auctor.</li>
              <li><GoDotFill /> Vivamus sogitis lacus vel augue laoreet rutrum faucibus dolor auctor.</li>
              <li><GoDotFill /> Vivamus sogitis lacus vel augue laoreet rutrum faucibus dolor auctor.</li>
            </ul>
          </div>
        </div>
        <div className="res-right-side">
          <div className="res-right-side-cancel">
            <MdOutlineCancel onClick={() => setReschedule(false)} />
          </div>
          <h3>Reschedule Appointment</h3>
          <div className="reschedule-form">
            <label>Select new date of your appointment</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <label>Select new time of your appointment</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <label>Reason for your reschedule</label>
            <textarea
              placeholder="Reason for your reschedule"
              value={reasonForReschedule}
              onChange={(e) => setReasonForReschedule(e.target.value)}
            ></textarea>
            <button onClick={handleReschedule} disabled={isLoading}>
              {isLoading ? (
                <Oval
                  height={20}
                  width={20}
                  color="#fff"
                  ariaLabel="oval-loading"
                />
              ) : (
                "RESCHEDULE"
              )}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PatientRescheduleForm;




// import React from "react";
// import "./PatientRescheduleForm.css";

// const PatientRescheduleForm = () => {
//   return (
//     <div className="PatientRescheduleForm-container">
//       <div className="PatientRescheduleForm-wrapper">
//         <div className="PatientRescheduleForm-container1">
//           <div className="PatientRescheduleForm-cancelBtn">
//             <img src="/icons/cancelButton.svg" alt="cancelIcon" />
//           </div>
//         </div>
//         <div className="PatientRescheduleForm-container2">
//           <div className="PatientRescheduleForm-contentHolder">
//             <div className="PatientRescheduleForm-title">
//               <h2>Rescheduling</h2>
//             </div>
//             <div className="PatientRescheduleForm-subTitle">
//               <p>Kindly select just a time suitable for you</p>
//             </div>
//             <div className="PatientRescheduleForm-tableContainer">
//               <div className="PatientRescheduleForm-tableTitle">
//                 <div className="PatientRescheduleForm-tableTitle-container">
//                   <div className="PatientRescheduleForm-tableBox1"></div>
//                   <div className="PatientRescheduleForm-tableBox1"></div>
//                   <div className="PatientRescheduleForm-tableBox2">
//                     <h5 className="PatientRescheduleForm-h5">DAY</h5>
//                   </div>
//                   <div className="PatientRescheduleForm-tableBox1 tableBox1">
//                     <h5 className="PatientRescheduleForm-h5">TIME</h5>
//                   </div>
//                   <div className="PatientRescheduleForm-tableBox2">
//                     <h5 className="PatientRescheduleForm-h5">DOCTOR</h5>
//                   </div>
//                   <div className="PatientRescheduleForm-tableBox3">
//                     <h5 className="PatientRescheduleForm-h5">SPECIALITY</h5>
//                   </div>
//                 </div>
//               </div>
//               <div className="PatientRescheduleForm-tableContent-container">
//                 <div className="PatientRescheduleForm-tableContent">
//                   <div className="PatientRescheduleForm-tableBox1">
//                     <p>1</p>
//                   </div>
//                   <div className="PatientRescheduleForm-tableBox1">
//                     <input type="checkbox" className="" />
//                   </div>
//                   <div className="PatientRescheduleForm-tableBox2">
//                     <p>23rd-March-2024</p>
//                   </div>
//                   <div className="PatientRescheduleForm-tableBox1 tableBox1">
//                     <p>12:pm</p>
//                   </div>
//                   <div className="PatientRescheduleForm-tableBox2">
//                     <p>Dr Adekunle Bassey</p>
//                   </div>
//                   <div className="PatientRescheduleForm-tableBox3">
//                     <p>Physician</p>
//                   </div>
//                 </div>
//                 <div className="PatientRescheduleForm-tableContent">
//                   <div className="PatientRescheduleForm-tableBox1">
//                     <p>2</p>
//                   </div>
//                   <div className="PatientRescheduleForm-tableBox1">
//                     <input type="checkbox" className="" />
//                   </div>
//                   <div className="PatientRescheduleForm-tableBox2">
//                     <p>23rd-March-2024</p>
//                   </div>
//                   <div className="PatientRescheduleForm-tableBox1 tableBox1">
//                     <p>12:pm</p>
//                   </div>
//                   <div className="PatientRescheduleForm-tableBox2">
//                     <p>Dr Adekunle Bassey</p>
//                   </div>
//                   <div className="PatientRescheduleForm-tableBox3">
//                     <p>Physician</p>
//                   </div>
//                 </div>
//                 <div className="PatientRescheduleForm-tableContent">
//                   <div className="PatientRescheduleForm-tableBox1">
//                     <p>3</p>
//                   </div>
//                   <div className="PatientRescheduleForm-tableBox1">
//                     <input type="checkbox" className="" />
//                   </div>
//                   <div className="PatientRescheduleForm-tableBox2">
//                     <p>23rd-March-2024</p>
//                   </div>
//                   <div className="PatientRescheduleForm-tableBox1 tableBox1">
//                     <p>12:pm</p>
//                   </div>
//                   <div className="PatientRescheduleForm-tableBox2">
//                     <p>Dr Adekunle Bassey</p>
//                   </div>
//                   <div className="PatientRescheduleForm-tableBox3">
//                     <p>Physician</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="PatientRescheduleForm-btnContainer">
//               <div className="PatientRescheduleForm-btn">Book Appointment</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PatientRescheduleForm;
