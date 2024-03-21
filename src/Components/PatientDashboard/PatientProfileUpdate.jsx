import React, { useState } from "react";
import "./PatientProfileUpdate.css";
import axios from "axios";
import { ThemeContext } from "../context/Theme";
import { useContext } from "react";
import { useLayoutEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const PatientProfileUpdate = () => {
  const [bloodType, setBloodType] = useState();
  const [isLoading, setIsloading] = useState(false);
  const [allergies, setAllegies] = useState();
  const [patientAddress, setPatientAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [profilePicture, setProfilePicture] = useState();
  const nav = useNavigate();
  // console.log(profilePicture);
  // console.log(bloodType);
  // console.log(allergies);
  // console.log(age);
  // console.log(gender);
  const data1 = {profilePicture}
  const data = {
    bloodType,
    allergies,
    patientAddress,
    gender,
    age,
    phoneNumber,
    patientAddress,
  };

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const address = loggedInUser?.data.patientAddress;
  const number = loggedInUser?.data.phoneNumber;
  const allergy = loggedInUser?.data.allergies;
  const blood = loggedInUser?.data.bloodType;
  // console.log(address);
  // console.log(loggedInUser.data);
  const id = loggedInUser?.data.id;
  const Url = `https://doc-mate.onrender.com/update-profile/${id}`;
  const userToken = loggedInUser.token;
  // console.log(userToken);
  // console.log(loggedInUser);
  const { showSearch, setShowSearch } = useContext(ThemeContext);
  // console.log(showSearch);

  useLayoutEffect(() => {
    const fetchData = () => {
      setShowSearch(false);
    };

    fetchData();
    // console.log(showSearch);
  }, []);
  const headers = {
    Authorization: `Bearer ${userToken}`,
  };

  const handleUpdate1 = async (e) => {
    e.preventDefault();
    console.log(data1);
    try {
      if (!profilePicture) {
        console.log("try to select an Image");
        throw new Error("Profile picture is not selected");
      }
      // setIsloading(true)
      const formData = new FormData();
      formData.append('profilePicture', profilePicture);
      const response = await axios.put(
        "https://doc-mate.onrender.com/uploadimage",
        formData,
        { headers }
      );
      console.log(response.data);
      // nav("/patient/patientProfilePage")
      Swal.fire({
        title: "Update Successful",
        text: response.data.message,
        icon: "success",
      });
    } catch (error) {
      console.log(error.response);
      Swal.fire({
        title: "Error Message",
        text: error.response.data.message,
        icon: "error",
      });
    } finally {
      // setIsloading(false)
    }
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      setIsloading(true);
      const response = await axios.put(Url, data, { headers });
      console.log(response.data);
      nav("/patient/patientProfilePage");
      Swal.fire({
        title: "Update Successful",
        text: response.data.message,
        icon: "success",
      });
    } catch (error) {
      console.log(error.response.data.message);
      Swal.fire({
        title: "Error Message",
        text: error.response.data.message,
        icon: "error",
      });
    } finally {
      setIsloading(false);
    }
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    // const url = URL.createObjectURL(file);
    // console.log(url);
    setProfilePicture(file);
    // const formData = new FormData();
    // formData.append('profilePicture', file);
    // console.log(formData);
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
              <input
                type="file"
                id="insertFile"
                style={{ display: "none" }}
                onChange={(e) => handleFile(e)}
              />

              {profilePicture ? (
                <img src={profilePicture} alt="" />
              ) : (
                <label htmlFor="insertFile" className="upload-your-file">
                  Upload your file
                </label>
              )}
            </div>
          </div>
          <div
            className="PatientProfileUpdate-container2"
            id="PatientProfileUpdate-container2"
          >
            {/* <div className="PatientProfileUpdate-input-container">
              <label htmlFor="" className="PatientProfileUpdate-label">
                Name:
              </label>
              <input type="text" className="PatientProfileUpdate-input-input" />
            </div> */}
            <div className="PatientProfileUpdate-input-container">
              <label
                htmlFor=""
                className="PatientProfileUpdate-label"
                onChange={(e) => setPatientAddress(e.target.value)}
              >
                Address:
              </label>
              <input
                type="text"
                placeholder={address ? address : "input your home address"}
                className="PatientProfileUpdate-input-input"
                onChange={(e) => setPatientAddress(e.target.value)}
              />
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
              <input
                type="text"
                placeholder={number ? number : "please input your phone number"}
                className="PatientProfileUpdate-input-input"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            {/* <div className="PatientProfileUpdate-input-container">
              <label htmlFor="" className="PatientProfileUpdate-label">
                Email:
              </label>
              <input type="text" className="PatientProfileUpdate-input-input" />
            </div> */}
            <div
              className="PatientProfileUpdate-input-container"
              id="updateFor-gender-age"
            >
              <div className="gender-update-container">
                <label htmlFor="" className="PatientProfileUpdate-label">
                  Gender:
                </label>
                <select
                  name="gender"
                  id=""
                  className="updateSelect"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="gender-update-container">
                <label htmlFor="" className="PatientProfileUpdate-label">
                  Age:
                </label>
                <input
                  type="number"
                  placeholder={age ? age : "fill your age"}
                  className="PatientProfileUpdate-input-input"
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
            </div>
            <div className="PatientProfileUpdate-input-container">
              <label htmlFor="" className="PatientProfileUpdate-label">
                Allegies:
              </label>
              <input
                type="text"
                placeholder={allergy ? allergy : "please input allegies"}
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
                placeholder={
                  blood ? blood : "please input your bloodType e.g. A+"
                }
                className="PatientProfileUpdate-input-input"
                onChange={(e) => setBloodType(e.target.value)}
              />
            </div>
          </div>
          <div className="PatientProfileUpdate-container3">
            <div className="PatientProfileUpdate-btn" onClick={handleUpdate}>
              {isLoading ? "Updating..." : "Update"}
            </div>
            <div className="PatientProfileUpdate-btn" onClick={handleUpdate1}>
              Update Image
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfileUpdate;
