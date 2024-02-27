import React from 'react'
import Header from './header'
import Hero from './Hero'
import Services from './Services'
import ServiceCard from './ServiceCard'
import Docmate from './Docmate'
import Testimonial from './Testimonial'
import Pricing from './Pricing'
import Health from './Health'
import Footer from './Footer'


const Body = () => {
  return (
    <div>
         <Header/>
      <Hero/>
      <Services/>
      <ServiceCard/>
       <Docmate/>
     <Testimonial/> 
    <Pricing/> 
     <Health/>  
    <Footer/>  
    </div>
  )
}

export default Body
