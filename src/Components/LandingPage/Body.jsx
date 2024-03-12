import React from 'react'
import Hero from './Hero'
import Services from './Services'
import ServiceCard from './ServiceCard'
import Docmate from './Docmate'
import Testimonial from './Testimonial'
import Pricing from './Pricing'
import Health from './Health'
import Footer from './Footer'
import HomePageHeader from './HomePageHeader'
import "./Body.css"
import { ThemeContext } from '../context/Theme'
import { useContext } from 'react'
import { useLayoutEffect } from 'react'


const Body = () => {
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
    <div className='bodyHolder'>
       <HomePageHeader />
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
