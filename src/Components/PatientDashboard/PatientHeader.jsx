import React, { useState, useEffect } from "react";
// import "./AdminHeader.css";
// import AdminBurgerMenu from "./AdminBurgerMenu";
import PatientBurgerMenu from "./PatientBurgerMenu";
import { useNavigate } from "react-router-dom";
import "./PatientHeader.css";
import axios from "axios";
import { ThemeContext } from "../context/Theme";
import { useContext } from "react";

const PatientHeader = () => {
  const [search, setSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showSearchResult1, setShowSearchResult1] = useState(true);
  const { showSearch, setShowSearch } = useContext(ThemeContext);
  // console.log(showSearch);
  const nav = useNavigate();
  const handleCancelIcon = () => {
    setSearchValue("");
    setSearch(false);
  };

  const handleLogo = () => {
    nav("/");
  };
  const handlePatientProfile = () => {
    nav("/patient/patientProfilePage");
  };
  
  const userInfo = JSON.parse(localStorage.getItem("loggedInUser"));
  const img = userInfo?.data.profilePicture?.url
  // console.log(img);
  const userToken = userInfo?.token;
  const welcomeMessage = userInfo?.message;
  // console.log(welcomeMessage);
  const searchHospital = async () => {
    try {
      const response = await axios.get(
        `https://doc-mate.onrender.com/hospitals-search?q=${searchValue}`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      const data = response.data?.data;
      console.log(data);
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    if (searchValue.trim() !== "") {
      searchHospital();
    } else {
      setSearchResults([]);
    }
  }, [searchValue]);

  const handleHospitalSelection = (id) => {
    // console.log(id);
    localStorage.removeItem("hospitalID")
    localStorage.setItem("hospitalIDSearch", id);
    setShowSearchResult1(false);
    nav("/patient/patientHospitalPage");
  };

  return (
    <>
      {/* <div className="helloWorld">Welcome</div> */}
      {showSearchResult1 ? (
        <div className="search-results">
          <div className="search-results4">
            {searchResults?.map((result, index) => (
              <div
                key={index}
                className="search-results3"
                onClick={() => handleHospitalSelection(result._id)}
              >
                <h4>{result?.hospitalName}</h4>
                <p>{result?.hospitalAddress}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      <header className="dashboard-header">
        <div className="dashboard-header-wrapper">
          <div className="admin-dashboard-logo" >
            <img
              src="/icons/DocMate.png"
              alt="logo"
              onClick={handleLogo}
              className="dashboard-logo"
            />
            <img
              src="/icons/burgerMenu.svg"
              alt="menu"
              className="dashboard-burgerMenu"
              onClick={() => setShowDashboard(true)}
            />
          </div>
          {showSearch ? (
            <div className="dashboard-search-bar">
              <div className="search-box PatientHeaderSearch">
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
            </div>
          ) : null}
          <div className="dashboard-right" id="dashboard-right">
            {search && showSearch ? (
              <input
                type="text"
                className="mobile-search-bar"
                placeholder="Search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            ) : null}
            {showSearch ? (
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
            ) : null}
            {/* <div className="notification">
              <img src="/icons/notification.svg" alt="notification" />
              <div className="notification-quantity">5</div>
            </div> */}
            <div className="dashboard-profile">
              <div className="profile-image-holder" onClick={handlePatientProfile}>
                <img src={img} alt="" />
              </div>
              <p style={{ fontSize: "10px" }}>{welcomeMessage}</p>
            </div>
          </div>
        </div>
      </header>
      {showDashboard && <PatientBurgerMenu showDashboard={setShowDashboard} />}
    </>
  );
};

export default PatientHeader;
