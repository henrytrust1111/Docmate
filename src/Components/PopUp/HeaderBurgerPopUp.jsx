import React, { useState } from "react";
import "./HeaderBurgerPopUp.css";
import { useNavigate } from "react-router-dom";
import { ImCancelCircle } from "react-icons/im";

const HeaderBurgerPopUp = ({setMenuPop}) => {
  const [popUp, setPopUp] = useState(false);
  const [popUp1, setPopUp1] = useState(false);
  console.log(setMenuPop);
  const nav = useNavigate();
  const handleSignUp = () => {
    // nav("/patientRegister");
    setPopUp1(false);
    setPopUp(!popUp);
  };
  const handleSignIn = () => {
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
          <div>Home</div>
          <div>About Us</div>
          <div>Pricing</div>
          <div>Faq</div>
          <div>Patient Register</div>
          <div>Hospital Register</div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBurgerPopUp;
