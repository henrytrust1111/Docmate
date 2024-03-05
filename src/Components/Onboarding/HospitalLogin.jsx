import React, { useState } from "react";
import "./PatientLogin.css";
import image from "../../asset/icons/DocMate.png";
import image2 from "../../asset/icons/signup.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import Swal from "sweetalert2";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";

const PatientLogin = () => {
  const [isLoading, setisLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const HandleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const HandlePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };
  const data = { email, password };
  const Url = "https://doc-mate.onrender.com/adminlogin";

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      setisLoading(true);
      const response = await axios.post(Url, data);
      console.log(response.data);
      console.log(response.data.message);
      console.log(response.data.token);
      const loggedInHospitalToken = response.data.token;
      const loggedInHospital = response.data;
      localStorage.setItem(
        "loggedInHospital",
        JSON.stringify(loggedInHospital)
      );
      console.log(response.data.message);
      Swal.fire({
        title: "Registration Successful",
        text: response.data.message,
        icon: "success",
      });
      nav("/admin");
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

  return (
    <div className="patientlogindiv">
      <div className="patientloginholder">
        <div className="leftpatientlogin">
          <div className="upperleftpatientlogin">
            <img src={image} alt="" className="logoimage11" />
          </div>
          <div className="lowerleftpatientregister"></div>
          <img src={image2} alt="" className="image2" />
        </div>
        <div className="rightpatentlogin">
          <h1>Hospital Login</h1>

          <div className="theform">
            <input
              type="text"
              name=" Email"
              placeholder="Email"
              onChange={HandleEmail}
            />
          </div>

          {/* <div className="theform">
                     <div className="theformWrapper">
                    <input required type={!show ? "password" : "text"} name="Password" placeholder="Password"
                  onChange={HandlePassword}
                  />
            <div className="eye_icon" onClick={showEyeIcon}>
            {!show ?<FaRegEyeSlash/> : <IoEyeOutline/>  }
            </div>
            </div>
            
          </div>  */}

          <div className="theformholders">
            <div className="theformholdersWrapper">
              <input
                required
                type={!show ? "password" : "text"}
                name="Password"
                placeholder="Password"
                onChange={HandlePassword}
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
            <button className="submitbtn" onClick={HandleSubmit}>
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
                <span>login</span>
              )}
            </button>
            <div />
            <h3>
              Already have an account ?
              <Link
                to="/hospitalRegister"
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

// import React,{useState,} from 'react'
// import './PatientLogin.css'
// import image from"../../asset/icons/DocMate.png"
// import image2 from "../../asset/icons/signup.png";
// import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux'
// import { Oval } from 'react-loader-spinner'
// import axios from 'axios';

// const PatientLogin = () => {

//   const [isLoading, setisLoading] = useState(false)
//   const [email, setemail] = useState('')
//   const [password, setpassword] = useState('')

//   // const Navigate = useNavigate()

// // const Dispatch = useDispatch()

// const HandleEmail = (e)=>{
//     setemail(e.target.value)
//     console.log(email);
// }
// const HandlePassword = (e)=>{
//     setpassword(e.target.value);
//     console.log(password);
// }
// const data ={email,password}
// const Url ='https://doc-mate.onrender.com/login'

// const HandleSubmit = async (e)=>{

//   e.preventDefault()
//   try{
//     setisLoading(true)
//     const response = await axios.post(Url,data)
//     // console.log(response.data);

//     console.log( message)

//   }
//   catch(error){
//     console.log(error);
//   }
//   finally{
//     setisLoading(false)

//   }

// }

//   return (
// <div className="patientlogindiv">
//         <div className="patientloginholder">
//           <div className="leftpatientlogin">
//             <div className="upperleftpatientlogin">
//               <img src={image} alt=""  className="logoimage11"/>
//             </div>
//             <div className="lowerleftpatientregister"></div>
//             <img src={image2} alt=""  className="image2"/>
//           </div>
//           <div className="rightpatentlogin">
//             <h1>Login</h1>

//             <div className="theform">
//              <input type="text" name=" Email" placeholder="Email"
//              onChange={HandleEmail}
//              />
//                      </div>
//                      <div className="theform">
//              <input type="text" name=" Password" placeholder="Password"
//              onChange={ HandlePassword}
//              />
//            </div>

//            <div className="forgotpass">
//             <h3>Forgot password <Link style={{textDecoration:"none",color:"#00a6fb"}} to='/setnewpassword'></Link></h3>
//             </div>
//            <div className="btnnddiv">
//          <button className="submitbtn" onClick={HandleSubmit}>
//            Login    {isLoading === true ?
//             (<div className='loader'>
//             <Oval
//                 height={30}
//                 width={30}
//                 color="#fff"
//                 visible={true}
//                 ariaLabel='oval-loading'
//                 secondaryColor="#030303"
//                 strokeWidth={2}
//                 strokeWidthSecondary={2}
//               />
//             </div>)
//              : <span></span>}
//            </button>
//            <div/>
//          <h3>Already have an account ?
//          <Link to='/patientRegister' style={{textDecoration:"none",color:"#00a6fb"}}>Sign Up</Link>
//          </h3>
//           </div>
//           </div>
//         </div>
//         </div>

//   )
// }

// export default PatientLogin
