import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PatientLogin.css";
import image from "../../asset/icons/DocMate.png";
import image2 from "../../asset/icons/signup.png";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import { IoEyeOutline } from 'react-icons/io5';
import { FaRegEyeSlash } from 'react-icons/fa';


const PatientLogin = () => {
  const [isLoading, setisLoading] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const nav = useNavigate();

  // const Dispatch = useDispatch()

  const HandleEmail = (e) => {
    setemail(e.target.value);
    console.log(email);
  };
  const HandlePassword = (e) => {
    setpassword(e.target.value);
    console.log(password);
  };
  const data = { email, password };
  const Url = "https://doc-mate.onrender.com/login";

  const HandleSubmit = async (e) => {

    // e.preventDefault()
    try {
      setisLoading(true)
      const response = await axios.post(Url, data)
      // console.log(response.data);
      console.log(response.data);
      console.log(response.data.token);
      const loggedInUserToken = response.data.token;
      const loggedInUser = response.data;
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
      localStorage.setItem("loggedInUserToken",loggedInUserToken);
      console.log(response);
      nav("/patient");

      Swal.fire({
        icon: 'success',
        title:'You have logged In  Successfully',
        text: loggedInUser.message
      })

  

    }
    catch (error) {
      const errorMessage = error.response ? error.response.data.message : "error occured"
      Swal.fire({
        icon: 'error',
        title: 'oops',
        text: errorMessage
      })
      console.log(errorMessage);
    }

    finally {
      setisLoading(false)

    }

  }

  const handlelogo = () => {
    nav("/")
  }

  const [show, setShow] = useState(false)
  const showEyeIcon = () => {
    setShow(!show)
  }

  return (
    <div className="patientlogindiv">
      <div className="patientloginholder">
        <div className="leftpatientlogin">
          <div className="upperleftpatientlogin" onClick={handlelogo}>
            <img src={image} alt="" className="logoimage11"/>
          </div>
          <div className="lowerleftpatientregister"></div>
          <img src={image2} alt="" className="image2" />
        </div>
        <div className="rightpatentlogin">
        <div className="rightSignUpLogo">
            <img src="/docmate3.png" alt="" onClick={handlelogo} />
          </div>
        {/* <div className="mobilelogo1">
          <img src={docimage2}alt="" />
        </div> */}
          <h1>Login</h1>

          <div className="theform">
            <input type="text" name=" Email" placeholder="Email"
              onChange={HandleEmail}
            />
          </div>
          <div className="theformholders">
            <div className="theformholdersWrapper">
              <input required type={!show ? "password" : "text"} name="Password" placeholder="Password"
                onChange={HandlePassword}

              />
              <div className="eye_icon" onClick={showEyeIcon}>
                {!show ? <FaRegEyeSlash /> : <IoEyeOutline />}
              </div>
            </div>

          </div>

          <div className="forgotpass">
            <h3>Forgot password <Link style={{ textDecoration: "none", color: "#00a6fb" }} to='/setnewpassword'></Link></h3>
          </div>
          <div className="btnnddiv">


            <button className="submitbttn" type="Login" onClick={HandleSubmit}>
              {isLoading === true ?
                (<div className='loader'>
                  <Oval
                    height={30}
                    width={30}
                    color="#fff"
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#030303"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                  />
                </div>)
                : <span>Login</span>}
            </button>
            <div />
            <h3>Already have an account ?
              <Link to='/patientRegister' style={{ textDecoration: "none", color: "#00a6fb" }}>Sign Up</Link>
            </h3>
          </div>
        </div>
      </div>
    </div>

  )
}
export default PatientLogin;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./PatientLogin.css";
// import image from "../../asset/icons/DocMate.png";
// import image2 from "../../asset/icons/signup.png";
// import { Link } from "react-router-dom";
// // import { useDispatch } from "react-redux";
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

//   // const Dispatch = useDispatch()

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
//       const response = await axios.post(Url, data)
//       console.log(response.data);
//       console.log(response.data.token);
//       const loggedInUserToken = response.data.token;
//       const loggedInUser = response.data;
//       localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
//       console.log(response);
//       nav("/patient");
//       Swal.fire({
//         icon: "success",
//         title: "You have logged in successfully",
//         text: success,
//       });
//     } catch (error) {
//       Swal.fire({
//         icon: "error",
//         title: "oops",
//         text: error.response.data.message,
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

