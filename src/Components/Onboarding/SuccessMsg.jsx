import React from 'react'
import './SuccessMsg.css'
import success from '../../asset/icons/approvesuccess.png'

const SuccessMsg = () => {
  return (
    <div className='approvesuccessbody'>
    <div className="approvedsuccess">
        <img src={success}alt=""  className='approvesuccess'/>
        <h1>Email Verified Successfully</h1>
   
   

    </div>
  </div>
  )
}

export default SuccessMsg
