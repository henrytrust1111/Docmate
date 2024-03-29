import React, { useEffect, useState } from "react";
import "./PatientHospitalSelection.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/Theme";
import { useContext } from "react";
import { useLayoutEffect } from "react";

const PatientHospitalSelection = () => {
  const [hospitals, setHospital] = useState([]);
  const { showSearch, setShowSearch } = useContext(ThemeContext);
  // console.log(showSearch);
  useLayoutEffect(() => {
    const fetchData = () => {
      setShowSearch(true);
    };

    fetchData();
    // console.log(showSearch);
  }, []);

  const url = "https://doc-mate.onrender.com/all-hospitals";
  const userInfo = JSON.parse(localStorage.getItem("loggedInUser"));
  const userToken = userInfo?.token;
  const headers = {
    Authorization: `Bearer ${userToken}`,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, { headers });
        console.log(response.data.data); // Assuming you want to log the response data
        setHospital(response.data.data);
      } catch (error) {
        console.error("Error:", error);
        // console.error("Error Response:", error.response);
      }
    };

    fetchData();
  }, []);

  const nav = useNavigate();

  const handleHospitalSelection = (id) => {
    // console.log(id);
    localStorage.removeItem("hospitalIDSearch")
    localStorage.setItem("hospitalID", id);

    nav("/patient/patientHospitalPage");
  };

  return (
    <div className="admin-dashboard-right">
      <div className="admin-dashboard-right-wrapper">
        <div className="dashboard-overview">
          <h2>Hospital's Overview</h2>
        </div>
        <div className="dashboard-main-content-container">
          <div className="selected-view-container">
            <div className="dashboard-attribute-container">
              <div className="dashboard-attribute-wrapper">
                <div className="dashboard-attribute-holder">
                  <div className="s-n">S/N</div>
                  <div className="attribute-fixed-width patient-attribute">
                    NAME OF HOSPITAL
                  </div>
                  <div className="attribute-fixed-width email-attribute">
                    ADDRESS
                  </div>
                  <div className="attribute-fixed-width request-attribute">
                    EMAIL
                  </div>
                  <div className="attribute-fixed-width date-attribute">
                    PHONENUMBER
                  </div>
                  <div className="attribute-fixed-width date-attribute"></div>
                </div>
              </div>
              <div className="dashboard-list-wrapper">
                {hospitals?.map((e, i) => (
                  <div className="list-container" key={i}>
                    <div className="s-n">{i + 1}</div>
                    <div className="attribute-fixed-width patient-profile-record">
                      {/* <div className="profile-img-view"></div> */}
                      <div className="name-view-profile-container">
                        <p id="patientDetailTrunc">{e.hospitalName}</p>
                        {/* <p className="colored-view-profile">View profile</p> */}
                      </div>
                    </div>
                    <div className="attribute-fixed-width email-record">
                      <p id="patientDetailTrunc">{e.hospitalAddress}</p>
                    </div>
                    <div className="attribute-fixed-width request-record">
                      <p id="patientDetailTrunc">{e.email}</p>
                    </div>
                    <div className="attribute-fixed-width date-record">
                     <p id="patientDetailTrunc"> {e.phoneNumber}</p>
                    </div>
                    <div className="delete-view-btn" id="hospitalCSS">
                      <div
                        className="delete-button"
                        id="myView-btn"
                        onClick={() => handleHospitalSelection(e._id)}
                      >
                        View
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientHospitalSelection;
