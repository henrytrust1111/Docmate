import React from 'react'
import  './forgotpassword.css'
import image from"../../asset/icons/DocMate.png"
import image2 from "../../asset/icons/signup.png";

const ForgotPassword = () => {
  return (
    <div className="patientlogindiv">
    <div className="patientloginholder">
      <div className="leftpatientlogin">
        <div className="upperleftpatientlogin">
          <img src={image} alt=""  className="logoimage11"/>
        </div>
        <div className="lowerleftpatientregister"></div>
        <img src={image2} alt=""  className="image2"/>
      </div>
      <div className="rightpatentlogin">
        <h1>Set New Password</h1>
        <div className="theform">
         <input type="text" name=" New Password" placeholder="New Password" />   
                 </div>
                 <div className="theform">
         <input type="text" name=" Comfirm New Password" placeholder="Comfirm New Password" />
       </div>   
       <div className="btnnddiv">
     <button className="submitbtn" type="submit">
     Confirm Password
       </button>
       <div/>
      </div>
      </div>
    </div>
    </div>
  )
}

export default ForgotPassword
