import React from 'react'
import './Footer.css'
import footerlogo from '../../../public/DocMate1232.png'
import locationimg from '../../../public/Vector.png'
import callimg from '../../../public/call.png'
import emailimg from '../../../public/emailicon.png'
import facebookimg1 from '../../../public/facebook.png'
import twitterimg from '../../../public/twitter.png'
import inimg from '../../../public/in.png'

const Footer = () => {
  return (
    <div className='footerbody'>
      <div className="footerhold">
      <div className="firstfooterdiv">
        <div className="footerlogo"><img src={footerlogo} alt="" /></div>
       <div className="footertext">
        <div className="footercontact">
        <div className="footertextimg"><img src={locationimg} alt="" /></div>
        <div className="footerimagetext"><h1>24 Road Carat24, Festac Town, Lagos</h1></div>
        </div>

        <div className="footercontact">
        <div className="footertextimg"><img src={callimg} alt="" /></div>
        <div className="footerimagetext"><h1>0000000000</h1></div>

        </div>
        <div className="footercontact">
        <div className="footertextimg"><img src={emailimg} alt="" /></div>
        <div className="footerimagetext"><h1>thecurveDocMate@gmail.com</h1></div>
        </div>
       
       </div>
      </div>
      <div className="secondfooterdiv">
        <div className="quicklink"><h1>Quick Links</h1></div>
        <div className="quicklinktext">
          <h2>Home</h2>
          <h2>About</h2>
          <h2>Services</h2>
        </div>
      </div>
      <div className="thirdfooterdiv">
      <div className="quicklink"><h1>Legal Links</h1></div>
        <div className="quicklinktext">
          <h2>Terms</h2>
          <h2>Condition</h2>
          <h2>Policy</h2>
        </div>
      </div>
      <div className="fourthfooterdiv">
      <div className="quicklink"><h1>Social Links</h1></div>
      <div className="quicklinktext soso">
        <div className="socials">
            <div className="socialimg"><img src= {facebookimg1} alt="" /></div>
            <div className="socialtxt"><h1>Facebook</h1></div>
        </div>
        <div className="socials">
            <div className="socialimg"><img src= {twitterimg} alt="" /></div>
            <div className="socialtxt"><h1>Twitter</h1></div>
        </div>
        <div className="socials">
            <div className="socialimg"><img src= {inimg} alt="" /></div>
            <div className="socialtxt"><h1>Facebook</h1></div>
        </div>
        </div>
      </div>
      </div>
      <div className="copyright"><h1>Copyrights 2024 by The Curve Africa. All rights reserved</h1></div>
      
    </div>
  )
}

export default Footer