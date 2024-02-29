import React, { useState } from "react";
import "./HospitalRegister.css";
import image1 from '../../asset/icons/DocMate.png'
import image2 from "../../asset/icons/signup.png"
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
//  import Swal from "sweetalert2";
import { Oval } from "react-loader-spinner";



const HospitalRegister = () => {

  const [hospitalName, setHospitalName] = useState('')
  const [hospitalAddress, setHospitalAddress] = useState('')
  const[phoneNumber,setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmpassword] = useState('')
  const [isLoading, setisLoading] = useState(false)
  const [profilePicture,setProfilePicture] = useState ('')

  const handleHospitalName = (e) => {
    const newHospitalName = e.target.value
    setHospitalName(newHospitalName)
  }

  const handleHospitalAddress = (e) => {
    const newHospitalAddress = e.target.value
    setHospitalAddress(newHospitalAddress)
  }

//   const handleimage =(e) =>{
//     const newimage = e.target.files[0]
//     const url=URL.createObjectURL(newimage)
//     setProfilePicture(url)
// console.log(profilePicture);
//   }


  const  handlephoneNumber= (e) => {
    const newphoneNumber = e.target.value
    setPhoneNumber(newphoneNumber)
  }



  const handleemail = (e) => {
    const newemail = e.target.value
    setEmail(newemail)
  }

  const handlepassword = (e) => {
    const newpassword = e.target.value
    setPassword(newpassword)
  }

  const handleconfirmpassword = (e) => {
    const newconfirmpassword = e.target.value
    setConfirmpassword(newconfirmpassword)
  }

  const data = { hospitalName, hospitalAddress,phoneNumber, email, password, confirmPassword, }
  const Url = 'https://doc-mate.onrender.com/signup'

  const HandleSubmit = async (e) => {

    e.preventDefault()
    try {
      setisLoading(true)
      const response = await axios.post(Url, data)
      // console.log(response.data);

      console.log(response)
      console.log( response.error);
    }
    catch (error) {
      console.log(error);
     
    }
    finally {
      setisLoading(false)

    }

  }


  return (
    <div className="patientregisterdiv">
      <div className="patientregisterholder">
        <div className="leftpatientregister">
          <div className="upperleftpatientregister">
            <img src={image1} alt="" className="logoimage11" />
          </div>
          <div className="lowerleftpatientregister"></div>
          <img src={image2} alt="" className="image2" />
        </div>
        <div className="rightpatentrester">
          <div className="signupdiv">
            <h2>Signup For Account</h2>
          </div>

          <div className="theformholder">
            <input type="text" name=" HospitalName" placeholder="HospitalName"
              onChange={handleHospitalName}
            />
          </div>

          <div className="theformholder">
            <input type="text" name=" HospitalAddress" placeholder="HospitalAddress"
              onChange={handleHospitalAddress}
            />
          </div>
          {/* <div className="theformholder" id="theFormholderInputContainer">
            <input type="file" name=" HospitalAddress" placeholder="HospitalAddress" id="theFormholderInput"
               onChange={handleimage}
            />
          </div> */}

          <div className="theformholder">
            <input type="text" name=" Phonenumber" placeholder="Phonenumber"
              onChange={handlephoneNumber}
            />
          </div>

          <div className="theformholder">
            <input
              type="text"
              name=" Email"
              placeholder=" Email"
              onChange={handleemail}
            />
          </div>

          <div className="theformholder">
            <input type="text" name="Password" placeholder="Password"
              onChange={handlepassword}
            />
          </div>

          <div className="theformholder">
            <input
              type="text"
              name="ConfirmPassword"
              placeholder="ConfirmPassword"
              onChange={handleconfirmpassword}
            />
          </div>

          <div className="btnndiv">
            <button className="submitbttn" type="Sign up" onClick={HandleSubmit}>
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
                : <span>Register</span>}
            </button>
            <p>Already have an account ? <Link style={{ textDecoration: "none", color: "#00a6fb" }} to='/patientlogin'>Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default HospitalRegister;
