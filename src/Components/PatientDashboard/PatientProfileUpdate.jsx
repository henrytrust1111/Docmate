import React from "react";
import "./PatientProfileUpdate.css";

const PatientProfileUpdate = () => {
  return (
    <div className="PatientProfileUpdate-container">
<div className="PatientProfileUpdate-holder">
<div className="PatientProfileUpdate-wrapper">
        <div className="PatientProfileUpdate-container1">
          <div className="Patient-imageUpload-container" id="upload-image-container1">
            <input type="file" id="insertFile" style={{ display: "none" }} />
            <label htmlFor="insertFile" className="upload-your-file">
              Upload your file
            </label>
          </div>
        </div>
        <div className="PatientProfileUpdate-container2" id="PatientProfileUpdate-container2">
          <div className="PatientProfileUpdate-input-container">
            <label htmlFor="" className="PatientProfileUpdate-label">
              Name:
            </label>
            <input type="text" className="PatientProfileUpdate-input-input" />
          </div>
          <div className="PatientProfileUpdate-input-container">
            <label htmlFor="" className="PatientProfileUpdate-label">
              Address:
            </label>
            <input type="text" className="PatientProfileUpdate-input-input" />
          </div>
          <div className="PatientProfileUpdate-input-container">
            <label htmlFor="" className="PatientProfileUpdate-label">
              PhoneNumber:
            </label>
            <input type="text" className="PatientProfileUpdate-input-input" />
          </div>
          <div className="PatientProfileUpdate-input-container">
            <label htmlFor="" className="PatientProfileUpdate-label">
              Email:
            </label>
            <input type="text" className="PatientProfileUpdate-input-input" />
          </div>
          <div className="PatientProfileUpdate-input-container" id="updateFor-gender-age">
            <div className="gender-update-container">
              <label htmlFor="" className="PatientProfileUpdate-label">
                Gender:
              </label>
              <select name="" id="" className="updateSelect">
                <option value="">Select gender</option>
                <option value="">Male</option>
                <option value="">Female</option>
              </select>
            </div>
            <div className="gender-update-container">
              <label htmlFor="" className="PatientProfileUpdate-label">
                Age:
              </label>
              <input type="text" className="PatientProfileUpdate-input-input" />
            </div>
          </div>
          <div className="PatientProfileUpdate-input-container">
            <label htmlFor="" className="PatientProfileUpdate-label">
              Allegies:
            </label>
            <input type="text" className="PatientProfileUpdate-input-input" />
          </div>
          <div className="PatientProfileUpdate-input-container">
            <label htmlFor="" className="PatientProfileUpdate-label">
              BloodType:
            </label>
            <input type="text" className="PatientProfileUpdate-input-input" />
          </div>
        </div>
        <div className="PatientProfileUpdate-container3">
          <div className="PatientProfileUpdate-btn">Update</div>
        </div>
      </div>
</div>
    </div>
  );
};

export default PatientProfileUpdate;
