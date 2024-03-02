import React from "react";
import "./Hero.css";
import hero from "/images/Hero.png";

const Hero = () => {
  return (
    <div className="HeroPage">
      <div className="HeroPageWrapper">
      <div className="leftHero">
        <div className="Docdiv">
          <h1>
            {" "}
            <span>DocMate</span> Provides <br />
            Best And Affordable <br />
            Health Care
          </h1>
        </div>

        <div className="makingdiv">
          <h1>
            Making Medical <br />
            Management Effortless
          </h1>
        </div>
        <div className="btndiv">
          <button className="started">Get Started </button>
        </div>
      </div>

      <div className="rightHero">
        <div className="imgdiv">
          <img src={hero} alt="" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;
