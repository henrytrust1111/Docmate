import React from "react";
import "./ServiceCard.css";
import image from "/icons/calendar.svg";
import image2 from "../../asset/icons/upload-icon.png";
import image3 from "../../asset/icons/email.png";
import image4 from "../../asset/icons/upload.png";

const ServiceCard = () => {
  return (
    <div className="servicecardbody">
      <div className="cardholderdiv">
        <div className="carddiv2">
          <div className="carddiv2Img">
            <img src={image} alt="" />
          </div>
          <h1>Appointment</h1>
          <p>Patients can book appointment from the comfort of their homes</p>
        </div>

        <div className="carddiv2">
          <div className="carddiv2Img">
            <img src={image2} alt="" />
          </div>
          <h1>Wait Time</h1>
          <p>We help you manage your time effectively to help manage health</p>
        </div>

        <section className="carddiv2">
          <div className="carddiv2Img">
            <img src={image3} alt="" />
          </div>
          <h1>Notification</h1>
          <p>Get notified and keep track of your appointments</p>
        </section>

        <article className="carddiv2">
          <div className="carddiv2Img secureImg">
            <img src={image4} alt="" />
          </div>
          <h1>Secure</h1>
          <p>
            All personal health information undergoes encryption and is Secure
          </p>
        </article>
      </div>
    </div>
  );
};

export default ServiceCard;
