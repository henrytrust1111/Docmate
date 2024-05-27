import React, { useEffect } from "react";
import { useState } from "react";
import "./AdminPayment.css";
import axios from "axios";

const AdminPayment = () => {
  const [payments, setPayments] = useState([]);
  const [error, setError] = useState(null);
  const loggedInHospital = JSON.parse(localStorage.getItem("loggedInHospital"));
  const userToken = loggedInHospital?.token;
  // console.log(userToken);
  // const headers = {
  //   Authorization: `Bearer ${userToken}`,
  // };

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get(
          "https://doc-mate.onrender.com/all-payment",
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        );
        setPayments(response.data.payments);
        console.log(response.data.payments);
      } catch (err) {
        console.error("Error fetching payments:", err);
        setError(
          err.response ? err.response.data.message : "An error occurred"
        );
      }
    };

    fetchPayments();
  }, [userToken]);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-GB", options);
    return formattedDate === "Invalid Date" ? "none" : formattedDate;
  };

  return (
    <div className="admin-dashboard-right">
      <div className="admin-dashboard-right-wrapper">
        <div className="dashboard-overview">
          <h2>Payment Overview</h2>
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
                {payments?.map((e, i) => (
                  <div className="list-container" key={i}>
                    <div className="s-n">{i + 1}</div>
                    <div className="attribute-fixed-width patient-profile-record">
                      <div className="profile-img-view"></div>
                      <div className="name-view-profile-container">
                        <p>{`${e.firstName} ${e.lastName}`}</p>
                        {/* <p className="colored-view-profile">View profile</p> */}
                      </div>
                    </div>
                    <div className="attribute-fixed-width email-record">
                      {e.email}
                    </div>
                    <div className="attribute-fixed-width request-record">
                      {e.phoneNumber}
                    </div>
                    <div className="attribute-fixed-width date-record">
                      {formatDate(e.paymentDate)}
                    </div>
                    <div className="delete-view-btn">
                      <div className="delete-button">Delete</div>
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

export default AdminPayment;