//   const handleLogo = ()=>{
//     nav("/")
//   }

//   const handleForgetPass = ()=>{
//     nav("/setPassword")
//   }

//   return (
//     <div className="patientlogindiv">
//       <div className="patientloginholder">
//         <div className="leftpatientlogin">
//           <div className="upperleftpatientlogin" onClick={handleLogo}>
//             <img src={image} alt="" className="logoimage11" />
//           </div>
//           <div className="lowerleftpatientregister"></div>
//           <img src={image2} alt="" className="image2" />
//         </div>
//         <div className="rightpatentlogin">
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
//             <h3 onClick={handleForgetPass}>
//               Forgot password{" "}
//               <Link
//                 style={{ textDecoration: "none", color: "#00a6fb" }}
//                 to="/setnewpassword"
//               ></Link>
//             </h3>
//           </div>
//           <div className="btnnddiv">
//             {/* <button className="submitbtn" onClick={HandleSubmit}>
//          {isLoading === true ?
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
  
//                      : <span>Login</span>}
//            </button> */}

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

// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import "./PatientLogin.css";
// // import image from "../../asset/icons/DocMate.png";
// // import image2 from "../../asset/icons/signup.png";
// // import { Link } from "react-router-dom";
// // import { useDispatch } from "react-redux";
// // import { Oval } from "react-loader-spinner";
// // import axios from "axios";

// // const PatientLogin = () => {
// //   const [isLoading, setisLoading] = useState(false);
// //   const [email, setemail] = useState("");
// //   const [password, setpassword] = useState("");

// //   const nav = useNavigate();

// //   // const Dispatch = useDispatch()

// //   const HandleEmail = (e) => {
// //     setemail(e.target.value);
// //     console.log(email);
// //   };
// //   const HandlePassword = (e) => {
// //     setpassword(e.target.value);
// //     console.log(password);
// //   };
// //   const data = { email, password };
// //   const Url = "https://doc-mate.onrender.com/login";

// //   const HandleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       setisLoading(true);
// //       const response = await axios.post(Url, data);
// //       console.log(response.data);
// //       console.log(response.data.token);
// //       const loggedInUserToken = response.data.token;
// //       const loggedInUser = response.data;
// //       localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
// //       console.log(response);

// //       nav("/patient");
// //     } catch (error) {
// //       console.log(error);
// //     } finally {
// //       setisLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="patientlogindiv">
// //       <div className="patientloginholder">
// //         <div className="leftpatientlogin">
// //           <div className="upperleftpatientlogin">
// //             <img src={image} alt="" className="logoimage11" />
// //           </div>
// //           <div className="lowerleftpatientregister"></div>
// //           <img src={image2} alt="" className="image2" />
// //         </div>
// //         <div className="rightpatentlogin">
// //           <h1>Login</h1>

// //           <div className="theform">
// //             <input
// //               type="text"
// //               name=" Email"
// //               placeholder="Email"
// //               onChange={HandleEmail}
// //             />
// //           </div>
// //           <div className="theform">
// //             <input
// //               type="text"
// //               name=" Password"
// //               placeholder="Password"
// //               onChange={HandlePassword}
// //             />
// //           </div>

// //           <div className="forgotpass">
// //             <h3>
// //               Forgot password{" "}
// //               <Link
// //                 style={{ textDecoration: "none", color: "#00a6fb" }}
// //                 to="/setnewpassword"
// //               ></Link>
// //             </h3>
// //           </div>
// //           <div className="btnnddiv">
// //             <button className="submitbtn" onClick={HandleSubmit}>
// //               {isLoading === true ? (
// //                 <div className="loader">
// //                   <Oval
// //                     height={30}
// //                     width={30}
// //                     color="#fff"
// //                     visible={true}
// //                     ariaLabel="oval-loading"
// //                     secondaryColor="#030303"
// //                     strokeWidth={2}
// //                     strokeWidthSecondary={2}
// //                   />
// //                 </div>
// //               ) : (
// //                 <span>Login</span>
// //               )}
// //             </button>
// //             <div />
// //             <p>
// //               Already have an account ?
// //               <Link
// //                 to="/patientRegister"
// //                 style={{ textDecoration: "none", color: "#00a6fb" }}
// //               >
// //                 Sign Up
// //               </Link>
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PatientLogin;
