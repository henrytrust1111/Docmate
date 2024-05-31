import React, { useEffect, useState } from "react";
import "./AdminRightNav.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { TiDelete } from "react-icons/ti";
import ClipLoader from "react-spinners/ClipLoader";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);

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
    fetchData("https://doc-mate.onrender.com/all-appointments", (data) =>
      setAppointments((prev) => ({ ...prev, all: data }))
    );
    fetchData("https://doc-mate.onrender.com/all-pending-reschedule", (data) =>
      setAppointments((prev) => ({ ...prev, reschedules: data }))
    );
    fetchData("https://doc-mate.onrender.com/get-all-confirmed", (data) =>
      setAppointments((prev) => ({ ...prev, confirmed: data }))
    );
    fetchData("https://doc-mate.onrender.com/pendingappointment", (data) =>
      setAppointments((prev) => ({ ...prev, pending: data }))
    );
  }, []);

  const openModal = (appointmentId) => {
    setSelectedAppointmentId(appointmentId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedAppointmentId(null);
    setIsModalOpen(false);
  };

  const deleteAppointment = async () => {
    const appointmentId = selectedAppointmentId;
    try {
      const url4 = `https://doc-mate.onrender.com/delete-appointment/${appointmentId}`;
      await axios.delete(url4, { headers });
      setAppointments((prev) => ({
        ...prev,
        all: prev.all
          ? prev.all.filter((appt) => appt._id !== appointmentId)
          : [],
        reschedules: prev?.reschedules
          ? prev?.reschedules.filter((appt) => appt._id !== appointmentId)
          : [],
        confirmed: prev.confirmed
          ? prev.confirmed.filter((appt) => appt._id !== appointmentId)
          : [],
        pending: prev.pending
          ? prev.pending.filter((appt) => appt._id !== appointmentId)
          : [],
      }));
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to delete appointment. Please try again.");
    } finally {
      closeModal();
    }
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  if (loading) {
    return (
      <div className="admin-dashboard-right">
        <div className="spinner">
          <ClipLoader size={50} color={"#123abc"} loading={loading} />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="admin-dashboard-right">
        <p className="error-message">{error.message}</p>
      </div>
    );
  }

  const renderAppointments = (appointments) => {
    if (appointments.length === 0) {
      return (
        <div className="">
          <h4>No Appointments</h4>
        </div>
      );
    }
    return appointments.map((e, i) => (
      <div className="list-container" key={i}>
        <div className="s-n">{i + 1}</div>
        <div className="attribute-fixed-width patient-profile-record">
          <div className="name-view-profile-container">
            <p>{e.fullName}</p>
          </div>
        </div>
        <div className="attribute-fixed-width email-record">
          {e.patientEmail}
        </div>
        <div className="attribute-fixed-width request-record">{e.status}</div>
        <div className="attribute-fixed-width date-record">
          {formatTimestamp(e.createdAt)}
        </div>
        <div className="delete-view-btn">
          <div
            className="view-button"
            onClick={() => handleViewAppointment(e._id)}
          >
            View
          </div>
          <div className="delete-button" onClick={() => openModal(e._id)}>
            Delete
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className="admin-dashboard-right">
        <div className="admin-dashboard-right-wrapper">
          <div className="dashboard-overview">
            <h2>Dashboard Overview</h2>
          </div>
          <div className="dashboard-main-content-container">
            <div className="select-dashboard-view-container">
              <div
                className={`${
                  allAppointment
                    ? "active-state select-dashboard-view-wrapper11"
                    : "select-dashboard-view-wrapper"
                }`}
                onClick={handleAllAppointment}
              >
                <div
                  className={`select-dashboard-view-holder ${
                    allAppointment
                      ? "active-state-container select-dashboard-view-holder"
                      : "select-dashboard-view-holder"
                  }`}
                >
                  <div>
                    <p>{appointments?.all ? appointments?.all.length : "0"}</p>
                    <p>All Appointment</p>
                  </div>
                </div>
              </div>
              <div
                className={`${
                  reschedules
                    ? "active-state select-dashboard-view-wrapper11"
                    : "select-dashboard-view-wrapper"
                }`}
                onClick={handleReschedules}
              >
                <div
                  className={`select-dashboard-view-holder ${
                    reschedules ? "active-state-container" : ""
                  }`}
                >
                  <div>
                    <p>
                      {appointments.reschedules
                        ? appointments?.reschedules.length
                        : "0"}
                    </p>
                    <p>Reschedules</p>
                  </div>
                </div>
              </div>
              <div
                className={`${
                  attended
                    ? "active-state select-dashboard-view-wrapper11"
                    : "select-dashboard-view-wrapper"
                }`}
                onClick={handleAttended}
              >
                <div
                  className={`select-dashboard-view-holder ${
                    attended ? "active-state-container" : ""
                  }`}
                >
                  <div>
                    <p>
                      {appointments.confirmed
                        ? appointments?.confirmed.length
                        : "0"}
                    </p>
                    <p>Attended</p>
                  </div>
                </div>
              </div>
              <div
                className={`${
                  unattended
                    ? "active-state select-dashboard-view-wrapper11"
                    : "select-dashboard-view-wrapper"
                }`}
                onClick={handleUnattended}
              >
                <div
                  className={`select-dashboard-view-holder ${
                    unattended ? "active-state-container" : ""
                  }`}
                >
                  <div>
                    <p>
                      {appointments?.pending
                        ? appointments?.pending.length
                        : "0"}
                    </p>
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
                  {allAppointment && renderAppointments(appointments.all || [])}
                  {reschedules &&
                    renderAppointments(appointments.reschedules || [])}
                  {attended && renderAppointments(appointments.confirmed || [])}
                  {unattended &&
                    renderAppointments(appointments.pending || [])}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Confirm Delete"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <TiDelete size={40} color="red" />
              <h4>Are you sure you want to delete this appointment?</h4>
            </div>
            <div className="modal-body">
              <p> </p>
            </div>
            <div className="modal-footer1">
              <button onClick={deleteAppointment}>Yes</button>
              <button onClick={closeModal}>No</button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AdminRightNav;
