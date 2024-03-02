import React from "react";
import "./Testimonia.css";
import image from "../../asset/icons/lady.png";
import image11 from "../../asset/icons/star.png";

const Testimonial = () => {
  return (
    <div className="testimonalbody">
      <div className="testimonaupperdiv">
        <p>Docmate</p>
        <h1>
          What people are saying <br />
          about us
        </h1>
      </div>

      <div className="testimonalcarddiv">
        <div className="carrddiv">
          <div className="uppercarrddiv">
            <div className="leftborderdiv">
              <img src={image} alt="" />{" "}
            </div>
            <h1>Kayla Schofield</h1>
          </div>
          <div className="midcarrddiv">
            <p>Overall rating</p>
            <div className="middcarrdimg">
              <img src={image11} alt="" />{" "}
            </div>
          </div>
          <div className="docmatetextdiv">
            <p id="testimonialsP">
              “ has made transitioning on my own very easy.
              I wouldn't be as organized as I am without this software so I have
              nothing but good things to say.”
            </p>
          </div>
        </div>
        <div className="carrddiv">
          <div className="uppercarrddiv">
            <div className="leftborderdiv">
              <img src={image} alt="" />{" "}
            </div>
            <h1>Kayla Schofield</h1>
          </div>

          <div className="midcarrddiv">
            <p>Overall rating</p>
            <div className="middcarrdimg">
              <img src={image11} alt="" />{" "}
            </div>
          </div>

          <div className="docmatetextdiv">
            <p>
              “ <span>DocMate</span> has made transitioning on my own very easy.
              I wouldn't be as organized as I am without this software so I have
              nothing but good things to say.”{" "}
            </p>
          </div>
        </div>
        <div className="carrddiv">
          <div className="uppercarrddiv">
            <div className="leftborderdiv">
              <img src={image} alt="" />{" "}
            </div>
            <h1>Kayla Schofield</h1>
          </div>

          <div className="midcarrddiv">
            <p>Overall rating</p>
            <div className="middcarrdimg">
              <img src={image11} alt="" />{" "}
            </div>
          </div>

          <div className="docmatetextdiv">
            <p>
              “<span>DocMate</span> has made transitioning on my own very easy.
              I wouldn't be as organized as I am without this software so I have
              nothing but good things to say.”{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
