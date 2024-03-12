import React, { useState } from "react";
import "./HeaderBurgerPopUp.css";
import { useNavigate } from "react-router-dom";
import { ImCancelCircle } from "react-icons/im";

const HeaderBurgerPopUp = ({setMenuPop}) => {
  const [popUp, setPopUp] = useState(false);
  const [popUp1, setPopUp1] = useState(false);
  console.log(setMenuPop);
  const nav = useNavigate();
  const handleHospitalRegister = () => {
    nav("/hospitalRegister");
    setMenuPop(false)
    // setPopUp1(false);
    // setPopUp(!popUp);
  };
  const handlePatientRegister = () => {
    nav("/patientRegister");
    setMenuPop(false)
    // setPopUp(false);
    // setPopUp1(!popUp1);
  };
  const handleAboutUs = () => {
    nav("/aboutUs");
    setMenuPop(false)
  };
  const handleFaq = () => {
    nav("/faq");
  };
  const handleContactUs = () => {
    nav("/contactUs");
    setMenuPop(false)
  };
  const handleHome = () => {
    nav("/");
    setMenuPop(false)
  };
  const handleClose = ()=>{
    setMenuPop(false)
  }
  return (
    <div className="HeaderBurgerPopUpPage">
      <div className="HeaderBurgerPopUpPageWrapper">
        <div className="HeaderBurgerCancelButton">
          <ImCancelCircle onClick={handleClose}/>
        </div>
        <div className="HeaderBurgerPopUpPageContent">
          <div onClick={handleHome}>Home</div>
          <div onClick={handleAboutUs}>About Us</div>
          <div >Pricing</div>
          <div onClick={handleFaq}>FAQ</div>
          <div onClick={handlePatientRegister}>Patient SignUp</div>
          <div onClick={handleHospitalRegister}>Hospital SignUp</div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBurgerPopUp;
