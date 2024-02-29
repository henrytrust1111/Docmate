import React from 'react'
import './PasswordResetSuccess.css'

const PasswordResetSuccess = () => {
  return (
    <div className='resetsuccessbody'>
    <div className="resetsuccess">
        <h1>Password reset successful!</h1>
        <h2>You can now use your new password <br />
         to login to your account.</h2>
     <div className="emaillogindiv">
        <button className='loginbtnn'>Login</button>
     </div>
   

    </div>
  </div>
  )
}

export default PasswordResetSuccess
