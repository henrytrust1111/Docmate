import React, { useState } from "react";
import "./HeaderBurgerPopUp.css";
import { useNavigate } from "react-router-dom";

const HeaderBurgerPopUp = () => {
    const [popUp,setPopUp] = useState(false)
    const [popUp1,setPopUp1] = useState(false)
  const nav = useNavigate();
  const handleSignUp = () => {
    // nav("/patientRegister");
    setPopUp1(false)
    setPopUp(!popUp)
  };
  const handleSignIn = () => {
    // nav("/patientRegister");
    setPopUp(false)
    setPopUp1(!popUp1)
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
  return (
    <div className="HeaderBurgerPopUpPage">
      <div className="HeaderBurgerPopUpPageWrapper"></div>
    </div>
  );
};

export default HeaderBurgerPopUp;
