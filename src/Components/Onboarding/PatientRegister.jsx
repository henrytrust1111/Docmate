import React, { useState } from "react";
import "./PatientRegister.css";
import image from "../../asset/icons/DocMate.png";
import image2 from "../../asset/icons/signup.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { Oval } from "react-loader-spinner";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const PatientRegister = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const nav = useNavigate();

  const handlefirstName = (e) => {
    const newfirstName = e.target.value;
    setFirstName(newfirstName);
  };

  const handlastName = (e) => {
    const newlastName = e.target.value;
    setLastName(newlastName);
  };

  const handleemail = (e) => {
    const newemail = e.target.value;
    setEmail(newemail);
  };

  const handlepassword = (e) => {
    const newpassword = e.target.value;
    setPassword(newpassword);
  };

  const handleconfirmpassword = (e) => {
    const newconfirmpassword = e.target.value;
    setConfirmpassword(newconfirmpassword);
  };

  const data = { firstName, lastName, email, password, confirmPassword };
  const Url = "https://doc-mate.onrender.com/register";

  const HandleSubmit = async (e) => {
    e.preventDefault();

    try {
      setisLoading(true);
      const response = await axios.post(Url, data);
      console.log(response.data.message);
      Swal.fire({
        title: "Registration Successful",
        text: response.data.message,
        icon: "success",
      });
      nav("/patientLogin");
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.message
        : "error occured";
      Swal.fire({
        icon: "error",
        title: "oops",
        text: errorMessage,
      });
      console.log(errorMessage);
    } finally {
      setisLoading(false);
    }
  };

  const [show, setShow] = useState(false);
  const showEyeIcon = () => {
    setShow(!show);
  };

  const [isshow, setIsShow] = useState(false);
  const showEyecon = () => {
    setIsShow(!isshow);
  };

  const handleIcon = () => {
    nav("/");
  };

  return (
    <div className="patientregisterdiv">
      <div className="patientregisterholder">
        <div className="leftpatientregister">
          <div className="upperleftpatientregister" onClick={handleIcon}>
            <img src={image} alt="" className="logoimage11" />
          </div>
          <div className="lowerleftpatientregister"></div>
          <img src={image2} alt="" className="image2" />
        </div>
        <div className="rightpatentrester">
          <div className="rightSignUpLogo">
            <img src="/docmate3.png" alt="" onClick={handleIcon} />
          </div>
          <div className="signupdiv">
            <h2>Patient Signup</h2>
          </div>

          <div className="theformholder">
            <input
              required
              type="text"
              name=" First Name"
              placeholder="First Name"
              onChange={handlefirstName}
            />
          </div>

          <div className="theformholder">
            <input
              required
              type="text"
              name=" Last Name"
              placeholder="LastName"
              onChange={handlastName}
            />
          </div>

          <div className="theformholder">
            <input
              required
              type="text"
              name=" Email"
              placeholder=" Email"
              onChange={handleemail}
            />
          </div>

          <div className="theformholders">
            <div className="theformholdersWrapper">
              <input
                required
                type={!show ? "password" : "text"}
                name="Password"
                placeholder="Password"
                onChange={handlepassword}
              />
              <div className="eye_icon" onClick={showEyeIcon}>
                {!show ? <FaRegEyeSlash /> : <IoEyeOutline />}
              </div>
            </div>
          </div>

          <div className="theformholders">
            <div className="theformholdersWrapper">
              <input
                required
                type={!isshow ? "password" : "text"}
                name="Password"
                placeholder="ConfirmPassword"
                onChange={handleconfirmpassword}
              />
              <div className="eye_icon" onClick={showEyecon}>
                {!isshow ? <FaRegEyeSlash /> : <IoEyeOutline />}
              </div>
            </div>
          </div>

          <div className="btnndiv">
            <button
              className="submitbttn"
              type="Sign up"
              onClick={HandleSubmit}
            >
              {isLoading === true ? (
                <div className="loader">
                  <Oval
                    height={30}
                    width={30}
                    color="#fff"
                    visible={true}
                    ariaLabel="oval-loading"
                    secondaryColor="#030303"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                  />
                </div>
              ) : (
                <span>Register</span>
              )}
            </button>
            <p>
              Already have an account ?{" "}
              <Link
                style={{ textDecoration: "none", color: "#00a6fb" }}
                to="/patientlogin"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientRegister;

// import React, { useState } from "react";
// import "./PatientRegister.css";
// import image from '../../asset/icons/DocMate.png'
// import image2 from "../../asset/icons/signup.png"
// import { Link, useNavigate } from "react-router-dom";
// import axios from 'axios'
// //  import Swal from "sweetalert2";
// import { Oval } from "react-loader-spinner";

// const PatientRegister = () => {

//   const [firstName, setFirstName] = useState('')
//   const [lastName, setLastName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [confirmPassword, setConfirmpassword] = useState('')
//   const [isLoading, setisLoading] = useState(false)

//   const handlefirstName = (e) => {
//     const newfirstName = e.target.value
//     setFirstName(newfirstName)
//   }

//   const handlastName = (e) => {
//     const newlastName = e.target.value
//     setLastName(newlastName)
//   }

//   const handleemail = (e) => {
//     const newemail = e.target.value
//     setEmail(newemail)
//   }

//   const handlepassword = (e) => {
//     const newpassword = e.target.value
//     setPassword(newpassword)
//   }

//   const handleconfirmpassword = (e) => {
//     const newconfirmpassword = e.target.value
//     setConfirmpassword(newconfirmpassword)
//   }

//   const data = { firstName, lastName, email, password, confirmPassword }
//   const Url = 'https://doc-mate.onrender.com/register'

//   const HandleSubmit = async (e) => {

//     e.preventDefault()
//     try {
//       setisLoading(true)
//       const response = await axios.post(Url, data)
//       // console.log(response.data);

//       console.log(response)

//     }
//     catch (error) {
//       console.log(error);
//     }
//     finally {
//       setisLoading(false)

//     }

//   }

//   return (
//     <div className="patientregisterdiv">
//       <div className="patientregisterholder">
//         <div className="leftpatientregister">
//           <div className="upperleftpatientregister">
//             <img src={image} alt="" className="logoimage11" />
//           </div>
//           <div className="lowerleftpatientregister"></div>
//           <img src={image2} alt="" className="image2" />
//         </div>
//         <div className="rightpatentrester">
//           <div className="signupdiv">
//             <h2>Signup For Account</h2>
//           </div>

//           <div className="theformholder">
//             <input type="text" name=" First Name" placeholder="First Name"
//               onChange={handlefirstName}
//             />
//           </div>

//           <div className="theformholder">
//             <input type="text" name=" Last Name" placeholder="LastName"
//               onChange={handlastName}
//             />
//           </div>

//           <div className="theformholder">
//             <input
//               type="text"
//               name=" Email"
//               placeholder=" Email"
//               onChange={handleemail}
//             />
//           </div>

//           <div className="theformholder">
//             <input type="text" name="Password" placeholder="Password"
//               onChange={handlepassword}
//             />
//           </div>

//           <div className="theformholder">
//             <input
//               type="text"
//               name="ConfirmPassword"
//               placeholder="ConfirmPassword"
//               onChange={handleconfirmpassword}
//             />
//           </div>

//           <div className="btnndiv">
//             <button className="submitbttn" type="Sign up" onClick={HandleSubmit}>
//               {isLoading === true ?
//                 (<div className='loader'>
//                   <Oval
//                     height={30}
//                     width={30}
//                     color="#fff"
//                     visible={true}
//                     ariaLabel='oval-loading'
//                     secondaryColor="#030303"
//                     strokeWidth={2}
//                     strokeWidthSecondary={2}
//                   />
//                 </div>)
//                 : <span>Register</span>}
//             </button>
//             <p>Already have an account ? <Link style={{ textDecoration: "none", color: "#00a6fb" }} to='/patientlogin'>Login</Link></p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PatientRegister;
