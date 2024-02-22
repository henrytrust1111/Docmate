import React, { useState } from "react";
import "./AdminRightNav.css";

const AdminRightNav = () => {
  const [allAppointment,setAllAppointment] = useState(true)
  const [reschedules,setReschedules] = useState(false)
  const [attended,setAttented] = useState(false)
  const [unattended,setUnattended] = useState(false)

  const handleAllAppointment = ()=>{
    setReschedules(false)
    setAllAppointment(true)
    setAttented(false)
    setUnattended(false)
  }

  const handleReschedules = ()=>{
    setReschedules(true)
    setAllAppointment(false)
    setAttented(false)
    setUnattended(false)
  }
  
  const handleAttended = ()=>{
    setReschedules(false)
    setAllAppointment(false)
    setAttented(true)
    setUnattended(false)
  }

  const handleUnattended = ()=>{
    setReschedules(false)
    setAllAppointment(false)
    setAttented(false)
    setUnattended(true)
  }
  return (
    <div className="admin-dashboard-right">
      <div className="admin-dashboard-right-wrapper">
        <div className="dashboard-overview">
          <h2>Dashboard Overview</h2>
        </div>
        <div className="dashboard-main-content-container">
          <div className="select-dashboard-view-container">
            <div className="select-dashboard-view-wrapper" id={allAppointment? "active-state":null} onClick={handleAllAppointment}>
              <div className={allAppointment? "select-dashboard-view-holder active-state-container":"select-dashboard-view-holder"}>
                <div>
                  <p>11</p>
                  <p>All Appointment</p>
                </div>
              </div>
            </div>
            <div className="select-dashboard-view-wrapper" id={reschedules? "active-state":null} onClick={handleReschedules}>
              <div className={reschedules? "select-dashboard-view-holder active-state-container":"select-dashboard-view-holder"}>
                <div>
                  <p>11</p>
                  <p>Reschedules</p>
                </div>
              </div>
            </div>
            <div className="select-dashboard-view-wrapper" id={attended? "active-state":null} onClick={handleAttended}>
              <div className={attended? "select-dashboard-view-holder active-state-container":"select-dashboard-view-holder"}>
                <div>
                  <p>11</p>
                  <p>Attended</p>
                </div>
              </div>
            </div>
            <div className="select-dashboard-view-wrapper" id={unattended? "active-state":null} onClick={handleUnattended}>
              <div className={unattended? "select-dashboard-view-holder active-state-container":"select-dashboard-view-holder"}>
                <div>
                  <p>11</p>
                  <p>Unattended</p>
                </div>
              </div>
            </div>
          </div>
          <div className="selected-view-container">
            <div className="dashboard-attribute-container">
              <div className="dashboard-attribute-wrapper">
                <div className="dashboard-attribute-holder">
                  <div className="s-n">S/N</div>
                  <div className="attribute-fixed-width patient-attribute">
                    PATIENT
                  </div>
                  <div className="attribute-fixed-width email-attribute">
                    EMAIL
                  </div>
                  <div className="attribute-fixed-width request-attribute">
                    REQUEST
                  </div>
                  <div className="attribute-fixed-width date-attribute">
                    DATE
                  </div>
                  <div className="attribute-fixed-width date-attribute"></div>
                </div>
              </div>
              <div className="dashboard-list-wrapper">
                <div className="list-container">
                  <div className="s-n">1</div>
                  <div className="attribute-fixed-width patient-profile-record">
                    <div className="profile-img-view"></div>
                    <div className="name-view-profile-container">
                      <p>Micheal Adekunle</p>
                      <p className="colored-view-profile">View profile</p>
                    </div>
                  </div>
                  <div className="attribute-fixed-width email-record">
                    Vivian@gmail.com
                  </div>
                  <div className="attribute-fixed-width request-record">
                    Appointment
                  </div>
                  <div className="attribute-fixed-width date-record">
                    Today, 10 May 2023
                  </div>
                  <div className="delete-view-btn">
                    <div className="view-button">View</div>
                    <div className="delete-button">Delete</div>
                  </div>
                </div>
                <div className="list-container">
                  <div className="s-n">2</div>
                  <div className="attribute-fixed-width patient-profile-record">
                    <div className="profile-img-view"></div>
                    <div className="name-view-profile-container">
                      <p>Micheal Adekunle</p>
                      <p className="colored-view-profile">View profile</p>
                    </div>
                  </div>
                  <div className="attribute-fixed-width email-record">
                    Vivian@gmail.com
                  </div>
                  <div className="attribute-fixed-width request-record reschedules">
                    Reschedules
                  </div>
                  <div className="attribute-fixed-width date-record">
                    Today, 10 May 2023
                  </div>
                  <div className="delete-view-btn">
                    <div className="view-button">View</div>
                    <div className="delete-button">Delete</div>
                  </div>
                </div>
                <div className="list-container">
                  <div className="s-n">3</div>
                  <div className="attribute-fixed-width patient-profile-record">
                    <div className="profile-img-view"></div>
                    <div className="name-view-profile-container">
                      <p>Micheal Adekunle</p>
                      <p className="colored-view-profile">View profile</p>
                    </div>
                  </div>
                  <div className="attribute-fixed-width email-record">
                    Vivian@gmail.com
                  </div>
                  <div className="attribute-fixed-width request-record">
                    Appointment
                  </div>
                  <div className="attribute-fixed-width date-record">
                    Today, 10 May 2023
                  </div>
                  <div className="delete-view-btn">
                    <div className="view-button">View</div>
                    <div className="delete-button">Delete</div>
                  </div>
                </div>
                <div className="list-container">
                  <div className="s-n">4</div>
                  <div className="attribute-fixed-width patient-profile-record">
                    <div className="profile-img-view"></div>
                    <div className="name-view-profile-container">
                      <p>Micheal Adekunle</p>
                      <p className="colored-view-profile">View profile</p>
                    </div>
                  </div>
                  <div className="attribute-fixed-width email-record">
                    Vivian@gmail.com
                  </div>
                  <div className="attribute-fixed-width request-record reschedules">
                    Reschedules
                  </div>
                  <div className="attribute-fixed-width date-record">
                    Today, 10 May 2023
                  </div>
                  <div className="delete-view-btn">
                    <div className="view-button">View</div>
                    <div className="delete-button">Delete</div>
                  </div>
                </div>
                <div className="list-container">
                  <div className="s-n">5</div>
                  <div className="attribute-fixed-width patient-profile-record">
                    <div className="profile-img-view"></div>
                    <div className="name-view-profile-container">
                      <p>Micheal Adekunle</p>
                      <p className="colored-view-profile">View profile</p>
                    </div>
                  </div>
                  <div className="attribute-fixed-width email-record">
                    Vivian@gmail.com
                  </div>
                  <div className="attribute-fixed-width request-record">
                    Appointment
                  </div>
                  <div className="attribute-fixed-width date-record">
                    Today, 10 May 2023
                  </div>
                  <div className="delete-view-btn">
                    <div className="view-button">View</div>
                    <div className="delete-button">Delete</div>
                  </div>
                </div>
                <div className="list-container">
                  <div className="s-n">6</div>
                  <div className="attribute-fixed-width patient-profile-record">
                    <div className="profile-img-view"></div>
                    <div className="name-view-profile-container">
                      <p>Micheal Adekunle</p>
                      <p className="colored-view-profile">View profile</p>
                    </div>
                  </div>
                  <div className="attribute-fixed-width email-record">
                    Vivian@gmail.com
                  </div>
                  <div className="attribute-fixed-width request-record reschedules">
                    Reschedules
                  </div>
                  <div className="attribute-fixed-width date-record">
                    Today, 10 May 2023
                  </div>
                  <div className="delete-view-btn">
                    <div className="view-button">View</div>
                    <div className="delete-button">Delete</div>
                  </div>
                </div>
                <div className="list-container">
                  <div className="s-n">7</div>
                  <div className="attribute-fixed-width patient-profile-record">
                    <div className="profile-img-view"></div>
                    <div className="name-view-profile-container">
                      <p>Micheal Adekunle</p>
                      <p className="colored-view-profile">View profile</p>
                    </div>
                  </div>
                  <div className="attribute-fixed-width email-record">
                    Vivian@gmail.com
                  </div>
                  <div className="attribute-fixed-width request-record">
                    Appointment
                  </div>
                  <div className="attribute-fixed-width date-record">
                    Today, 10 May 2023
                  </div>
                  <div className="delete-view-btn">
                    <div className="view-button">View</div>
                    <div className="delete-button">Delete</div>
                  </div>
                </div>
                <div className="list-container">
                  <div className="s-n">8</div>
                  <div className="attribute-fixed-width patient-profile-record">
                    <div className="profile-img-view"></div>
                    <div className="name-view-profile-container">
                      <p>Micheal Adekunle</p>
                      <p className="colored-view-profile">View profile</p>
                    </div>
                  </div>
                  <div className="attribute-fixed-width email-record">
                    Vivian@gmail.com
                  </div>
                  <div className="attribute-fixed-width request-record reschedules">
                    Reschedules
                  </div>
                  <div className="attribute-fixed-width date-record">
                    Today, 10 May 2023
                  </div>
                  <div className="delete-view-btn">
                    <div className="view-button">View</div>
                    <div className="delete-button">Delete</div>
                  </div>
                </div>
                <div className="list-container">
                  <div className="s-n">8</div>
                  <div className="attribute-fixed-width patient-profile-record">
                    <div className="profile-img-view"></div>
                    <div className="name-view-profile-container">
                      <p>Micheal Adekunle</p>
                      <p className="colored-view-profile">View profile</p>
                    </div>
                  </div>
                  <div className="attribute-fixed-width email-record">
                    Vivian@gmail.com
                  </div>
                  <div className="attribute-fixed-width request-record reschedules">
                    Reschedules
                  </div>
                  <div className="attribute-fixed-width date-record">
                    Today, 10 May 2023
                  </div>
                  <div className="delete-view-btn">
                    <div className="view-button">View</div>
                    <div className="delete-button">Delete</div>
                  </div>
                </div>
                <div className="list-container">
                  <div className="s-n">8</div>
                  <div className="attribute-fixed-width patient-profile-record">
                    <div className="profile-img-view"></div>
                    <div className="name-view-profile-container">
                      <p>Micheal Adekunle</p>
                      <p className="colored-view-profile">View profile</p>
                    </div>
                  </div>
                  <div className="attribute-fixed-width email-record">
                    Vivian@gmail.com
                  </div>
                  <div className="attribute-fixed-width request-record reschedules">
                    Reschedules
                  </div>
                  <div className="attribute-fixed-width date-record">
                    Today, 10 May 2023
                  </div>
                  <div className="delete-view-btn">
                    <div className="view-button">View</div>
                    <div className="delete-button">Delete</div>
                  </div>
                </div>
                <div className="list-container">
                  <div className="s-n">8</div>
                  <div className="attribute-fixed-width patient-profile-record">
                    <div className="profile-img-view"></div>
                    <div className="name-view-profile-container">
                      <p>Micheal Adekunle</p>
                      <p className="colored-view-profile">View profile</p>
                    </div>
                  </div>
                  <div className="attribute-fixed-width email-record">
                    Vivian@gmail.com
                  </div>
                  <div className="attribute-fixed-width request-record reschedules">
                    Reschedules
                  </div>
                  <div className="attribute-fixed-width date-record">
                    Today, 10 May 2023
                  </div>
                  <div className="delete-view-btn">
                    <div className="view-button">View</div>
                    <div className="delete-button">Delete</div>
                  </div>
                </div>
                <div className="list-container">
                  <div className="s-n">8</div>
                  <div className="attribute-fixed-width patient-profile-record">
                    <div className="profile-img-view"></div>
                    <div className="name-view-profile-container">
                      <p>Micheal Adekunle</p>
                      <p className="colored-view-profile">View profile</p>
                    </div>
                  </div>
                  <div className="attribute-fixed-width email-record">
                    Vivian@gmail.com
                  </div>
                  <div className="attribute-fixed-width request-record reschedules">
                    Reschedules
                  </div>
                  <div className="attribute-fixed-width date-record">
                    Today, 10 May 2023
                  </div>
                  <div className="delete-view-btn">
                    <div className="view-button">View</div>
                    <div className="delete-button">Delete</div>
                  </div>
                </div>
                <div className="list-container">
                  <div className="s-n">8</div>
                  <div className="attribute-fixed-width patient-profile-record">
                    <div className="profile-img-view"></div>
                    <div className="name-view-profile-container">
                      <p>Micheal Adekunle</p>
                      <p className="colored-view-profile">View profile</p>
                    </div>
                  </div>
                  <div className="attribute-fixed-width email-record">
                    Vivian@gmail.com
                  </div>
                  <div className="attribute-fixed-width request-record reschedules">
                    Reschedules
                  </div>
                  <div className="attribute-fixed-width date-record">
                    Today, 10 May 2023
                  </div>
                  <div className="delete-view-btn">
                    <div className="view-button">View</div>
                    <div className="delete-button">Delete</div>
                  </div>
                </div>
                <div className="list-container">
                  <div className="s-n">8</div>
                  <div className="attribute-fixed-width patient-profile-record">
                    <div className="profile-img-view"></div>
                    <div className="name-view-profile-container">
                      <p>Micheal Adekunle</p>
                      <p className="colored-view-profile">View profile</p>
                    </div>
                  </div>
                  <div className="attribute-fixed-width email-record">
                    Vivian@gmail.com
                  </div>
                  <div className="attribute-fixed-width request-record reschedules">
                    Reschedules
                  </div>
                  <div className="attribute-fixed-width date-record">
                    Today, 10 May 2023
                  </div>
                  <div className="delete-view-btn">
                    <div className="view-button">View</div>
                    <div className="delete-button">Delete</div>
                  </div>
                </div>
                <div className="list-container">
                  <div className="s-n">8</div>
                  <div className="attribute-fixed-width patient-profile-record">
                    <div className="profile-img-view"></div>
                    <div className="name-view-profile-container">
                      <p>Micheal Adekunle</p>
                      <p className="colored-view-profile">View profile</p>
                    </div>
                  </div>
                  <div className="attribute-fixed-width email-record">
                    Vivian@gmail.com
                  </div>
                  <div className="attribute-fixed-width request-record reschedules">
                    Reschedules
                  </div>
                  <div className="attribute-fixed-width date-record">
                    Today, 10 May 2023
                  </div>
                  <div className="delete-view-btn">
                    <div className="view-button">View</div>
                    <div className="delete-button">Delete</div>
                  </div>
                </div>
                <div className="list-container">
                  <div className="s-n">8</div>
                  <div className="attribute-fixed-width patient-profile-record">
                    <div className="profile-img-view"></div>
                    <div className="name-view-profile-container">
                      <p>Micheal Adekunle</p>
                      <p className="colored-view-profile">View profile</p>
                    </div>
                  </div>
                  <div className="attribute-fixed-width email-record">
                    Vivian@gmail.com
                  </div>
                  <div className="attribute-fixed-width request-record reschedules">
                    Reschedules
                  </div>
                  <div className="attribute-fixed-width date-record">
                    Today, 10 May 2023
                  </div>
                  <div className="delete-view-btn">
                    <div className="view-button">View</div>
                    <div className="delete-button">Delete</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRightNav;
