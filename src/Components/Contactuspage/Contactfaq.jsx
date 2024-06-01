import "./Contactfaq.css";
import { useNavigate } from "react-router-dom";


const Contactfaq =()=>{

    
    const Nav = useNavigate();



      return(
 <><div className="ContfaqContainer">
    <div className="Contactfaqmaincon">
        <div className="Contfaqtextcon">
            <h3>Frequently Asked Questions</h3>
        </div>
        <div className="Contfaqbtn">
            <button onClick={()=> Nav('/faq')}>CLICK HERE</button>
        </div>
    </div>
 </div>


        
        
 </>
)
};
export default Contactfaq