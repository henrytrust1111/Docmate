import React from 'react'
import "./PatientPayment.css"
const PatientPayment = () => {
  return (
    <div className='PatientPaymentPage'>
      <div className="PatientPaymentPageWrapper">
          <div className="PatientPaymentLayer1">
            <div className="PatientPaymentContainer">
            <img src="/icons/cancelButton.svg" alt="cancelIcon" />
            </div>
          </div>
          <div className="PatientPaymentLayer2">
            <div className="PatientPaymentTitleContainer">
              <h2>Pay for appointment</h2>
            </div>
            <div className="PatientPaymentInputContainer">
             <div className="PatientPaymentInputContainerChild">
             <div className="PatientPaymentInputHolder">
                <label htmlFor="">Patient Name:</label>
                <input type="text" className='PatientPaymentInput' />
              </div>
              <div className="PatientPaymentInputHolder">
                <label htmlFor="">Phone Number:</label>
                <input type="text" className='PatientPaymentInput' />
              </div>
              <div className="PatientPaymentInputHolder">
                <label htmlFor="">Amount:</label>
                <input type="text" className='PatientPaymentInput' />
              </div>
              <div className="PatientPaymentInputHolder">
                <label htmlFor="">Payment Method:</label>
                <input type="text" className='PatientPaymentInput' />
              </div>
             </div>
            </div>
          </div>
          <div className="PatientPaymentLayer3">
            <div className="PatientPaymentbtn">Pay</div>
          </div>
      </div>
    </div>
  )
}

export default PatientPayment