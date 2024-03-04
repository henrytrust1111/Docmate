import "./Contactus.css";
import { FiSend } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
// import { HiOutlineMailOpen } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import HomePageHeader from "../LandingPage/HomePageHeader";
import Footer from "../LandingPage/Footer";

const Contactus = () => {
  return (
    <>
      <HomePageHeader />
      <div className="Contactuspage">
        <div className="ContactusMainpage">
          <div className="ContactusHeropage">
            <div className="ContactusHeroTextpage">
              <div className="ContactusHeroText">
                <h2>Contact Us</h2>
              </div>
            </div>
          </div>

          <div className="Contactuslistpage">
            <div className="Contactuslistpagewrapper">
            <div className="Contactusmainlistpage">
                <div className="Contactusmainlistleftpage">
                  <div className="Contactusmainlistleftpagewrapper">
                  <div className="Contactusendmessgae">
                    <div className="Contactumainsendmessgae">
                      <h3>Send a Message</h3>
                    </div>
                  </div>
                  <div className="Contacttlefirstname">
                    <div className="Contacttlemainfirstname">
                      <div className="Contactusfirstnameleft">
                        <div className="Contactusfirstname">
                          <p>First Name</p>
                        </div>
                        <div className="Contactusfirstnamebox">
                          <input type="text" placeholder="Firstname" />
                        </div>
                      </div>
                      <div className="Contactusfirstnameright">
                        <div className="Contactuslastnameright">
                          <p>Last Name</p>
                        </div>
                        <div className="Contactuslastnamerightbox">
                          <input type="text" placeholder="lastname" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Contactseconlistleftpage">
                    <div className="Contactseconlistleftbox">
                      <div className="Contactseconlistleftemail">
                        <p>Email</p>
                      </div>
                      <div className="Contactseconlistleftemailinput">
                        <input type="text" placeholder="email" />
                      </div>
                    </div>
                  </div>
                  <div className="Contactustitletpage">
                    <div className="Contactustitletpagebox">
                      <div className="Contactustitlettitlebox">
                        <p>Title</p>
                      </div>
                      <div className="Contactustitlettitlinput">
                        <input type="text" placeholder="" />
                      </div>
                    </div>
                  </div>
                  <div className="Contactusthowcanwehelpyou">
                    <div className="Contactusthowcanwehelpyouinput">
                      {/* <input type="text" placeholder='How can we help you?' /> */}
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                  </div>
                  <div className="Contactusdubmitform">
                    <div className="Contactusdubmitformbox">
                      <div className="Contactusdubmibtn">
                        <div className="Contactumainsubmibtn">
                          <FiSend className="Contactussendme" />
                          <p>Submit</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
            
                </div>
                <div className="Contactusmainlistrightpage">
                  <div className="Contactusmainlistrightpageup">
                    <div className="Contactusinforight">
                      <div className="Contactusinforighttbox">
                        <div className="Contactusinforighttext">
                          <h3>Contact Info</h3>
                        </div>
                      </div>
                    </div>
                    <div className="Contactsecondinfotext">
                      <div className="Contactsecondinfobox">
                        <div className="Contactsecondinfoboxicon">
                          <FiPhoneCall className="ContactusCall" />
                        </div>
                      </div>
                      <div className="Contactsecondinfobox2">
                        <div className="Contactusecondinfoboxline1">
                          <div className="Contactusboxlinetext">
                            <h3>Phone Number</h3>
                          </div>
                        </div>
                        <div className="Contactdinfoboxline2">
                          <div className="Contactdinfolinetext2">
                            <p>+2348067254332</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="Contactusmainlistrightpage2">
                      <div className="Contactusmainlistrightbox">
                        <AiOutlineMail className="Contactusemail" />
                      </div>
                      <div className="Contactusmainlistrightbox2">
                        <div className="Contactusemailrightbox2">
                          <div className="Contactusemailrightline1">
                            <h3>Email Address</h3>
                          </div>
                          <div className="Contactusemailrightline2">
                            <p>simondavid5220@gmail.com</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Contactusmainlistrightpagedown">
                    <div className="ContactusmainPr"></div>
                  </div>
                </div>
              </div>
            </div>
             
            </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Contactus;




// import "./Contactus.css";
// import { FiSend } from "react-icons/fi";
// import { FiPhoneCall } from "react-icons/fi";
// // import { HiOutlineMailOpen } from "react-icons/hi";
// import { AiOutlineMail } from "react-icons/ai";
// import HomePageHeader from "../LandingPage/HomePageHeader";
// import Footer from "../LandingPage/Footer";

// const Contactus = () => {
//   return (
//     <>
//       <HomePageHeader />
//       <div className="Contactuspage">
//         <div className="ContactusMainpage">
//           <div className="ContactusHeropage">
//             <div className="ContactusHeroTextpage">
//               <div className="ContactusHeroText">
//                 <h2>Contact Us</h2>
//               </div>
//             </div>
//             <div className="Contactuslistpage">
//               <div className="Contactusmainlistpage">
//                 <div className="Contactusmainlistleftpage">
//                   <div className="Contactusendmessgae">
//                     <div className="Contactumainsendmessgae">
//                       <h3>Send a Message</h3>
//                     </div>
//                   </div>
//                   <div className="Contacttlefirstname">
//                     <div className="Contacttlemainfirstname">
//                       <div className="Contactusfirstnameleft">
//                         <div className="Contactusfirstname">
//                           <p>First Name</p>
//                         </div>
//                         <div className="Contactusfirstnamebox">
//                           <input type="text" placeholder="Firstname" />
//                         </div>
//                       </div>
//                       <div className="Contactusfirstnameright">
//                         <div className="Contactuslastnameright">
//                           <p>Last Name</p>
//                         </div>
//                         <div className="Contactuslastnamerightbox">
//                           <input type="text" placeholder="lastname" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="Contactseconlistleftpage">
//                     <div className="Contactseconlistleftbox">
//                       <div className="Contactseconlistleftemail">
//                         <p>Email</p>
//                       </div>
//                       <div className="Contactseconlistleftemailinput">
//                         <input type="text" placeholder="email" />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="Contactustitletpage">
//                     <div className="Contactustitletpagebox">
//                       <div className="Contactustitlettitlebox">
//                         <p>Title</p>
//                       </div>
//                       <div className="Contactustitlettitlinput">
//                         <input type="text" placeholder="" />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="Contactusthowcanwehelpyou">
//                     <div className="Contactusthowcanwehelpyouinput">
//                       {/* <input type="text" placeholder='How can we help you?' /> */}
//                       <textarea
//                         name=""
//                         id=""
//                         cols="30"
//                         rows="10"
//                         placeholder="How can we help you?"
//                       ></textarea>
//                     </div>
//                   </div>
//                   <div className="Contactusdubmitform">
//                     <div className="Contactusdubmitformbox">
//                       <div className="Contactusdubmibtn">
//                         <div className="Contactumainsubmibtn">
//                           <FiSend className="Contactussendme" />
//                           <p>Submit</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="Contactusmainlistrightpage">
//                   <div className="Contactusmainlistrightpageup">
//                     <div className="Contactusinforight">
//                       <div className="Contactusinforighttbox">
//                         <div className="Contactusinforighttext">
//                           <h3>Contact Info</h3>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="Contactsecondinfotext">
//                       <div className="Contactsecondinfobox">
//                         <div className="Contactsecondinfoboxicon">
//                           <FiPhoneCall className="ContactusCall" />
//                         </div>
//                       </div>
//                       <div className="Contactsecondinfobox2">
//                         <div className="Contactusecondinfoboxline1">
//                           <div className="Contactusboxlinetext">
//                             <h3>Phone Number</h3>
//                           </div>
//                         </div>
//                         <div className="Contactdinfoboxline2">
//                           <div className="Contactdinfolinetext2">
//                             <p>+2348067254332</p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="Contactusmainlistrightpage2">
//                       <div className="Contactusmainlistrightbox">
//                         <AiOutlineMail className="Contactusemail" />
//                       </div>
//                       <div className="Contactusmainlistrightbox2">
//                         <div className="Contactusemailrightbox2">
//                           <div className="Contactusemailrightline1">
//                             <h3>Email Address</h3>
//                           </div>
//                           <div className="Contactusemailrightline2">
//                             <p>simondavid5220@gmail.com</p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="Contactusmainlistrightpagedown"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <Footer /> */}
//     </>
//   );
// };

// export default Contactus;
