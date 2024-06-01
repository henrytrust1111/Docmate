import React, { useEffect, useState } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

const PatientAppointmentHistory = () => {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const userInfo = JSON.parse(localStorage.getItem("loggedInUser"));
  const userToken = localStorage.getItem("loggedInUserToken");
  const patientId = userInfo?.data.id; 
  const headers = {
    Authorization: `Bearer ${userToken}`,
  };

  console.log(userToken);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(
          `https://doc-mate.onrender.com/appointment-history/${patientId}`, {headers}
        );
        setAppointments(response.data.data);
        console.log(response);
      } catch (err) {
        if (err.response) {
          if (err.response.status === 400) {
            setError("Patient ID is required");
          } else if (err.response.status === 404) {
            setError("No appointments found for this patient");
          } else {
            setError("An error occurred");
          }
        } else {
          setError("An error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  };

  if (isLoading) {
    return (
      <div className="admin-dashboard-right">
        <div className="spinner">
          <ClipLoader size={50} color={"#123abc"} loading={isLoading} />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="admin-dashboard-right">
        <p className="error-message">{error}</p>
      </div>
    );
  }

  return (
    <div className="admin-dashboard-right">
      <div className="admin-dashboard-right-wrapper">
        <div className="dashboard-overview">
          <h2>Appointment History</h2>
        </div>
        <div className="dashboard-main-content-container">
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
                    PHONE NUMBER
                  </div>
                  <div className="attribute-fixed-width date-attribute">
                    DATE
                  </div>
                  <div className="attribute-fixed-width date-attribute"></div>
                </div>
              </div>
              <div className="dashboard-list-wrapper">
                {appointments.length === 0 ? (
                  <p>No appointments found</p>
                ) : (
                  appointments.map((appointment, index) => (
                    <div className="list-container" key={appointment._id}>
                      <div className="s-n">{index + 1}</div>
                      <div className="attribute-fixed-width patient-profile-record">
                        <div className="profile-img-view"></div>
                        <div className="name-view-profile-container">
                          <p>{appointment.patientName}</p>
                        </div>
                      </div>
                      <div className="attribute-fixed-width email-record">
                        {appointment.patientEmail}
                      </div>
                      <div className="attribute-fixed-width request-record">
                        {appointment.patientPhone}
                      </div>
                      <div className="attribute-fixed-width date-record">
                        {formatDate(appointment.date)}
                      </div>
                      <div className="delete-view-btn">
                        <div className="delete-button">Delete</div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientAppointmentHistory;



