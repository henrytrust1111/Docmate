import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PatientLogin.css";
import image from "../../asset/icons/DocMate.png";
import image2 from "../../asset/icons/signup.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Oval } from "react-loader-spinner";
import axios from "axios";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";

const PatientLogin = () => {
  const [isLoading, setisLoading] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [show, setShow] = useState(false);

  const nav = useNavigate();
  const Url = "https://doc-mate.onrender.com/login";

  const HandleEmail = (e) => {
    setemail(e.target.value);
  };

  const HandlePassword = (e) => {
    setpassword(e.target.value);
  };

  const validateForm = () => {
    if (!email) {
      toast.error("Email is required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Email address is invalid");
      return false;
    }
    if (!password) {
      toast.error("Password is required");
      return false;
    }
    return true;
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setisLoading(true);
    try {
      const response = await axios.post(Url, { email, password });
      const loggedInUserToken = response.data.token;
      const loggedInUser = response.data;
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
      localStorage.setItem("loggedInUserToken", loggedInUserToken);
        toast.success("You have logged in successfully");
      setTimeout(() => {
        nav("/patient");
    }, 2000);
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.message
        : "An error occurred";
      toast.error(errorMessage);
    } finally {
      setisLoading(false);
    }
  };

  const handlelogo = () => {
    nav("/");
  };

  const showEyeIcon = () => {
    setShow(!show);
  };

  return (
    <div className="patientlogindiv">
      <ToastContainer />
      <div className="patientloginholder">
        <div className="leftpatientlogin">
          <div className="upperleftpatientlogin" onClick={handlelogo}>
            <img src={image} alt="DocMate Logo" className="logoimage11" />
          </div>
          <div className="lowerleftpatientregister"></div>
          <img src={image2} alt="Signup" className="image2" />
        </div>
        <div className="rightpatentlogin">
          <div className="rightSignUpLogo">
            <img src="/docmate3.png" alt="DocMate Logo" onClick={handlelogo} />
          </div>
          <h1>Login</h1>
          <div className="theform">
            <input
              type="text"
              name="Email"
              placeholder="Email"
              onChange={HandleEmail}
              value={email}
            />
          </div>
          <div className="theformholders">
            <div className="theformholdersWrapper">
              <input
                required
                type={!show ? "password" : "text"}
                name="Password"
                placeholder="Password"
                onChange={HandlePassword}
                value={password}
              />
              <div className="eye_icon" onClick={showEyeIcon}>
                {!show ? <FaRegEyeSlash /> : <IoEyeOutline />}
              </div>
            </div>
          </div>
          <div className="forgotpass">
            <h3>
              Forgot password{" "}
              <Link
                style={{ textDecoration: "none", color: "#00a6fb" }}
                to="/setnewpassword"
              ></Link>
            </h3>
          </div>
          <div className="btnnddiv">
            <button className="submitbttn" type="Login" onClick={HandleSubmit}>
              {isLoading ? (
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
                <span>Login</span>
              )}
            </button>
            <div />
            <h3>
              Don't have an account?{" "}
              <Link
                to="/patientRegister"
                style={{ textDecoration: "none", color: "#00a6fb" }}
              >
                Sign Up
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientLogin;




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./PatientLogin.css";
// import image from "../../asset/icons/DocMate.png";
// import image2 from "../../asset/icons/signup.png";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
// import { Oval } from "react-loader-spinner";
// import axios from "axios";
// import { IoEyeOutline } from "react-icons/io5";
// import { FaRegEyeSlash } from "react-icons/fa";

// const PatientLogin = () => {
//   const [isLoading, setisLoading] = useState(false);
//   const [email, setemail] = useState("");
//   const [password, setpassword] = useState("");

//   const nav = useNavigate();

//   const HandleEmail = (e) => {
//     setemail(e.target.value);
//     console.log(email);
//   };

//   const HandlePassword = (e) => {
//     setpassword(e.target.value);
//     console.log(password);
//   };
//   const data = { email, password };
//   const Url = "https://doc-mate.onrender.com/login";

//   const HandleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       setisLoading(true);
//       const response = await axios.post(Url, data);
//       // console.log(response.data);
//       console.log(response);
//       console.log(response.data.token);
//       const loggedInUserToken = response.data.token;
//       const loggedInUser = response.data;
//       localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
//       localStorage.setItem("loggedInUserToken", loggedInUserToken);
//       console.log(response);
//       nav("/patient");

//       Swal.fire({
//         icon: "success",
//         title: "You have logged In  Successfully",
//         text: loggedInUser.message,
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

//   const handlelogo = () => {
//     nav("/");
//   };

//   const [show, setShow] = useState(false);
//   const showEyeIcon = () => {
//     setShow(!show);
//   };

//   return (
//     <div className="patientlogindiv">
//       <div className="patientloginholder">
//         <div className="leftpatientlogin">
//           <div className="upperleftpatientlogin" onClick={handlelogo}>
//             <img src={image} alt="" className="logoimage11" />
//           </div>
//           <div className="lowerleftpatientregister"></div>
//           <img src={image2} alt="" className="image2" />
//         </div>
//         <div className="rightpatentlogin">
//           <div className="rightSignUpLogo">
//             <img src="/docmate3.png" alt="" onClick={handlelogo} />
//           </div>
//           {/* <div className="mobilelogo1">
//           <img src={docimage2}alt="" />
//         </div> */}
//           <h1>Login</h1>

//           <div className="theform">
//             <input
//               type="text"
//               name=" Email"
//               placeholder="Email"
//               onChange={HandleEmail}
//             />
//           </div>
//           <div className="theformholders">
//             <div className="theformholdersWrapper">
//               <input
//                 required
//                 type={!show ? "password" : "text"}
//                 name="Password"
//                 placeholder="Password"
//                 onChange={HandlePassword}
//               />
//               <div className="eye_icon" onClick={showEyeIcon}>
//                 {!show ? <FaRegEyeSlash /> : <IoEyeOutline />}
//               </div>
//             </div>
//           </div>

//           <div className="forgotpass">
//             <h3>
//               Forgot password{" "}
//               <Link
//                 style={{ textDecoration: "none", color: "#00a6fb" }}
//                 to="/setnewpassword"
//               ></Link>
//             </h3>
//           </div>
//           <div className="btnnddiv">
//             <button className="submitbttn" type="Login" onClick={HandleSubmit}>
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
//                 <span>Login</span>
//               )}
//             </button>
//             <div />
//             <h3>
//               Already have an account ?
//               <Link
//                 to="/patientRegister"
//                 style={{ textDecoration: "none", color: "#00a6fb" }}
//               >
//                 Sign Up
//               </Link>
//             </h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default PatientLogin;
