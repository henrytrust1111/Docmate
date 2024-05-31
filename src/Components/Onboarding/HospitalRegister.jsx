import React, { useState } from "react";
import "./HospitalRegister.css";
import image1 from "../../asset/icons/DocMate.png";
import image2 from "../../asset/icons/signup.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import { Oval } from "react-loader-spinner";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const HospitalRegister = () => {
  const [hospitalName, setHospitalName] = useState("");
  const [hospitalAddress, setHospitalAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [isshow, setIsShow] = useState(false);
  const nav = useNavigate();
  
  const handleLogo = () => {
    nav("/");
  };

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const validateForm = () => {
    if (!hospitalName || !hospitalAddress || !phoneNumber || !email || !password || !confirmPassword) {
      Toastify({
        text: "All fields are required.",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "#f44336",
      }).showToast();
      return false;
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      Toastify({
        text: "Invalid email format.",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "#f44336",
      }).showToast();
      return false;
    }
    if (password !== confirmPassword) {
      Toastify({
        text: "Passwords do not match.",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "#f44336",
      }).showToast();
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    const data = { hospitalName, hospitalAddress, phoneNumber, email, password, confirmPassword };
    const Url = "https://doc-mate.onrender.com/signup";

    try {
      setisLoading(true);
      const response = await axios.post(Url, data);
      Toastify({
        text: response.data.message,
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "#4caf50",
      }).showToast();
      setTimeout(() => {
        nav("/hospitalLogin");
    }, 2000);
      
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : "An error occurred.";
      Toastify({
        text: errorMessage,
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "#f44336",
      }).showToast();
    } finally {
      setisLoading(false);
    }
  };

  const togglePasswordVisibility = (setter) => () => {
    setter(prev => !prev);
  };

  return (
    <div className="patientregisterdiv">
      <div className="patientregisterholder">
        <div className="leftpatientregister">
          <div className="upperleftpatientregister">
            <img src={image1} alt="" className="logoimage11" onClick={handleLogo} />
          </div>
          <div className="lowerleftpatientregister"></div>
          <img src={image2} alt="" className="image2" />
        </div>
        <div className="rightpatentrester">
          <div className="rightSignUpLogo">
            <img src="/docmate3.png" alt="" onClick={handleLogo} />
          </div>
          <div className="signupdiv">
            <h2>Signup Account for Hospital</h2>
          </div>
          <div className="theformholder">
            <input
              required
              type="text"
              name="HospitalName"
              placeholder="Hospital Name"
              onChange={handleChange(setHospitalName)}
            />
          </div>
          <div className="theformholder">
            <input
              required
              type="text"
              name="HospitalAddress"
              placeholder="Hospital Address"
              onChange={handleChange(setHospitalAddress)}
            />
          </div>
          <div className="theformholder">
            <input
              required
              type="text"
              name="PhoneNumber"
              placeholder="Phone Number"
              onChange={handleChange(setPhoneNumber)}
            />
          </div>
          <div className="theformholder">
            <input
              required
              type="email"
              name="Email"
              placeholder="Email"
              onChange={handleChange(setEmail)}
            />
          </div>
          <div className="theformholders">
            <div className="theformholdersWrapper">
              <input
                required
                type={show ? "text" : "password"}
                name="Password"
                placeholder="Password"
                onChange={handleChange(setPassword)}
              />
              <div className="eye_icon" onClick={togglePasswordVisibility(setShow)}>
                {show ? <IoEyeOutline /> : <FaRegEyeSlash />}
              </div>
            </div>
          </div>
          <div className="theformholders">
            <div className="theformholdersWrapper">
              <input
                required
                type={isshow ? "text" : "password"}
                name="ConfirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange(setConfirmpassword)}
              />
              <div className="eye_icon" onClick={togglePasswordVisibility(setIsShow)}>
                {isshow ? <IoEyeOutline /> : <FaRegEyeSlash />}
              </div>
            </div>
          </div>
          <div className="btnndiv">
            <button className="submitbttn" type="button" onClick={handleSubmit}>
              {isLoading ? (
                <div className="loader">
                  <Oval height={30} width={30} color="#fff" visible={true} ariaLabel="oval-loading" secondaryColor="#030303" strokeWidth={2} strokeWidthSecondary={2} />
                </div>
              ) : (
                <span>Register</span>
              )}
            </button>
            <p>
              Already have an account?{" "}
              <Link style={{ textDecoration: "none", color: "#00a6fb" }} to="/hospitalLogin">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalRegister;







// import React, { useState } from "react";
// import "./HospitalRegister.css";
// import image1 from "../../asset/icons/DocMate.png";
// import image2 from "../../asset/icons/signup.png";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { Oval } from "react-loader-spinner";
// import { FaRegEyeSlash } from "react-icons/fa";
// import { IoEyeOutline } from "react-icons/io5";

// const HospitalRegister = () => {
//   const [hospitalName, setHospitalName] = useState("");
//   const [hospitalAddress, setHospitalAddress] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmpassword] = useState("");
//   const [isLoading, setisLoading] = useState(false);
//   const nav = useNavigate();
//   const handleLogo = () => {
//     nav("/");
//   };

//   const handleHospitalName = (e) => {
//     const newHospitalName = e.target.value;
//     setHospitalName(newHospitalName);
//   };

//   const handleHospitalAddress = (e) => {
//     const newHospitalAddress = e.target.value;
//     setHospitalAddress(newHospitalAddress);
//   };

//   const handlephoneNumber = (e) => {
//     const newphoneNumber = e.target.value;
//     setPhoneNumber(newphoneNumber);
//   };

//   const handleemail = (e) => {
//     const newemail = e.target.value;
//     setEmail(newemail);
//   };

//   const handlepassword = (e) => {
//     const newpassword = e.target.value;
//     setPassword(newpassword);
//   };

//   const handleconfirmpassword = (e) => {
//     const newconfirmpassword = e.target.value;
//     setConfirmpassword(newconfirmpassword);
//   };

//   const data = {
//     hospitalName,
//     hospitalAddress,
//     phoneNumber,
//     email,
//     password,
//     confirmPassword,
//   };
//   const Url = "https://doc-mate.onrender.com/signup";

//   const HandleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setisLoading(true);
//       const response = await axios.post(Url, data);
//       console.log(response.data.message);
//       Swal.fire({
//         title: "Registration Successful",
//         text: response.data.message,
//         icon: "success",
//       });
//     } catch (error) {
//       const errorMessage = error.response
//         ? error.response.data.message
//         : "error occured";
//       Swal.fire({
//         icon: "error",
//         title: "oops",
//         text: errorMessage,
//       });
//       console.log(errorMessage);
//     } finally {
//       setisLoading(false);
//     }
//   };

//   const [show, setShow] = useState(false);
//   const showEyeIcon = () => {
//     setShow(!show);
//   };

//   const [isshow, setIsShow] = useState(false);
//   const showEyecon = () => {
//     setIsShow(!isshow);
//   };

//   return (
//     <div className="patientregisterdiv">
//       <div className="patientregisterholder">
//         <div className="leftpatientregister">
//           <div className="upperleftpatientregister">
//             <img
//               src={image1}
//               alt=""
//               className="logoimage11"
//               onClick={handleLogo}
//             />
//           </div>
//           <div className="lowerleftpatientregister"></div>
//           <img src={image2} alt="" className="image2" />
//         </div>
//         <div className="rightpatentrester">
//           <div className="rightSignUpLogo">
//             <img src="/docmate3.png" alt="" onClick={handleLogo} />
//           </div>
//           <div className="signupdiv">
//             <h2>Signup Account for Hospital</h2>
//           </div>

//           <div className="theformholder">
//             <input
//               required
//               type="text"
//               name=" HospitalName"
//               placeholder="HospitalName"
//               onChange={handleHospitalName}
//             />
//           </div>

//           <div className="theformholder">
//             <input
//               required
//               type="text"
//               name=" HospitalAddress"
//               placeholder="HospitalAddress"
//               onChange={handleHospitalAddress}
//             />
//           </div>

//           <div className="theformholder">
//             <input
//               required
//               type="text"
//               name=" Phonenumber"
//               placeholder="Phonenumber"
//               onChange={handlephoneNumber}
//             />
//           </div>

//           <div className="theformholder">
//             <input
//               aria-required
//               type="text"
//               name=" Email"
//               placeholder=" Email"
//               onChange={handleemail}
//             />
//           </div>

//           <div className="theformholders">
//             <div className="theformholdersWrapper">
//               <input
//                 required
//                 type={!show ? "password" : "text"}
//                 name="Password"
//                 placeholder="Password"
//                 onChange={handlepassword}
//               />
//               <div className="eye_icon" onClick={showEyeIcon}>
//                 {!show ? <FaRegEyeSlash /> : <IoEyeOutline />}
//               </div>
//             </div>
//           </div>

//           <div className="theformholders">
//             <div className="theformholdersWrapper">
//               <input
//                 required
//                 type={!show ? "comfirmpassword" : "text"}
//                 name="ConfirmPassword"
//                 placeholder="ConfirmPassword"
//                 onChange={handleconfirmpassword}
//               />
//               <div className="eye_icon" onClick={showEyecon}>
//                 {!isshow ? <FaRegEyeSlash /> : <IoEyeOutline />}
//               </div>
//             </div>
//           </div>

//           <div className="btnndiv">
//             <button
//               className="submitbttn"
//               type="Sign up"
//               onClick={HandleSubmit}
//             >
//               {isLoading === true ? (
//                 <div className="loader">
//                   <Oval
//                     height={30}
//                     width={30}
//                     color="#fff"
//                     visible={true}
//                     ariaLabel="oval-loading"
//                     secondaryColor="#030303"
//                     strokeWidth={2}
//                     strokeWidthSecondary={2}
//                   />
//                 </div>
//               ) : (
//                 <span>Register</span>
//               )}
//             </button>
//             <p>
//               Already have an account ?{" "}
//               <Link
//                 style={{ textDecoration: "none", color: "#00a6fb" }}
//                 to="/hospitalLogin"
//               >
//                 Login
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HospitalRegister;
