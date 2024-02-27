import React from 'react'
import './Pricing.css'
import image from '/check.png'

const Pricing = () => {
  return (
    <div className='pricingdiv'>
    <article className='upperpricingdiv'>
      <div className='nextupperpricingdiv'>
        <section className='pricingtextdiv'>
        <h2>PRICING PLAN</h2>
        <h1>Choose Your Pricing Plan</h1>
        <p>OneTime</p>
      </section>
      </div>
      <section className='allcardsdiv'>
      <div className="pricingcarddiv">
        <article className='moneydiv'>
          <h1>#1,000</h1>
          <p>Basic plan</p>
        </article>
        <section className='linedivv'></section>

        <div className="richdiv">
          <div className="imagetext">
            <section className='imagetextimg'>    <img src={image} alt="" /></section>
            <p>Rich landing pages</p>
          </div>
          <div className="imagetext">
            <section className='imagetextimg'>    <img src={image} alt="" /></section>
            <p>100+ Unique Components</p>
          </div>
          <div className="imagetext">
            <section className='imagetextimg'>    <img src={image} alt="" /></section>
            <p>Speedy build tooling</p>
          </div>
          <div className="imagetext">
            <section className='imagetextimg'>    <img src={image} alt="" /></section>
            <p>6 months free support</p>
          </div>
          <div className="imagetext">
            <section className='imagetextimg'>    <img src={image} alt="" /></section>
            <p>Guaranteed 100% uptime</p>
          </div>
          
        </div>

        <section className=' purchasediv'>
          <button className='purchasebtn'>Purchase Your Plan</button>
        </section>
      </div>
      <div className="pricingcarddiv">
        <article className='moneydiv'>
          <h1>#3,000</h1>
          <p>Standard plan</p>
        </article>
        <section className='linedivv'></section>

        <div className="richdiv">
          <div className="imagetext">
            <section className='imagetextimg'>    <img src={image} alt="" /></section>
            <p>Rich landing pages</p>
          </div>
          <div className="imagetext">
            <section className='imagetextimg'>    <img src={image} alt="" /></section>
            <p>100+ Unique Components</p>
          </div>
          <div className="imagetext">
            <section className='imagetextimg'>    <img src={image} alt="" /></section>
            <p>Speedy build tooling</p>
          </div>
          <div className="imagetext">
            <section className='imagetextimg'>    <img src={image} alt="" /></section>
            <p>6 months free support</p>
          </div>
          <div className="imagetext">
            <section className='imagetextimg'>    <img src={image} alt="" /></section>
            <p>Guaranteed 100% uptime</p>
          </div>
          
        </div>

        <section className=' purchasediv'>
          <button className='purchasebtn'>Purchase Your Plan</button>
        </section>
      </div>
      <div className="pricingcarddiv">
        <article className='moneydiv'>
          <h1>#5,000</h1>
          <p>Premium plan</p>
        </article>
        <section className='linedivv'></section>

        <div className="richdiv">
          <div className="imagetext">
            <section className='imagetextimg'>    <img src={image} alt="" /></section>
            <p>Rich landing pages</p>
          </div>
          <div className="imagetext">
            <section className='imagetextimg'>    <img src={image} alt="" /></section>
            <p>100+ Unique Components</p>
          </div>
          <div className="imagetext">
            <section className='imagetextimg'>    <img src={image} alt="" /></section>
            <p>Speedy build tooling</p>
          </div>
          <div className="imagetext">
            <section className='imagetextimg'>    <img src={image} alt="" /></section>
            <p>6 months free support</p>
          </div>
          <div className="imagetext">
            <section className='imagetextimg'>    <img src={image} alt="" /></section>
            <p>Guaranteed 100% uptime</p>
          </div>
          
        </div>

        <section className=' purchasediv'>
          <button className='purchasebtn'>Purchase Your Plan</button>
        </section>
      </div>
      </section>
      
  
    </article>
    </div>
  )
}

export default Pricing
