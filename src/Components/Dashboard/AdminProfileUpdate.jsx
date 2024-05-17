import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminProfileUpdate = () => {
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const nav = useNavigate();
  const [isLoading, setIsloading] = useState(false);
  console.log(address, phoneNumber, email);

  const loggedInHospital = JSON.parse(localStorage.getItem("loggedInHospital"));
  const id = loggedInHospital?.data.id;
  const Url = `https://doc-mate.onrender.com/admin-profile-update/${id}`;
  const hospitalToken = loggedInHospital?.token;
  const headers = {
    Authorization: `Bearer ${hospitalToken}`,
  };
  console.log(id);
  // console.log(loggedInHospital?.data);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = {
      address:address,
      phoneNumber:phoneNumber,
      email:email,
    };
    // console.log(data);
    try {
      setIsloading(true);
      console.log(isLoading);
      const response = await axios.put(Url, data, { headers });
      console.log(response);
      Swal.fire({
        title: "Update Successful",
        text: "Profile data updated successfully",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "Error Message",
        text: error.response,
        icon: "error",
      });
      console.error(error);
    } finally {
      setIsloading(false);
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
                Address:
              </label>
              <input
                type="text"
                className="PatientProfileUpdate-input-input"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="PatientProfileUpdate-input-container">
              <label
                htmlFor=""
                className="PatientProfileUpdate-label"
                placeholder="Optional"
              >
                PhoneNumber:
              </label>
              <input
                type="text"
                className="PatientProfileUpdate-input-input"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="PatientProfileUpdate-input-container">
              <label htmlFor="" className="PatientProfileUpdate-label">
                Email:
              </label>
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                className="PatientProfileUpdate-input-input"
              />
            </div>
          </div>
          <div className="PatientProfileUpdate-container3">
            <div className="PatientProfileUpdate-btn" onClick={handleUpdate}>
              {isLoading ? "Updating..." : "Update"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfileUpdate;
