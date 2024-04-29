import React from "react";
import "./WelcomePage.css";

const WelcomePage = () => {
  return (
    <div className="welcome">
      <div className="welcome-body">
        <div className="welcome-div">
          <h1>
            Welcome to <span>DocMate</span>
          </h1>
        </div>
        <div className="avater-div">
          <div className="avater-text">
            <h2>Avatar</h2>
          </div>
          <div className="avatar-img">
            <div className="avatar1">
              <img src="/girl-1.png" alt="" />
            </div>

            <div className="girl2">
              <img src="/girl-2.png" alt="" />
            </div>

            <div className="avatar1">
              <img src="/girl-3.png" alt="" />
            </div>

            <div className="avatar1">
              <img src="/boy-1.png" alt="" />
            </div>
          </div>
        </div>

        <div className="name-div">
          <div className="name-holder">
            <h3>Name</h3>
          </div>
          <div className="name-holder-input">
            <input type="text" className="input" />
          </div>
        </div>
        <div className="join-div">
          <button className="joinn">Join</button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
