import React from "react";
import "./Testimonia.css";
import image from "/images/fineBoy.jpg";
import vivian from "/images/beautifulGirlSmile.jpg";
import Godwin from "/images/beautifulGirlSmile2.png";
import Henry from "/images/Henry.jpg";
import Rose from "/images/Rose.jpg";
import image11 from "/star.png";

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
            <h1>Ayo Bamidele</h1>
          </div>
          <div className="midcarrddiv">
            <p>Overall rating</p>
            <div className="middcarrdimg">
              <img src={image11} alt="" />{" "}
            </div>
          </div>
          <div className="docmatetextdiv">
            <p id="testimonialsP">
              “ has made transitioning on my own very easy. I wouldn't be as
              organized as I am without this software so I have nothing but good
              things to say.”
            </p>
          </div>
        </div>
        <div className="carrddiv">
          <div className="uppercarrddiv">
            <div className="leftborderdiv">
              <img src={Godwin} alt="" />{" "}
            </div>
            <h1>Victoria Daniel</h1>
          </div>

          <div className="midcarrddiv">
            <p>Overall rating</p>
            <div className="middcarrdimg">
              <img src={image11} alt="star" />{" "}
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
              <img src={vivian} alt="" />{" "}
            </div>
            <h1>Regina Trust</h1>
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
        <div className="carrddiv">
          <div className="uppercarrddiv">
            <div className="leftborderdiv">
              <img src={Henry} alt="" />{" "}
            </div>
            <h1>Trust Henry</h1>
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
        <div className="carrddiv">
          <div className="uppercarrddiv">
            <div className="leftborderdiv">
              <img src={Rose} alt="" />{" "}
            </div>
            <h1>Rose Adoyi</h1>
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
