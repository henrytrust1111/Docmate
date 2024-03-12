import React from 'react'
import "./PatientPayment.css"
import { ThemeContext } from '../context/Theme'
import { useContext } from 'react'
import { useLayoutEffect } from 'react'
const PatientPayment = () => {
  const {showSearch,setShowSearch} = useContext(ThemeContext)
  console.log(showSearch);
  useLayoutEffect(() => {
    const fetchData = ()=>{
      setShowSearch(false)
      
    }

    fetchData()
    console.log(showSearch);
  }, [])
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