import React from 'react'
import './ServiceCard.css'
import image from '/image.png'
import image2 from '/upload-icon.png'
 import image3 from '/email.png'
 import image4 from '/upload.png'

const ServiceCard = () => {
  return (
    <div className='servicecardbody'>
      <div className="cardholderdiv">
        
        <div className="carddiv">
          <img src={image}alt="" />
          <h1>Appointment</h1>
          <p>Patients can book appointment <br /> from the comfort of their homes</p>
        </div> 

              <div className="carddiv2">
           <img src={image2}alt="" />
          <h1>Wait Time</h1>
          <p>We help you manage your time <br /> effectively</p> 
        </div>
       
         <section className="carddiv3">
           <img src={image3}alt="" />
          <h1>Notification</h1>
          <p>Get notified and keep track of your <br /> appointments</p> 
        </section> 

         <article className="carddiv4">
           <img src={image4}alt="" />
          <h1>Secure</h1>
          <p>All personal health information <br /> undergoes encryption and is Secure
</p> 
        </article> 
          </div>
     
     
     
    </div>
  )
}

export default ServiceCard
