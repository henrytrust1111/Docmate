import React, { useState } from "react";
import "./HomePageHeader.css";
import { Link } from "react-scroll";
// import DocMate from "icons/docmate1232.png";
import { useNavigate } from "react-router-dom";
import HospitalOrPatient from "../PopUp/HospitalOrPatient";
import HeaderBurgerPopUp from "../PopUp/HeaderBurgerPopUp";
import HospitalPopUp from "../PopUp/HospitalPopUp";

const HomePageHeader = () => {
  const [popUp, setPopUp] = useState(false);
  const [activeHome, setActiveHome] = useState(true);
  const [activeAboutUs, setActiveAboutUs] = useState(false);
  const [activeFaq, setActiveFaq] = useState(false);
  const [activeContactUs, setActiveContactUs] = useState(false);
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
    setActiveAboutUs(true);
    setActiveContactUs(false);
    setActiveFaq(false);
    setActiveHome(false);
    nav("/aboutUs");
  };
  const handleFaq = () => {
    setActiveAboutUs(false);
    setActiveContactUs(false);
    setActiveFaq(true);
    setActiveHome(false);
    nav("/faq");
  };
  const handleContactUs = () => {
    setActiveAboutUs(false);
    setActiveContactUs(true);
    setActiveFaq(false);
    setActiveHome(false);
    nav("/contactUs");
  };
  const handleHome = () => {
    setActiveAboutUs(false);
    setActiveContactUs(false);
    setActiveFaq(false);
    setActiveHome(true);
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
            <nav
              onClick={()=>handleHome()}
              style={activeHome ? { color: "#2c7da0" } : null}
            >
              Home
            </nav>
            <nav
              onClick={()=>handleAboutUs()}
              style={activeAboutUs ? { color: "#2c7da0" } : {color:"#272727"}}
            >
              About Us
            </nav>
            <Link to="price" spy={true} smooth={true} offset={50} duration={500} onClick={handleHome}><nav>Pricing</nav></Link>
            <nav
              onClick={handleFaq}
              style={activeFaq ? { color: "#2c7da0" } : null}
            >
              FAQ's
            </nav>
            <nav
              onClick={handleContactUs}
              style={activeContactUs ? { color: "#2c7da0" } : null}
            >
              Contact Us
            </nav>
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
              {popUp1 ? <HospitalPopUp /> : null}{" "}
            </button>
          </div>
          <div className="landingPageBurgerMenu" onClick={handleMenu}>
            <img src="/icons/burgerMenu2.svg" alt="" />
          </div>
        </div>
      </div>
      {menuPop ? <HeaderBurgerPopUp setMenuPop={setMenuPop} /> : null}
    </>
  );
};

export default HomePageHeader;
