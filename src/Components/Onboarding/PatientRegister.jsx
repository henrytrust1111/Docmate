import React from "react";
import "./PatientRegister.css";
import image from "/Docmate.png";
import image2 from "/signup.png";
import { useNavigate } from "react-router-dom";

const PatientRegister = () => {
  const nav = useNavigate()
  const handleLogo = ()=>{
    nav("/")
  }
  return (
    <div className="registerbody1">
      <article className="registerbothdiv">
        <div className="registerimagediv">
          <div className="registerlogo" onClick={handleLogo}>
            <img src={image} alt="" />
          </div>
          <div className="mainimage">
            <img src={image2} alt="" />
          </div>
        </div>

        <section className="registertextdiv">
          {/* <form> */}
          <div className="acctdiv">
            {" "}
            <h1>signup for account</h1>
          </div>

          <div className="theform">
            <input type="text" name=" First Name" placeholder="First Name" />
          </div>
          <div className="theform">
            <input type="text" name=" Last Name" placeholder="Last Name" />
          </div>
          <div className="theform">
            <input
              type="text"
              name="Enter Your Email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="theform">
            <input type="text" name="Password" placeholder="Password" />
          </div>
          <div className="theform">
            <input
              type="text"
              name="Confirm Password"
              placeholder="Confirm Password"
            />
          </div>
          <button className="submitbtn" type="submit">
            Signup
          </button>

          <h1>Already have an account ? Log in</h1>

          {/* </form> */}
        </section>
      </article>
    </div>
  );
};

export default PatientRegister;
