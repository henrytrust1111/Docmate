import Footer from "../LandingPage/Footer"
import HomePageHeader from "../LandingPage/HomePageHeader"
import Contactfaq from "./Contactfaq"
import Contactus from "./Contactus"
import "./Contactuspage.css"


const Contactuspage =()=>{
    return(
        <>
           <HomePageHeader />
      <div className="ContactusMain">
        <div className="ContactusmainBody">
         <Contactus/>
        </div>
      </div>
      <div></div>
      <Contactfaq/>
  
      <Footer />
        
        
        </>
    )
}
export default Contactuspage