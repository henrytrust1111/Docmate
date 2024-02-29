import React, { useEffect, useState } from "react";
import axios from "axios";

const PatientHospitalSelection = ({setPatientHospitalSelection,setPatientHospitalPage}) => {
    const handleHospitalSelection = ()=>{
        setPatientHospitalSelection(false)
        setPatientHospitalPage(true)
    }
    const url= "https://doc-mate.onrender.com/all-hospitals";

    useEffect(() => {
      axios
        .get(url)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          console.log("Error Response:", error.response);
        });
    }, [])
    
    
  return (
    <div className="admin-dashboard-right">
      <div className="admin-dashboard-right-wrapper">
        <div className="dashboard-overview">
          <h2>Hospital's Overview</h2>
        </div>
        <div className="dashboard-main-content-container">
          <div className="selected-view-container">
            <div className="dashboard-attribute-container">
              <div className="dashboard-attribute-wrapper">
                <div className="dashboard-attribute-holder">
                  <div className="s-n">S/N</div>
                  <div className="attribute-fixed-width patient-attribute">
                    HOSPITALS
                  </div>
                  <div className="attribute-fixed-width email-attribute">
                    ADDRESS
                  </div>
                  <div className="attribute-fixed-width request-attribute">
                    SPECIALITY
                  </div>
                  <div className="attribute-fixed-width date-attribute">
                    RANKING
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
                    
                    <div className="delete-button" onClick={handleHospitalSelection}>View</div>
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
                    
                    <div className="delete-button">View</div>
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
                    
                    <div className="delete-button">View</div>
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
                    
                    <div className="delete-button">View</div>
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
                    
                    <div className="delete-button">View</div>
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
                    
                    <div className="delete-button">View</div>
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
                    
                    <div className="delete-button">View</div>
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
                    
                    <div className="delete-button">View</div>
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
                    
                    <div className="delete-button">View</div>
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
                    
                    <div className="delete-button">View</div>
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
                    
                    <div className="delete-button">View</div>
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
                    
                    <div className="delete-button">View</div>
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
                    
                    <div className="delete-button">View</div>
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
                    
                    <div className="delete-button">View</div>
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
                    
                    <div className="delete-button">View</div>
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
                    
                    <div className="delete-button">View</div>
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

export default PatientHospitalSelection;
