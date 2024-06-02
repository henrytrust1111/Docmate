import React from "react";
import "./Footer.css";
import footerlogo from "../../asset/icons/docmate1232.png";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footerbody">
      <div className="footerhold">
        <div className="firstfooterdiv">
          <div className="footerlogo">
            <img src={footerlogo} alt="" />
          </div>
          <div className="footertext">
            <h2 className="branchOffice">Branch Office</h2>
            <div className="footercontact">
              <div className="footertextimg">
              <MdLocationPin  />
              </div>
              <div className="footerimagetext">
                <p>24 Road Carat24, Festac Town, Lagos</p>
              </div>
            </div>

            <div className="footercontact">
              <div className="footertextimg">
              <IoCall  />
              </div>
              <div className="footerimagetext">
                <p>08142789527</p>
              </div>
            </div>
            <div className="footercontact">
              <div className="footertextimg">
              <FaMessage  />
              </div>
              <div className="footerimagetext">
                <p>docmate24@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="secondfooterdiv">
          <div className="quicklink">
            <h1>Quick Links</h1>
          </div>
          <div className="quicklinktext">
            <h2>Home</h2>
            <h2>About</h2>
            <h2>Services</h2>
          </div>
        </div>
        <div className="thirdfooterdiv">
          <div className="quicklink">
            <h1>Legal Links</h1>
          </div>
          <div className="quicklinktext">
            <h2>Terms</h2>
            <h2>Condition</h2>
            <h2>Policy</h2>
          </div>
        </div>
        <div className="fourthfooterdiv">
          <div className="quicklink">
            <h1>Social Links</h1>
          </div>
          <div className="quicklinktext soso">
            <div className="socials">
              <div className="socialimg">
              <FaFacebookF />
              </div>
              <div className="socialtxt">
                <h1>Facebook</h1>
              </div>
            </div>
            <div className="socials">
              <div className="socialimg">
              <FaTwitter />
              </div>
              <div className="socialtxt">
                <h1>Twitter</h1>
              </div>
            </div>
            <div className="socials">
              <div className="socialimg">
              <FaLinkedinIn />
              </div>
              <div className="socialtxt">
                <h1>LinkedIn</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <h1>Copyrights 2024 by The Curve Africa. All rights reserved</h1>
      </div>
    </div>
  );
};

export default Footer;
