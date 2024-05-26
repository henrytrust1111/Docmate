import React, { useEffect, useState, useContext, useLayoutEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { ThemeContext } from "../context/Theme";
import ClipLoader from "react-spinners/ClipLoader";
// import Modal from "./Modal";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import "./PatientAppointmentReview.css";
import Modal from "./PatientSmallComponents/Modal/Modal";

const PatientAppointmentReview = () => {
  const { setShowSearch } = useContext(ThemeContext);
  const [appDetails, setAppDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isKorapayLoaded, setIsKorapayLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const [image, setImage] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [date, setDate] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalIcon, setModalIcon] = useState(null);

  const userInfo = JSON.parse(localStorage.getItem("loggedInUser"));
  const params = useParams();
  const appointmentId = params.appointmentId;
  console.log(appointmentId);
  const url = "https://doc-mate.onrender.com/confirm-payment";
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const userToken = loggedInUser?.token;
  const headers = {
    Authorization: `Bearer ${userToken}`,
    "Content-Type": "application/json",
  };

  useLayoutEffect(() => {
    setShowSearch(false);
    if (appDetails) {
      // setUser(userInfo.data);
      setImage(userInfo.data.profilePicture?.url);
      setFirstName(userInfo.data.firstName);
      setLastName(userInfo.data.lastName);
      setEmail(userInfo.data.email);
      setPhoneNumber(userInfo.data.phoneNumber || -1);
    }
  }, []);
  console.log(email);

  const url2 = `https://doc-mate.onrender.com/app-details/${appointmentId}`;

  useEffect(() => {
    setShowSearch(false);
    const script = document.createElement("script");
    script.src =
      "https://korablobstorage.blob.core.windows.net/modal-bucket/korapay-collections.min.js";
    script.async = true;
    script.onload = () => setIsKorapayLoaded(true);
    document.body.appendChild(script);

    const fetchData = async () => {
      try {
        const res = await axios.get(url2, { headers });
        setAppDetails(res.data.appointment);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const confirmPayment = async (paymentData) => {
    try {
      const response = await axios.post(url, paymentData, { headers });
      console.log("Payment confirmed:", response.data);
      setModalTitle("Payment Confirmed");
      setModalMessage("Your payment was successful.");
      setModalIcon(<FaCheckCircle color="green" />);
      setShowModal(true);
    } catch (error) {
      console.error("Error confirming payment:", error);
      setModalTitle("An Error Occurred");
      setModalMessage("There was an issue with your payment.");
      setModalIcon(<FaTimesCircle color="red" />);
      setShowModal(true);
    }
  };

  const payKorapay = () => {
    if (!isKorapayLoaded || !window.Korapay) {
      console.error("Korapay is not loaded");
      return;
    }

    const currentDate = new Date();
    const formattedDate = `${
      currentDate.getMonth() + 1
    }/${currentDate.getDate()}/${currentDate.getFullYear()}`;
    setDate(formattedDate);

    let key = `key${Math.random()}`;
    window.Korapay.initialize({
      key: "pk_test_eR5xsWZRG1XfPVe8JvDJyHQWR1nieyBU2DaE5dBm",
      reference: key,
      amount: 3000,
      currency: "NGN",
      customer: {
        name: `${firstName} ${lastName}`,
        email: email,
      },
      onSuccess: function (data) {
        console.log(data);
        const paymentData = {
          firstName,
          lastName,
          email,
          phoneNumber,
          hospitalId: appointmentId,
          appointmentDate: formattedDate,
        };
        confirmPayment(paymentData);
      },
      onError: function (error) {
        console.error(error);
      },
    });
  };

  if (isLoading && !appDetails) {
    return (
      <div className="PatientAppointmentReview-container">
        <div className="spinner">
          <ClipLoader size={50} color={"#123abc"} loading={isLoading} />
        </div>
      </div>
    );
  }

  return (
    <div className="PatientAppointmentReview-container">
      <div className="PatientAppointmentReview-wrapper">
        <div className="PatientAppointmentReview-container1">
          <h2>Appointment Review</h2>
        </div>
        <div className="PatientAppointmentReview-container2">
          <div className="PatientAppointmentReview-content">
            <p>Doctor's Name</p>
            <span>{appDetails?.doctorName}</span>
          </div>
          <div className="PatientAppointmentReview-content">
            <p>Appointment Day</p>
            <span>{appDetails?.date}</span>
          </div>
          <div className="PatientAppointmentReview-content">
            <p>Time of appointment</p>
            <span>{appDetails?.time}</span>
          </div>
          <div className="PatientAppointmentReview-content">
            <p>Fee</p>
            <span>{`₦${appDetails?.fee}`}</span>
          </div>
        </div>
        <div className="PatientAppointmentReview-container3">
          <Link to={'/patient/patientRescheduleForm'} style={{textDecoration:"none"}}>
            <div className="PatientAppointmentReview-btn1">
              Request a Reschedule
            </div>
          </Link>
          <div className="PatientAppointmentReview-btn2" onClick={payKorapay}>
            Pay for appointment
          </div>
        </div>
      </div>
      <Modal
        show={showModal}
        handleClose={() => setShowModal(false)}
        title={modalTitle}
        message={modalMessage}
        icon={modalIcon}
      />
    </div>
  );
};

export default PatientAppointmentReview;
