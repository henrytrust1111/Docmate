import React, { useState } from "react";
// import "./AdminHeader.css";
// import AdminBurgerMenu from "./AdminBurgerMenu";
import PatientBurgerMenu from "./PatientBurgerMenu";
import "./PatientHeader.css"
import { useNavigate } from "react-router-dom";

const PatientHeader = ({patientHospitalSelection}) => {
  const [search, setSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showDashboard,setShowDashboard] = useState(false)
  const nav = useNavigate()
  const handleCancelIcon = () => {
    setSearchValue("");
    setSearch(false);
  };
  const handleIcon = () => {
    nav("/")
  };
  const userInfo = JSON.parse(localStorage.getItem("loggedInUser"));
  const welcomeMessage = userInfo?.message
  console.log(welcomeMessage);
  return (
    <>
      <header className="dashboard-header">
        <div className="dashboard-header-wrapper dashboard-header-wrapper2">
          <div className="admin-dashboard-logo">
            <img src="/icons/DocMate.png" alt="logo" className="dashboard-logo" onClick={handleIcon} />
            <img
              src="/icons/burgerMenu.svg"
              alt="menu"
              className="dashboard-burgerMenu"
              onClick={()=>setShowDashboard(true)} 
            />
          </div>
          {
            patientHospitalSelection? <div className="dashboard-search-bar">
            <div className="search-box">
              <input
                type="text"
                className="search-input"
                placeholder="Search"
                value={searchValue}
                onClick={() => setSearch(true)}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <div className="search-icon">
                {search ? (
                  <img
                    src="/icons/cancel.svg"
                    alt="search"
                    onClick={handleCancelIcon}
                    className="cancel-icon"
                  />
                ) : (
                  <img src="/icons/search.svg" alt="search" />
                )}
              </div>
            </div>
          </div>: null
          }
          <div className="dashboard-right" id="dashboard-right">
            {search && (
              <input
                type="text"
                className="mobile-search-bar"
                placeholder="Search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            )}
            <div className="search-icon">
              {/* <img src="/icons/search.svg" alt="search" onClick={()=>setSearch(true)}/> */}
              {search ? (
                <img
                  src="/icons/cancel.svg"
                  alt="search"
                  onClick={handleCancelIcon}
                  className="cancel-icon"
                />
              ) : (
                <img
                  src="/icons/search.svg"
                  alt="search"
                  onClick={() => setSearch(true)}
                />
              )}
            </div>
            {/* <div className="notification">
              <img src="/icons/notification.svg" alt="notification" />
              <div className="notification-quantity">5</div>
            </div> */}
            <div className="dashboard-profile">
              <div className="profile-image-holder"></div>
              <p style={{fontSize:"10px"}} className="welcomeMessage">{welcomeMessage}</p>
            </div>
          </div>
        </div>
      </header>
      {showDashboard && <PatientBurgerMenu showDashboard={setShowDashboard} />}
    </>
  );
};

export default PatientHeader;
