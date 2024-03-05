import "./Contactus.css";
import { FiSend } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
// import { HiOutlineMailOpen } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import HomePageHeader from "../LandingPage/HomePageHeader";
import Footer from "../LandingPage/Footer";
import { useState } from "react";
import { set } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const Contactus = () => {

  const [firstName, setFirstname] = useState("")
  const [lastName, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setisLoading] = useState(false)

  console.log(firstName, lastName, email)


  // const handlefirstname=(e)=>{
  // const newfirstname= e.target.value
  // setFirstname = (newfirstname)


  // }

  // const handlelastname = (e) =>{
  //   const newlastname = e.target.value
  //   setLastname = (newlastname)
  // }

  // const handleemail =(e) =>{
  //   const newemail = e.target.value
  //   setEmail = (newemail)
  // }

  // const handletitle = (e) =>{
  // const newtitle = e.target.value
  // setTitle = (newtitle)
  // }

  // const handlemessage = (e) =>{
  //   const newmessage = e.targe.value
  //   setMessage  (newmessage)
  // }


  const HandleSubmit = async (e) => {
    e.target.value
    try {
      const res = await axios.post(
        "https://doc-mate.onrender.com/send-message", {
        firstName,
        lastName,
        title,
        content,
        email
      }
      )
      console.log(res)
      setisLoading(true)
      Swal.fire({
        icon: "Success",
        title: "Message sent Successfully",
        text: SuccessResponse.data.message
      });
    }
    catch (error) {
      const errorMessage = error.response ? error.data.message : " error occured"
      Swal.fire({
        icon: "error",
        title: "error sending message",
        text: errorResponse
      });
      console.log(errorMessage)
    }
  }

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
                            <input type="text" placeholder="firstname" onChange={(e) => setFirstname(e.target.value)} value={firstName} />
                          </div>
                        </div>
                        <div className="Contactusfirstnameright">
                          <div className="Contactuslastnameright">
                            <p>Last Name</p>
                          </div>
                          <div className="Contactuslastnamerightbox">
                            <input type="text" placeholder="lastname"

                              onChange={(e) => setLastname(e.target.value)}
                              value={lastName} />
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
                          <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}
                            value={email} />
                        </div>
                      </div>
                    </div>
                    <div className="Contactustitletpage">
                      <div className="Contactustitletpagebox">
                        <div className="Contactustitlettitlebox">
                          <p>Title</p>
                        </div>
                        <div className="Contactustitlettitlinput">
                          <input type="text" placeholder="title" onChange={(e) => setTitle(e.target.value)}
                            value={title} />
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
                          placeholder="Message"
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                    <div className="Contactusdubmitform">
                      <div className="Contactusdubmitformbox">
                        <div className="Contactusdubmibtn">
                          <div className="Contactumainsubmibtn">
                            <button onClick={HandleSubmit}> Submit</button>
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