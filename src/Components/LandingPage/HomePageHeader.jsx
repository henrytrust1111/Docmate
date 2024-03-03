import React, { useState } from "react";
import "./HomePageHeader.css";
// import DocMate from "icons/docmate1232.png";
import { useNavigate } from "react-router-dom";
import HospitalOrPatient from "../PopUp/HospitalOrPatient";
import HeaderBurgerPopUp from "../PopUp/HeaderBurgerPopUp";

const HomePageHeader = () => {
  const [popUp, setPopUp] = useState(false);
  const [menuPop, setMenuPop] = useState(false);
  const [popUp1, setPopUp1] = useState(false);
  const nav = useNavigate();
  const handleSignUp = () => {
    // nav("/patientRegister");
    setPopUp1(false);
    setPopUp(!popUp);
  };
  const handleLogin = () => {
    // nav("/patientRegister");
    setPopUp(false);
    setPopUp1(!popUp1);
  };
  const handleAboutUs = () => {
    nav("/aboutUs");
  };
  const handleFaq = () => {
    nav("/faq");
  };
  const handleContactUs = () => {
    nav("/contactUs");
  };
  const handleHome = () => {
    nav("/");
  };

  const handleMenu = () => {
    setMenuPop(!menuPop);
  };
  return (
    <>
      <div className="mainHeader">
        <div className="mainHeaderWrapper">
          <div className="Mainheaderlogo">
            <img src="./icons/docmate1232.png" className="Mainheaderlogoimag" />
          </div>

          <div className="headerhome">
            <nav onClick={handleHome}>Home</nav>
            <nav onClick={handleAboutUs}>About Us</nav>
            <nav>Pricing</nav>
            <nav onClick={handleFaq}>FAQ's</nav>
            <nav onClick={handleContactUs}>Contact Us</nav>
          </div>
          <div className="registerbody">
            <button className="headsignup" onClick={handleSignUp}>
              Sign up
              <div className="headsignupIcon headsignupIcon1">
                {popUp ? (
                  <img src="/icons/caretDownBlue.png" alt="caret" />
                ) : (
                  <img src="/icons/caretRightBlue.png" alt="caret" />
                )}
              </div>
              {/* <div className="headsignupIcon headsignupIcon2"><img src="/icons/caretRightWhite.png" alt="caret" /></div> */}
              {popUp ? <HospitalOrPatient /> : null}
            </button>
            <button className="headlogin" onClick={handleLogin}>
              Login
              <div className="headsignupIcon headsignupIcon3">
                {popUp1 ? (
                  <img src="/icons/caretDownWhite.png" alt="caret" />
                ) : (
                  <img src="/icons/caretRightWhite.png" alt="caret" />
                )}
              </div>
              {/* <div className="headsignupIcon headsignupIcon4"><img src="/icons/caretRightDown.png" alt="caret" /></div> */}
              {popUp1 ? <HospitalOrPatient /> : null}{" "}
            </button>
          </div>
          <div className="landingPageBurgerMenu" onClick={handleMenu}>
            <img src="/icons/burgerMenu2.svg" alt="" />
          </div>
        </div>
      </div>
      {menuPop ? <HeaderBurgerPopUp /> : null}
    </>
  );
};

export default HomePageHeader;
