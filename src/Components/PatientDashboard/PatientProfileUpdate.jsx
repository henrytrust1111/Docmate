import React, { useState } from "react";
import "./PatientProfileUpdate.css";
import axios from "axios";

const PatientProfileUpdate = () => {
  const [bloodType, setBloodType] = useState();
  const [allegies, setAllegies] = useState();
  const [patientAddress, setPatientAddress] = useState();
  const [gender, setGender] = useState();
  console.log(bloodType);
  console.log(allegies);

  const data = { bloodType, allegies, patientAddress, gender };

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const id = loggedInUser?.data.id;
  const Url = `https://doc-mate.onrender.com/update-profile/${id}`;
  const userToken = loggedInUser?.data.token;
  console.log(userToken);
  const headers = {
    // Authorization: `Bearer ${userToken}`,
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWU2MTczMDc1ODc4MzU0ZjFiNjNjZDYiLCJlbWFpbCI6ImFkZWt1bmxlbWljaGFlbDEzMTlAZ21haWwuY29tIiwiaWF0IjoxNzA5NTc5MTkzLCJleHAiOjE3MDk2NjU1OTN9.gkHpEZ5cbyzqWgdWRsvXdzwUiJl6m3OphiRJhUvrtyw",
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(Url, data, { headers });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="PatientProfileUpdate-container">
      <div className="PatientProfileUpdate-holder">
        <div className="PatientProfileUpdate-wrapper">
          <div className="PatientProfileUpdate-container1">
            <div
              className="Patient-imageUpload-container"
              id="upload-image-container1"
            >
              <input type="file" id="insertFile" style={{ display: "none" }} />
              <label htmlFor="insertFile" className="upload-your-file">
                Upload your file
              </label>
            </div>
          </div>
          <div
            className="PatientProfileUpdate-container2"
            id="PatientProfileUpdate-container2"
          >
            <div className="PatientProfileUpdate-input-container">
              <label htmlFor="" className="PatientProfileUpdate-label">
                Name:
              </label>
              <input type="text" className="PatientProfileUpdate-input-input" />
            </div>
            <div className="PatientProfileUpdate-input-container">
              <label
                htmlFor=""
                className="PatientProfileUpdate-label"
                onChange={(e) => setPatientAddress(e.target.value)}
              >
                Address:
              </label>
              <input type="text" className="PatientProfileUpdate-input-input" />
            </div>
            <div className="PatientProfileUpdate-input-container">
              <label
                htmlFor=""
                className="PatientProfileUpdate-label"
                placeholder="Optional"
                onChange={(e) => setPhoneNumber(e.target.value)}
              >
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
            <div
              className="PatientProfileUpdate-input-container"
              id="updateFor-gender-age"
            >
              <div className="gender-update-container">
                <label htmlFor="" className="PatientProfileUpdate-label">
                  Gender:
                </label>
                <select
                  name=""
                  id=""
                  className="updateSelect"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select gender</option>
                  <option value="">Male</option>
                  <option value="">Female</option>
                </select>
              </div>
              <div className="gender-update-container">
                <label htmlFor="" className="PatientProfileUpdate-label">
                  Age:
                </label>
                <input
                  type="text"
                  className="PatientProfileUpdate-input-input"
                />
              </div>
            </div>
            <div className="PatientProfileUpdate-input-container">
              <label htmlFor="" className="PatientProfileUpdate-label">
                Allegies:
              </label>
              <input
                type="text"
                className="PatientProfileUpdate-input-input"
                onChange={(e) => setAllegies(e.target.value)}
              />
            </div>
            <div className="PatientProfileUpdate-input-container">
              <label htmlFor="" className="PatientProfileUpdate-label">
                BloodType:
              </label>
              <input
                type="text"
                placeholder="Optiona"
                className="PatientProfileUpdate-input-input"
                onChange={(e) => setBloodType(e.target.value)}
              />
            </div>
          </div>
          <div className="PatientProfileUpdate-container3">
            <div className="PatientProfileUpdate-btn" onClick={handleUpdate}>
              Update
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfileUpdate;
