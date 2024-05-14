import Footer from "../LandingPage/Footer"
import HomePageHeader from "../LandingPage/HomePageHeader"
import "./Faqlandpage.css"
import Faqpage from "./Faqpage"


const Faqlandpage =()=>{
    return(
        <>
           <HomePageHeader />
      <div className="FaqlandMain">
        <div className="FaqlandmainBody">
         <Faqpage/>
        </div>
      </div>
      
      
      <div></div>
      <Footer />
      
  
        
        
        </>
    )
}
export default Faqlandpage