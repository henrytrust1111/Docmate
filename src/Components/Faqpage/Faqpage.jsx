import Footer from "../LandingPage/Footer";
import HomePageHeader from "../LandingPage/HomePageHeader";
import "./Faqpage.css";

const Faqpage = () => {
  return (
    <>
      <HomePageHeader />
      <div className="FaqMainbody">
        <div className="Faqbodycon">
          <div className="Faqheropage">
            {/* <img src="public/Faq.jpg" alt="image" /> */}
            <div className="Faqheropagetext">
              <h1>Frequently Asked Questions</h1>
            </div>
          </div>
          <div className="Faqspace"></div>

          <div className="WhatisDAMS">
            <div className="WhatisDAMSbox">
              <div className="WhatisDAMStext">
                <div className="WhatisDAMStext1">
                  <h2>What is the DocMate Appointment Management System?</h2>
                </div>
              </div>
              <div className="WhatisDAMStext2">
                <div className="WhatDAMs">
                  <p>
                    The DocMate Appointment Management System is an innovative
                    platform designed to streamline the process of scheduling
                    and managing appointments at the hospital. It offers
                    patients a convenient way to book appointments, allows staff
                    to efficiently manage schedules, and enhances overall
                    healthcare delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="WhatisDAMS">
            <div className="WhatisDAMSbox">
              <div className="WhatisDAMStext">
                <div className="WhatisDAMStext1">
                  <h2>How do I schedule an appointment?</h2>
                </div>
              </div>
              <div className="HWDIStext2">
                <div className="HWDIStexting">
                  <p>
                    To schedule an appointment, simply visit our website or
                    mobile app, log in to your account, and select the desired
                    appointment slot. You can choose your preferred date, time,
                    and healthcare provider based on availability.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="WhatisDAMS">
            <div className="WhatisDAMSbox">
              <div className="WhatisDAMStext">
                <div className="WhatisDAMStext1">
                  <h2>
                    What if I need to cancel or reschedule my appointment?
                  </h2>
                </div>
              </div>
              <div className="WhatINTCORAbox2">
                <div className="HWFIACIBABox2text">
                  <p>
                    If you need to cancel or reschedule your appointment, you
                    can do so easily through our platform. Simply log in to your
                    account, navigate to the appointment section, and follow the
                    prompts to modify or cancel your booking.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="WhatisDAMS">
            <div className="WhatisDAMSbox">
              <div className="WhatisDAMStext">
                <div className="WhatisDAMStext1">
                  <h2>How far in advance can I book appointment?</h2>
                </div>
              </div>
              <div className="HWFIACIBABox2">
                <div className="HWFIACIBABox2text">
                  <p>
                    Appointment booking windows may vary depending on
                    availability and the type of appointment needed. Generally,
                    you can book appointments several weeks in advance, but
                    urgent appointments may be available for immediate booking.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="WhatisDAMS">
            <div className="WhatisDAMSbox">
              <div className="WhatisDAMStext">
                <div className="WhatisDAMStext1">
                  <h2>Is my personal information secure?</h2>
                </div>
              </div>
              <div className="ISMPIFSECBox2">
                <div className="ISMPIFSECBox2TExt">
                  <div className="HWFIACIBABox2text">
                    <p>
                      Yes, we take data security and patient privacy seriously.
                      Our system employs robust encryption techniques and
                      follows industry best practices to ensure that your
                      personal information remains safe and confidential.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="WhatisDAMS">
            <div className="WhatisDAMSbox">
              <div className="WhatisDAMStext">
                <div className="WhatisDAMStext1">
                  <h2>
                    What should I do if I encounter technical difficulties or
                    have questions?
                  </h2>
                </div>
              </div>
              <div className="WHATSIDIETIBox2">
                <div className="HWFIACIBABox2text">
                  <p>
                    If you encounter any technical difficulties or have
                    questions about using our system, please don't hesitate to
                    reach out to our customer support team. We're here to assist
                    you and ensure that your experience with our Hospital
                    Appointment Management System is seamless and hassle-free.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="FAQspacing2"></div>
          <div className="CANTFWHATYLF">
            <div className="CANTFWHATYLFText">
              <div className="CANTFWHATYLFText1">
                <h2>Can't find what you're looking for?</h2>
              </div>
              <div className="CANTFWHATYLFText2">
                <p>
                  If you cannot find answer to your question in our FAQ, you can
                  always contact us. We will answer to you shortly!
                </p>
              </div>
            </div>
          </div>
          <div className="Faqcontactus">
            <div className="FaqcontactusBox">
              <button>Contact Us</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Faqpage;
