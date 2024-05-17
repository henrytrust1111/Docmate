import React, { useEffect, useState } from "react";
import "./PatientAppointmentReview.css";
import { ThemeContext } from "../context/Theme";
import { useContext } from "react";
import { useLayoutEffect } from "react";

const PatientAppointmentReview = () => {
  const { showSearch, setShowSearch } = useContext(ThemeContext);
  const [isKorapayLoaded, setIsKorapayLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const [image, setImage] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [date, setDate] = useState(null);
  const userInfo = JSON.parse(localStorage.getItem("loggedInUser"));

  useLayoutEffect(() => {
    const fetchData = () => {
      setShowSearch(false);
    };
    setUser(userInfo?.data);
    setImage(userInfo?.data.profilePicture?.url);
    setFirstName(userInfo?.data.firstName)
    setLastName(userInfo?.data.lastName)
    setEmail(userInfo?.data.email)
    setPhoneNumber(userInfo?.data.phoneNumber)
    setDate("12/32.33")

    fetchData();
    console.log(showSearch);
  }, [setShowSearch]);
  console.log(user);

  const data = {image,firstName,lastName,email,phoneNumber,date};
  console.log(data);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://korablobstorage.blob.core.windows.net/modal-bucket/korapay-collections.min.js";
    script.async = true;
    script.onload = () => setIsKorapayLoaded(true);
    document.body.appendChild(script);
  }, []);

  const payKorapay = () => {
    if (!isKorapayLoaded || !window.Korapay) {
      console.error("Korapay is not loaded");
      return;
    }

    let key = `key${Math.random()}`;
    window.Korapay.initialize({
      key: "pk_test_eR5xsWZRG1XfPVe8JvDJyHQWR1nieyBU2DaE5dBm",
      reference: key,
      amount: 3000,
      currency: "NGN",
      customer: {
        name: "John Doe",
        email: "john@doe.com",
      },
      onSuccess: function (data) {
        console.log(data);
      },
      onError: function (error) {
        console.error(error);
      },
    });
  };

  return (
    <div className="PatientAppointmentReview-container">
      <div className="PatientAppointmentReview-wrapper">
        <div className="PatientAppointmentReview-container1">
          <h2>Appointment Review</h2>
        </div>
        <div className="PatientAppointmentReview-container2">
          <div className="PatientAppointmentReview-content">
            <p>Doctor's Name</p>
            <span>Dr Ahmed</span>
          </div>
          <div className="PatientAppointmentReview-content">
            <p>Appointment Day</p>
            <span>07/12/2024</span>
          </div>
          <div className="PatientAppointmentReview-content">
            <p>Time of appointment</p>
            <span>12:00pm</span>
          </div>
          <div className="PatientAppointmentReview-content">
            <p>Fee</p>
            <span>₦3,000</span>
          </div>
        </div>
        <div className="PatientAppointmentReview-container3">
          {/* <div className="PatientAppointmentReview-btn1">Request a Reschedule</div> */}
          <div className="PatientAppointmentReview-btn2" onClick={payKorapay}>
            Pay for appointment
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientAppointmentReview;

// import React from 'react'
// import "./PatientAppointmentReview.css"

// const PatientAppointmentReview = () => {
//   return (
//     <div className='PatientAppointmentReview-container'>
//       <div className="PatientAppointmentReview-wrapper">
//         <div className="PatientAppointmentReview-container1">
//           <h2>Appointment Review</h2>
//         </div>
//         <div className="PatientAppointmentReview-container2">
//           <div className="PatientAppointmentReview-content">
//             <p>Doctor's Name</p>
//             <span>Dr Ahmed</span>
//           </div>
//           <div className="PatientAppointmentReview-content">
//             <p>Appointment Day</p>
//             <span>07/12/2024</span>
//           </div>
//           <div className="PatientAppointmentReview-content">
//             <p>Time of appointment</p>
//             <span>12:00pm</span>
//           </div>
//           <div className="PatientAppointmentReview-content">
//             <p>Fee</p>
//             <span>₦3,000</span>
//           </div>
//         </div>
//         <div className="PatientAppointmentReview-container3">
//           <div className="PatientAppointmentReview-btn1">Request a Reschedule</div>
//           <div className="PatientAppointmentReview-btn2">Pay for appointment</div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default PatientAppointmentReview
