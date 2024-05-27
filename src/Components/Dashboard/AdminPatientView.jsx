import React, { useEffect, useState } from "react";
import "./AdminPatientView.css";
import axios from "axios";

const AdminPatientView = () => {
  const [data, setData] = useState([]);
  const hospitalData = JSON.parse(localStorage.getItem("loggedInHospital"));
  const token = hospitalData?.token;
  const url = "https://doc-mate.onrender.com/all-patient";

  const getAllPatient = async () => {
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(res.data?.data);
    } catch (err) {
      console.error(err, "error");
    }
  };
  useEffect(() => {
    getAllPatient();
  }, ["getallpatient"]);

  const delete1 = async (id) => {
    try {
      const url4 = `https://doc-mate.onrender.com/delete-patient/${id}`;
      const response = await axios.delete(url4, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getAllPatient();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="admin-dashboard-right">
      <div className="admin-dashboard-right-wrapper">
        <div className="dashboard-overview">
          <h2>Dashboard Overview</h2>
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
              {data?.map((i, index) => (
                <div className="dashboard-list-wrapper" key={index}>
                  <div className="list-container">
                    <div className="s-n">{index + 1}</div>
                    <div className="attribute-fixed-width patient-profile-record">
                      <div className="profile-img-view" style={{backgroundColor:"#fff", border:"1px solid grey"}}>
                        <img src={i.profilePicture.url} alt="" />
                      </div>
                      <div className="name-view-profile-container">
                        <p>{i.firstName}</p>
                        <p className="colored-view-profile">View profile</p>
                      </div>
                    </div>
                    <div className="attribute-fixed-width email-record">
                      <p className="text">{i.email}</p>
                    </div>
                    <div className="attribute-fixed-width request-record reschedules">
                      {i.phoneNumber? i.phoneNumber:"none"}
                    </div>
                    <div className="attribute-fixed-width date-record">
                      Today, 10 May 2023
                    </div>
                    <div className="delete-view-btn">
                      <div className="view-button">View</div>
                      <div
                        className="delete-button"
                        onClick={() => delete1(i._id)}
                      >
                        Delete
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPatientView;
