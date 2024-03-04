import "./Aboutus.css";
import { FaUsers } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { TfiTimer } from "react-icons/tfi";
import HomePageHeader from "../LandingPage/HomePageHeader";
import Footer from "../LandingPage/Footer";

const Aboutus = () => {
  return (
    <>
      <HomePageHeader />
      <div className="AboutusMain">
        <div className="AboutusmainBody">
          <div className="Aboutusheropage">
            <div className="Aboutusherotext">
              <div className="Aboutusherotextbox">
                <div className="Aboutusherotext1">
                  <h2>About Us</h2>
                </div>
                <div className="Aboutusherotext2">
                  <p>Welcome to DocMate Appointment Management System!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="Empowerimprovehealth">
            <div className="Empowerimprovehealthbox">
              <div className="Empowerimprovehealthbox1">
                <div className="Empowerimprovehealthtext">
                  <div className="Empowerimprovehealthtext1">
                    <h2>Empowering Improved Healthcare Through Analytics</h2>
                  </div>
                </div>
                <div className="Empowerimprovehealthtextbox2">
                  <div className="Empowerimprovehealthtext2">
                    <p>
                      At DocMate, we are dedicated to providing exceptional
                      healthcare services <br /> and ensuring a seamless
                      experience for our patients. Our appointment <br />{" "}
                      management system is designed to streamline the process of{" "}
                      <br /> scheduling and managing appointments, making it
                      easier for <br />
                      patients to access the care they need.
                    </p>
                  </div>
                </div>
              </div>
              <div className="Empowerimprovehealthbox2"></div>
            </div>
          </div>
          <div className="spaceKeyfeaturesmain"></div>
          <div className="Keyfeaturesmain">
            <div className="Keyfeaturesmainbody">
              <div className="Keyfeaturesthemain">
                <div className="Keyfeaturesthemtext">
                  <h2>Key Features</h2>
                </div>
              </div>
              <div className="Keyfeaturesthembox">
                <div className="Keyfeaturesthemboxs">
                  <div className="Keyfeaturesthemboxtext">
                    <div className="Keyfeaturesthemboxtext1">
                      <h3>User-Friendly Interface</h3>
                    </div>
                  </div>
                  <div className="Keyfeaturesthemboxtext1icon">
                    <div className="Keyfeaturesthemboxtext1iconboc">
                      <FaUsers className="Keyfeaturesthemboxtext1iconboc1" />
                    </div>
                  </div>
                  <div className="Keyfeaturesthemboxtextcon2">
                    <div className="Keyfeaturesthemboxtextcontext2">
                      <p>
                        {" "}
                        Our appointment management system features an intuitive
                        interface that allows patients to schedule, reschedule,
                        or cancel appointments with ease.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="Keyfeaturesthemboxs2">
                  <div className="Keyfeaturesthemboxstext2">
                    <div className="Keyfeaturesthemboxsmaintext2">
                      <h3>Secure and Confidential</h3>
                    </div>
                  </div>
                  <div className="Keyfeaturesthemboxseconbox2">
                    <div className="Keyfeaturesthemboxseconbox2icon">
                      <MdOutlineSecurity className="Keyboxseconbox2icon" />
                    </div>
                  </div>
                  <div className="Keyfeaturesthemboxsecontext2">
                    <div className="Keyfeaturesthemboxtextcontext2">
                      <p>
                        We prioritize patient privacy and data security,
                        ensuring that all personal health information is
                        encrypted and stored securely in compliance with
                        industry standards.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="Keyfeaturesthemboxs3">
                  <div className="Keyfeaturesthemboxscon3">
                    <div className="Keyfeaturesthemboxtext1">
                      <h3>Real-Time Availability</h3>
                    </div>
                  </div>
                  <div className="Keyfeaturesthemboxscondtext3">
                    <TfiTimer className="Keyfeaturesthemboxscondtext3icon" />
                  </div>
                  <div className="Keyfeaturesthemboxscontextbox3">
                    <div className="Keyfeaturesthemboxtextcontext2">
                      <p>
                        Patients can view real-time availability of doctors and
                        healthcare services, enabling them to choose convenient
                        appointment slots based on their preferences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="spaceOurmissionandvisionpage"></div>
          <div className="Ourmissionandvisionpage">
            <div className="Ourmissionandvisionmainpage">
              <div className="Ourmissionandvisionmainpageup">
                <div className="Ourmissionandpageupleft">
                  <div className="Ourmissionandpageupleftcirlce"></div>
                </div>
                <div className="Ourmissionandpageupright">
                  <div className="Ourmissionandpageuprighttext">
                    <div className="Ourmissiontext">
                      <h2>Our Mission</h2>
                    </div>
                  </div>
                  <div className="Ourmissiontext2">
                    <div className="Ourmissionmaintext2">
                      <p>
                        Our mission is to improve healthcare accessibility and
                        patient satisfaction by leveraging technology to
                        simplify the appointment booking process. We strive to
                        empower patients with convenient tools to schedule
                        appointments, manage their healthcare journey, and
                        receive timely care from our expert medical
                        professionals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Ourmissionandvisionmainpagedown">
                <div className="Ourvisionmainpagedownleft">
                  <div className="Ourvisionmainpagedownleft1">
                    <div className="Ourvisiondownlefttext1">
                      <h2>Our Vision</h2>
                    </div>
                  </div>
                  <div className="Ourvisionmainpagetextleft2">
                    <div className="Ourvisionmainpagetextdownleft2">
                      <p>
                        We envision a future where healthcare services are
                        easily accessible and efficiently delivered to all
                        individuals. Through innovation and dedication, we aim
                        to revolutionize the healthcare industry by implementing
                        advanced appointment management solutions that
                        prioritize patient convenience and satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="Ourvisionmainpagedownright">
                  <div className="Ourvisionmainpagedownrightcircle">
                    <div className="Ourvisionmainpagemainightcircle"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="spaceOurvisionmainpage"></div>
          <div className="Ourteammainpage">
            <div className="Ourteammainpageup">
              <div className="Ourteammainpageinnerup">
                <div className="Ourteammainpageinnerfirstup">
                  <div className="Ourteammainpageinnertext">
                    <h2>Our Team</h2>
                  </div>
                </div>
                <div className="Ourteammainpageinnertext2">
                  <div className="Ourteammaininnertext2">
                    <p>
                      Behind DocMate Appointment Management System is a
                      dedicated team of healthcare professionals, software
                      engineers, and technology enthusiasts committed to
                      revolutionizing the way healthcare appointments are
                      managed. With a passion for innovation and a focus on
                      patient-centric solutions, our team works tirelessly to
                      enhance the patient experience and improve healthcare
                      delivery.
                    </p>
                  </div>
                </div>
              </div>
              <div className="Ourteammainpageouterdown">
                <div className="Ourteammainpageouterdownbox">
                  <div className="Ourteammainpageouterdownboxup"></div>
                  <div className="Ourteamprofiletercirclbox">
                    <div className="Ourterfirstcirclbox">
                      <div className="Ourterfirstcirclbox1"></div>
                      <div className="Ourterfirstcircname1">
                        <div className="Ourterfirstcname1">
                          <h3>Godwin David N</h3>
                        </div>
                        <div className="Ourterfirstcname2">
                          <p>Front End Developer</p>
                        </div>
                      </div>
                    </div>
                    <div className="Ourterfirstcirclbox">
                      <div className="Ourterfirstcirclbox1"></div>
                      <div className="OurtersecondcircBox2">
                        <div className="Ourterfirstcname1">
                          <h3>Henry Trust</h3>
                        </div>
                        <div className="Ourterfirstcname2">
                          <p>Front End Developer</p>
                        </div>
                      </div>
                    </div>
                    <div className="Ourterfirstcirclbox">
                      <div className="Ourterfirstcirclbox1"></div>
                      <div className="Ourterthirdmainircltextbox1">
                        <div className="Ourterfirstcname1">
                          <h3>Adekunle Michael</h3>
                        </div>
                        <div className="Ourterfirstcname2">
                          <p>Back End Developer</p>
                        </div>
                      </div>
                    </div>
                    <div className="Ourterfirstcirclbox">
                      <div className="Ourterfirstcirclbox1"></div>
                      <div className="OurterFourthcirclinebox">
                        <div className="Ourterfirstcname1">
                          <h3>Adekunle Michael</h3>
                        </div>
                        <div className="Ourterfirstcname2">
                          <p>BackEnd Developer</p>
                        </div>
                      </div>
                    </div>
                    <div className="Ourterfirstcirclbox">
                      <div className="Ourterfirstcirclbox1"></div>
                      <div className="OurterFourfiflineclbox">
                        <div className="Ourterfirstcname1">
                          <h3>Adekunle Michael</h3>
                        </div>
                        <div className="Ourterfirstcname2">
                          <p>BackEnd Developer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="spaceOurterfirstcname2"></div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Aboutus;


// import "./Aboutus.css";
// import { FaUsers } from "react-icons/fa6";
// import { MdOutlineSecurity } from "react-icons/md";
// import { TfiTimer } from "react-icons/tfi";
// import HomePageHeader from "../LandingPage/HomePageHeader";
// import Footer from "../LandingPage/Footer";

// const Aboutus = () => {
//   return (
//     <>
//       <HomePageHeader />
//       <div className="AboutusMain">
//         <div className="AboutusmainBody">
//           <div className="Aboutusheropage">
//             <div className="Aboutusherotext">
//               <div className="Aboutusherotextbox">
//                 <div className="Aboutusherotext1">
//                   <h2>About Us</h2>
//                 </div>
//                 <div className="Aboutusherotext2">
//                   <p>Welcome to DocMate Appointment Management System!</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="Empowerimprovehealth">
//             <div className="Empowerimprovehealthbox">
//               <div className="Empowerimprovehealthbox1">
//                 <div className="Empowerimprovehealthtext">
//                   <div className="Empowerimprovehealthtext1">
//                     <h2>Empowering Improved Healthcare Through Analytics</h2>
//                   </div>
//                 </div>
//                 <div className="Empowerimprovehealthtextbox2">
//                   <div className="Empowerimprovehealthtext2">
//                     <p>
//                       At DocMate, we are dedicated to providing exceptional
//                       healthcare services <br /> and ensuring a seamless
//                       experience for our patients. Our appointment <br />{" "}
//                       management system is designed to streamline the process of{" "}
//                       <br /> scheduling and managing appointments, making it
//                       easier for <br />
//                       patients to access the care they need.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="Empowerimprovehealthbox2"></div>
//             </div>
//           </div>
//           <div className="spaceKeyfeaturesmain"></div>
//           <div className="Keyfeaturesmain">
//             <div className="Keyfeaturesmainbody">
//               <div className="Keyfeaturesthemain">
//                 <div className="Keyfeaturesthemtext">
//                   <h2>Key Features</h2>
//                 </div>
//               </div>
//               <div className="Keyfeaturesthembox">
//                 <div className="Keyfeaturesthemboxs">
//                   <div className="Keyfeaturesthemboxtext">
//                     <div className="Keyfeaturesthemboxtext1">
//                       <h3>User-Friendly Interface</h3>
//                     </div>
//                   </div>
//                   <div className="Keyfeaturesthemboxtext1icon">
//                     <div className="Keyfeaturesthemboxtext1iconboc">
//                       <FaUsers className="Keyfeaturesthemboxtext1iconboc1" />
//                     </div>
//                   </div>
//                   <div className="Keyfeaturesthemboxtextcon2">
//                     <div className="Keyfeaturesthemboxtextcontext2">
//                       <p>
//                         {" "}
//                         Our appointment management system features an intuitive
//                         interface that allows patients to schedule, reschedule,
//                         or cancel appointments with ease.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="Keyfeaturesthemboxs2">
//                   <div className="Keyfeaturesthemboxstext2">
//                     <div className="Keyfeaturesthemboxsmaintext2">
//                       <h3>Secure and Confidential</h3>
//                     </div>
//                   </div>
//                   <div className="Keyfeaturesthemboxseconbox2">
//                     <div className="Keyfeaturesthemboxseconbox2icon">
//                       <MdOutlineSecurity className="Keyboxseconbox2icon" />
//                     </div>
//                   </div>
//                   <div className="Keyfeaturesthemboxsecontext2">
//                     <div className="Keyfeaturesthemboxtextcontext2">
//                       <p>
//                         We prioritize patient privacy and data security,
//                         ensuring that all personal health information is
//                         encrypted and stored securely in compliance with
//                         industry standards.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="Keyfeaturesthemboxs3">
//                   <div className="Keyfeaturesthemboxscon3">
//                     <div className="Keyfeaturesthemboxtext1">
//                       <h3>Real-Time Availability</h3>
//                     </div>
//                   </div>
//                   <div className="Keyfeaturesthemboxscondtext3">
//                     <TfiTimer className="Keyfeaturesthemboxscondtext3icon" />
//                   </div>
//                   <div className="Keyfeaturesthemboxscontextbox3">
//                     <div className="Keyfeaturesthemboxtextcontext2">
//                       <p>
//                         Patients can view real-time availability of doctors and
//                         healthcare services, enabling them to choose convenient
//                         appointment slots based on their preferences.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="spaceOurmissionandvisionpage"></div>
//           <div className="Ourmissionandvisionpage">
//             <div className="Ourmissionandvisionmainpage">
//               <div className="Ourmissionandvisionmainpageup">
//                 <div className="Ourmissionandpageupleft">
//                   <div className="Ourmissionandpageupleftcirlce"></div>
//                 </div>
//                 <div className="Ourmissionandpageupright">
//                   <div className="Ourmissionandpageuprighttext">
//                     <div className="Ourmissiontext">
//                       <h2>Our Mission</h2>
//                     </div>
//                   </div>
//                   <div className="Ourmissiontext2">
//                     <div className="Ourmissionmaintext2">
//                       <p>
//                         Our mission is to improve healthcare accessibility and
//                         patient satisfaction by leveraging technology to
//                         simplify the appointment booking process. We strive to
//                         empower patients with convenient tools to schedule
//                         appointments, manage their healthcare journey, and
//                         receive timely care from our expert medical
//                         professionals.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="Ourmissionandvisionmainpagedown">
//                 <div className="Ourvisionmainpagedownleft">
//                   <div className="Ourvisionmainpagedownleft1">
//                     <div className="Ourvisiondownlefttext1">
//                       <h2>Our Vision</h2>
//                     </div>
//                   </div>
//                   <div className="Ourvisionmainpagetextleft2">
//                     <div className="Ourvisionmainpagetextdownleft2">
//                       <p>
//                         We envision a future where healthcare services are
//                         easily accessible and efficiently delivered to all
//                         individuals. Through innovation and dedication, we aim
//                         to revolutionize the healthcare industry by implementing
//                         advanced appointment management solutions that
//                         prioritize patient convenience and satisfaction.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="Ourvisionmainpagedownright">
//                   <div className="Ourvisionmainpagedownrightcircle">
//                     <div className="Ourvisionmainpagemainightcircle"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="spaceOurvisionmainpage"></div>
//           <div className="Ourteammainpage">
//             <div className="Ourteammainpageup">
//               <div className="Ourteammainpageinnerup">
//                 <div className="Ourteammainpageinnerfirstup">
//                   <div className="Ourteammainpageinnertext">
//                     <h2>Our Team</h2>
//                   </div>
//                 </div>
//                 <div className="Ourteammainpageinnertext2">
//                   <div className="Ourteammaininnertext2">
//                     <p>
//                       Behind DocMate Appointment Management System is a
//                       dedicated team of healthcare professionals, software
//                       engineers, and technology enthusiasts committed to
//                       revolutionizing the way healthcare appointments are
//                       managed. With a passion for innovation and a focus on
//                       patient-centric solutions, our team works tirelessly to
//                       enhance the patient experience and improve healthcare
//                       delivery.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="Ourteammainpageouterdown">
//                 <div className="Ourteammainpageouterdownbox">
//                   <div className="Ourteammainpageouterdownboxup"></div>
//                   <div className="Ourteamprofiletercirclbox">
//                     <div className="Ourterfirstcirclbox">
//                       <div className="Ourterfirstcirclbox1"></div>
//                       <div className="Ourterfirstcircname1">
//                         <div className="Ourterfirstcname1">
//                           <h3>Godwin David N</h3>
//                         </div>
//                         <div className="Ourterfirstcname2">
//                           <p>Front End Developer</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="Ourterfirstcirclbox">
//                       <div className="Ourterfirstcirclbox1"></div>
//                       <div className="OurtersecondcircBox2">
//                         <div className="Ourterfirstcname1">
//                           <h3>Henry Trust</h3>
//                         </div>
//                         <div className="Ourterfirstcname2">
//                           <p>Front End Developer</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="Ourterfirstcirclbox">
//                       <div className="Ourterfirstcirclbox1"></div>
//                       <div className="Ourterthirdmainircltextbox1">
//                         <div className="Ourterfirstcname1">
//                           <h3>Adekunle Michael</h3>
//                         </div>
//                         <div className="Ourterfirstcname2">
//                           <p>Back End Developer</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="Ourterfirstcirclbox">
//                       <div className="Ourterfirstcirclbox1"></div>
//                       <div className="OurterFourthcirclinebox">
//                         <div className="Ourterfirstcname1">
//                           <h3>Adekunle Michael</h3>
//                         </div>
//                         <div className="Ourterfirstcname2">
//                           <p>BackEnd Developer</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="Ourterfirstcirclbox">
//                       <div className="Ourterfirstcirclbox1"></div>
//                       <div className="OurterFourfiflineclbox">
//                         <div className="Ourterfirstcname1">
//                           <h3>Adekunle Michael</h3>
//                         </div>
//                         <div className="Ourterfirstcname2">
//                           <p>BackEnd Developer</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="spaceOurterfirstcname2"></div>
//         </div>
//       </div>
//       {/* <Footer /> */}
//     </>
//   );
// };

// export default Aboutus;
