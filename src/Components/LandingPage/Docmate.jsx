import React from 'react'
import './Docmate.css'
import image44 from '/Image4.png'
import image11 from '/Image1.png'
import image22 from '/Image2.png'
import image33 from '/Image3.png'

const Docmate = () => {
  return (
    <div className='docmatebody'>  
    <div className="docmatebodyleft">
   <div className="upperdocdiv">
    <p>Why Choose Docmate?</p>
    <h1>DocMate is dedicated o revolutionizing the way you manage your healthcare needs</h1>
   </div>

    <div className="lowerdocdiv">
    <article className='conbodydiv'>
      <section className='leftcondiv'> 
      <div className="borderdiv">1</div>
      <div className="strokediv">
      </div>
      </section>

        <div className="rightcondiv">
          <h1>Convenience</h1>
          <p>With DocMate, accessing quality healthcare has never been easier.DocMate allows you to book appointments, communicate with healthcare providers,  from the comfort of your own home</p>
        </div>

    </article>
    <article className='conbodydiv'>
      <section className='leftcondiv'> 
      <div className="borderdiv">2</div>
      <div className="strokediv"> </div>
      </section>

        <div className="rightcondiv">
          <h1>Comprehensive Care</h1>
          <p> From primary care to specialty services, DocMate offers a wide range of healthcare options to meet your diverse needs.</p>
        </div>
    </article>
    <article className='conbodydiv'>
      <section className='leftcondiv'> 
      <div className="borderdiv">3</div>
      <div className="strokediv"> </div>
      </section>

        <div className="rightcondiv">
          <h1>Personalized Experience</h1>
          <p>At DocMate, we understand that healthcare is not one-size-fits-all. That's why we prioritize personalized care and tailored solutions for every patient</p>


        </div>
    </article>
     </div>
      </div>


    <div className="docmatebodyright">
      <div className="upperimage">
        <div className="upperleftimage">
          <img src={image11} alt="" />
        </div>
        <div className="upperrightimage">
          <img src={image22}alt="" />
        </div>
      </div>
      
      <div className="belowimage">
        <div className="belowleftimage">
          <img src={image33} alt="" />
        </div>
        <div className="belowrightimage">
          <img src={image44} alt="" />
        </div>
      </div>

    </div>
    </div>
  )
}

export default Docmate
