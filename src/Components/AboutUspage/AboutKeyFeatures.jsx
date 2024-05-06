import React from "react";
import "./AboutKeyFeatures.css";
import { MdOutlineSecurity } from "react-icons/md";
import { TfiTimer } from "react-icons/tfi";
import { FaUsers } from "react-icons/fa6";

const AboutKeyFeatures = () => {
  return (
    <div className="Keyfeaturesmain">
      <div className="Keyfeaturesmainbody">
        <div className="Keyfeaturesthemain">
          <div className="Keyfeaturesthemtext">
            <h2>Key Features</h2>
          </div>
        </div>
        <div className="Keyfeaturesthembox">
          <div className="Keyfeaturesthemboxs">
            <div className="Keyfeaturesthemboxtext">
              <div className="Keyfeaturesthemboxtext1">
                <h3>User-Friendly Interface</h3>
              </div>
            </div>
            <div className="Keyfeaturesthemboxtext1icon">
              <div className="Keyfeaturesthemboxtext1iconboc">
                <FaUsers className="Keyfeaturesthemboxtext1iconboc1" />
              </div>
            </div>
            <div className="Keyfeaturesthemboxtextcon2">
              <div className="Keyfeaturesthemboxtextcontext2">
                <p>
                  {" "}
                  Our appointment management system features an intuitive
                  interface that allows patients to schedule, reschedule, or
                  cancel appointments with ease.
                </p>
              </div>
            </div>
          </div>
          <div className="Keyfeaturesthemboxs">
            <div className="Keyfeaturesthemboxtext">
              <div className="Keyfeaturesthemboxtext1">
                <h3>Secure and Confidential</h3>
              </div>
            </div>
            <div className="Keyfeaturesthemboxtext1iconboc">
              <div className="Keyfeaturesthemboxtext1iconboc">
                <MdOutlineSecurity className="Keyfeaturesthemboxtext1iconboc1" />
              </div>
            </div>
            <div className="Keyfeaturesthemboxtextcon2">
              <div className="Keyfeaturesthemboxtextcontext2">
                <p>
                  We prioritize patient privacy and data security, ensuring that
                  all personal health information is encrypted and stored
                  securely in compliance with industry standards.
                </p>
              </div>
            </div>
          </div>
          <div className="Keyfeaturesthemboxs">
            <div className="Keyfeaturesthemboxtext">
              <div className="Keyfeaturesthemboxtext1">
                <h3>Real-Time Availability</h3>
              </div>
            </div>
            <div className="Keyfeaturesthemboxtext1iconboc">
              <div className="Keyfeaturesthemboxtext1iconboc">
                <TfiTimer className="Keyfeaturesthemboxtext1iconboc1" />
              </div>
            </div>
            <div className="Keyfeaturesthemboxtextcon2">
              <div className="Keyfeaturesthemboxtextcontext2">
                <p>
                  Patients can view real-time availability of doctors and
                  healthcare services, enabling them to choose convenient
                  appointment slots based on their preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutKeyFeatures;
