import React, { useEffect, useState } from "react";
import "./AdminPatientView.css"
import axios from "axios"

const AdminPatientView = () => {
  const [data,setData]=useState([])
  const hospitalData = JSON.parse( localStorage.getItem('loggedInHospital'))
  const token = hospitalData?.token
  const Url = 'https://doc-mate.onrender.com/all-patient'

   const getAllPatient = async  ()=>{
    // console.log(hospitalData?.token)
      try{
         const res = await axios.get(
          Url, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }
         )
         setData(res.data?.data)
        //  console.log(res.data?.data)
      }
      catch(err){
        console.log(err,"error")

      }
   }
useEffect(()=>{
  getAllPatient()
  // console.log(hospitalData)
}, ['getallpatient'])
  //  console.log(data)
  

  return (
    <div className="admin-dashboard-right">
      <div className="admin-dashboard-right-wrapper">
        <div className="dashboard-overview">
          <h2>Dashboard Overview</h2>
        </div>
        <div className="dashboard-main-content-container">
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
                    PHONE NUMBER
                  </div>
                  <div className="attribute-fixed-width date-attribute">
                    DATE
                  </div>
                  <div className="attribute-fixed-width date-attribute"></div>
                </div>
              </div>
              {
                data.map((i)=>(
                        <div className="dashboard-list-wrapper">
                <div className="list-container">
                  <div className="s-n">8</div>
                  <div className="attribute-fixed-width patient-profile-record">
                    <div className="profile-img-view"></div>
                    <div className="name-view-profile-container">
                      <p>{i.firstName}</p>
                      <p className="colored-view-profile">View profile</p>
                    </div>
                  </div>
                  <div className="attribute-fixed-width email-record">
                    {i.email}
                  </div>
                  <div className="attribute-fixed-width request-record reschedules">
                    09877tre
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
                ))
              }
        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPatientView;



// import React, { useState } from "react";
// import "./AdminPatientView.css"

// const AdminPatientView = () => {
//   return (
//     <div className="admin-dashboard-right">
//       <div className="admin-dashboard-right-wrapper">
//         <div className="dashboard-overview">
//           <h2>Dashboard Overview</h2>
//         </div>
//         <div className="dashboard-main-content-container">
//           <div className="selected-view-container">
//             <div className="dashboard-attribute-container">
//               <div className="dashboard-attribute-wrapper">
//                 <div className="dashboard-attribute-holder">
//                   <div className="s-n">S/N</div>
//                   <div className="attribute-fixed-width patient-attribute">
//                     PATIENT
//                   </div>
//                   <div className="attribute-fixed-width email-attribute">
//                     EMAIL
//                   </div>
//                   <div className="attribute-fixed-width request-attribute">
//                     PHONE NUMBER
//                   </div>
//                   <div className="attribute-fixed-width date-attribute">
//                     DATE
//                   </div>
//                   <div className="attribute-fixed-width date-attribute"></div>
//                 </div>
//               </div>
//               <div className="dashboard-list-wrapper">
//                 <div className="list-container">
//                   <div className="s-n">1</div>
//                   <div className="attribute-fixed-width patient-profile-record">
//                     <div className="profile-img-view"></div>
//                     <div className="name-view-profile-container">
//                       <p>Micheal Adekunle</p>
//                       <p className="colored-view-profile">View profile</p>
//                     </div>
//                   </div>
//                   <div className="attribute-fixed-width email-record">
//                     Vivian@gmail.com
//                   </div>
//                   <div className="attribute-fixed-width request-record">
//                     Appointment
//                   </div>
//                   <div className="attribute-fixed-width date-record">
//                     Today, 10 May 2023
//                   </div>
//                   <div className="delete-view-btn">
//                     <div className="view-button">View</div>
//                     <div className="delete-button">Delete</div>
//                   </div>
//                 </div>
//                 <div className="list-container">
//                   <div className="s-n">2</div>
//                   <div className="attribute-fixed-width patient-profile-record">
//                     <div className="profile-img-view"></div>
//                     <div className="name-view-profile-container">
//                       <p>Micheal Adekunle</p>
//                       <p className="colored-view-profile">View profile</p>
//                     </div>
//                   </div>
//                   <div className="attribute-fixed-width email-record">
//                     Vivian@gmail.com
//                   </div>
//                   <div className="attribute-fixed-width request-record reschedules">
//                     Reschedules
//                   </div>
//                   <div className="attribute-fixed-width date-record">
//                     Today, 10 May 2023
//                   </div>
//                   <div className="delete-view-btn">
//                     <div className="view-button">View</div>
//                     <div className="delete-button">Delete</div>
//                   </div>
//                 </div>
//                 <div className="list-container">
//                   <div className="s-n">3</div>
//                   <div className="attribute-fixed-width patient-profile-record">
//                     <div className="profile-img-view"></div>
//                     <div className="name-view-profile-container">
//                       <p>Micheal Adekunle</p>
//                       <p className="colored-view-profile">View profile</p>
//                     </div>
//                   </div>
//                   <div className="attribute-fixed-width email-record">
//                     Vivian@gmail.com
//                   </div>
//                   <div className="attribute-fixed-width request-record">
//                     Appointment
//                   </div>
//                   <div className="attribute-fixed-width date-record">
//                     Today, 10 May 2023
//                   </div>
//                   <div className="delete-view-btn">
//                     <div className="view-button">View</div>
//                     <div className="delete-button">Delete</div>
//                   </div>
//                 </div>
//                 <div className="list-container">
//                   <div className="s-n">4</div>
//                   <div className="attribute-fixed-width patient-profile-record">
//                     <div className="profile-img-view"></div>
//                     <div className="name-view-profile-container">
//                       <p>Micheal Adekunle</p>
//                       <p className="colored-view-profile">View profile</p>
//                     </div>
//                   </div>
//                   <div className="attribute-fixed-width email-record">
//                     Vivian@gmail.com
//                   </div>
//                   <div className="attribute-fixed-width request-record reschedules">
//                     Reschedules
//                   </div>
//                   <div className="attribute-fixed-width date-record">
//                     Today, 10 May 2023
//                   </div>
//                   <div className="delete-view-btn">
//                     <div className="view-button">View</div>
//                     <div className="delete-button">Delete</div>
//                   </div>
//                 </div>
//                 <div className="list-container">
//                   <div className="s-n">5</div>
//                   <div className="attribute-fixed-width patient-profile-record">
//                     <div className="profile-img-view"></div>
//                     <div className="name-view-profile-container">
//                       <p>Micheal Adekunle</p>
//                       <p className="colored-view-profile">View profile</p>
//                     </div>
//                   </div>
//                   <div className="attribute-fixed-width email-record">
//                     Vivian@gmail.com
//                   </div>
//                   <div className="attribute-fixed-width request-record">
//                     Appointment
//                   </div>
//                   <div className="attribute-fixed-width date-record">
//                     Today, 10 May 2023
//                   </div>
//                   <div className="delete-view-btn">
//                     <div className="view-button">View</div>
//                     <div className="delete-button">Delete</div>
//                   </div>
//                 </div>
//                 <div className="list-container">
//                   <div className="s-n">6</div>
//                   <div className="attribute-fixed-width patient-profile-record">
//                     <div className="profile-img-view"></div>
//                     <div className="name-view-profile-container">
//                       <p>Micheal Adekunle</p>
//                       <p className="colored-view-profile">View profile</p>
//                     </div>
//                   </div>
//                   <div className="attribute-fixed-width email-record">
//                     Vivian@gmail.com
//                   </div>
//                   <div className="attribute-fixed-width request-record reschedules">
//                     Reschedules
//                   </div>
//                   <div className="attribute-fixed-width date-record">
//                     Today, 10 May 2023
//                   </div>
//                   <div className="delete-view-btn">
//                     <div className="view-button">View</div>
//                     <div className="delete-button">Delete</div>
//                   </div>
//                 </div>
//                 <div className="list-container">
//                   <div className="s-n">7</div>
//                   <div className="attribute-fixed-width patient-profile-record">
//                     <div className="profile-img-view"></div>
//                     <div className="name-view-profile-container">
//                       <p>Micheal Adekunle</p>
//                       <p className="colored-view-profile">View profile</p>
//                     </div>
//                   </div>
//                   <div className="attribute-fixed-width email-record">
//                     Vivian@gmail.com
//                   </div>
//                   <div className="attribute-fixed-width request-record">
//                     Appointment
//                   </div>
//                   <div className="attribute-fixed-width date-record">
//                     Today, 10 May 2023
//                   </div>
//                   <div className="delete-view-btn">
//                     <div className="view-button">View</div>
//                     <div className="delete-button">Delete</div>
//                   </div>
//                 </div>
//                 <div className="list-container">
//                   <div className="s-n">8</div>
//                   <div className="attribute-fixed-width patient-profile-record">
//                     <div className="profile-img-view"></div>
//                     <div className="name-view-profile-container">
//                       <p>Micheal Adekunle</p>
//                       <p className="colored-view-profile">View profile</p>
//                     </div>
//                   </div>
//                   <div className="attribute-fixed-width email-record">
//                     Vivian@gmail.com
//                   </div>
//                   <div className="attribute-fixed-width request-record reschedules">
//                     Reschedules
//                   </div>
//                   <div className="attribute-fixed-width date-record">
//                     Today, 10 May 2023
//                   </div>
//                   <div className="delete-view-btn">
//                     <div className="view-button">View</div>
//                     <div className="delete-button">Delete</div>
//                   </div>
//                 </div>
//                 <div className="list-container">
//                   <div className="s-n">8</div>
//                   <div className="attribute-fixed-width patient-profile-record">
//                     <div className="profile-img-view"></div>
//                     <div className="name-view-profile-container">
//                       <p>Micheal Adekunle</p>
//                       <p className="colored-view-profile">View profile</p>
//                     </div>
//                   </div>
//                   <div className="attribute-fixed-width email-record">
//                     Vivian@gmail.com
//                   </div>
//                   <div className="attribute-fixed-width request-record reschedules">
//                     Reschedules
//                   </div>
//                   <div className="attribute-fixed-width date-record">
//                     Today, 10 May 2023
//                   </div>
//                   <div className="delete-view-btn">
//                     <div className="view-button">View</div>
//                     <div className="delete-button">Delete</div>
//                   </div>
//                 </div>
//                 <div className="list-container">
//                   <div className="s-n">8</div>
//                   <div className="attribute-fixed-width patient-profile-record">
//                     <div className="profile-img-view"></div>
//                     <div className="name-view-profile-container">
//                       <p>Micheal Adekunle</p>
//                       <p className="colored-view-profile">View profile</p>
//                     </div>
//                   </div>
//                   <div className="attribute-fixed-width email-record">
//                     Vivian@gmail.com
//                   </div>
//                   <div className="attribute-fixed-width request-record reschedules">
//                     Reschedules
//                   </div>
//                   <div className="attribute-fixed-width date-record">
//                     Today, 10 May 2023
//                   </div>
//                   <div className="delete-view-btn">
//                     <div className="view-button">View</div>
//                     <div className="delete-button">Delete</div>
//                   </div>
//                 </div>
//                 <div className="list-container">
//                   <div className="s-n">8</div>
//                   <div className="attribute-fixed-width patient-profile-record">
//                     <div className="profile-img-view"></div>
//                     <div className="name-view-profile-container">
//                       <p>Micheal Adekunle</p>
//                       <p className="colored-view-profile">View profile</p>
//                     </div>
//                   </div>
//                   <div className="attribute-fixed-width email-record">
//                     Vivian@gmail.com
//                   </div>
//                   <div className="attribute-fixed-width request-record reschedules">
//                     Reschedules
//                   </div>
//                   <div className="attribute-fixed-width date-record">
//                     Today, 10 May 2023
//                   </div>
//                   <div className="delete-view-btn">
//                     <div className="view-button">View</div>
//                     <div className="delete-button">Delete</div>
//                   </div>
//                 </div>
//                 <div className="list-container">
//                   <div className="s-n">8</div>
//                   <div className="attribute-fixed-width patient-profile-record">
//                     <div className="profile-img-view"></div>
//                     <div className="name-view-profile-container">
//                       <p>Micheal Adekunle</p>
//                       <p className="colored-view-profile">View profile</p>
//                     </div>
//                   </div>
//                   <div className="attribute-fixed-width email-record">
//                     Vivian@gmail.com
//                   </div>
//                   <div className="attribute-fixed-width request-record reschedules">
//                     Reschedules
//                   </div>
//                   <div className="attribute-fixed-width date-record">
//                     Today, 10 May 2023
//                   </div>
//                   <div className="delete-view-btn">
//                     <div className="view-button">View</div>
//                     <div className="delete-button">Delete</div>
//                   </div>
//                 </div>
//                 <div className="list-container">
//                   <div className="s-n">8</div>
//                   <div className="attribute-fixed-width patient-profile-record">
//                     <div className="profile-img-view"></div>
//                     <div className="name-view-profile-container">
//                       <p>Micheal Adekunle</p>
//                       <p className="colored-view-profile">View profile</p>
//                     </div>
//                   </div>
//                   <div className="attribute-fixed-width email-record">
//                     Vivian@gmail.com
//                   </div>
//                   <div className="attribute-fixed-width request-record reschedules">
//                     Reschedules
//                   </div>
//                   <div className="attribute-fixed-width date-record">
//                     Today, 10 May 2023
//                   </div>
//                   <div className="delete-view-btn">
//                     <div className="view-button">View</div>
//                     <div className="delete-button">Delete</div>
//                   </div>
//                 </div>
//                 <div className="list-container">
//                   <div className="s-n">8</div>
//                   <div className="attribute-fixed-width patient-profile-record">
//                     <div className="profile-img-view"></div>
//                     <div className="name-view-profile-container">
//                       <p>Micheal Adekunle</p>
//                       <p className="colored-view-profile">View profile</p>
//                     </div>
//                   </div>
//                   <div className="attribute-fixed-width email-record">
//                     Vivian@gmail.com
//                   </div>
//                   <div className="attribute-fixed-width request-record reschedules">
//                     Reschedules
//                   </div>
//                   <div className="attribute-fixed-width date-record">
//                     Today, 10 May 2023
//                   </div>
//                   <div className="delete-view-btn">
//                     <div className="view-button">View</div>
//                     <div className="delete-button">Delete</div>
//                   </div>
//                 </div>
//                 <div className="list-container">
//                   <div className="s-n">8</div>
//                   <div className="attribute-fixed-width patient-profile-record">
//                     <div className="profile-img-view"></div>
//                     <div className="name-view-profile-container">
//                       <p>Micheal Adekunle</p>
//                       <p className="colored-view-profile">View profile</p>
//                     </div>
//                   </div>
//                   <div className="attribute-fixed-width email-record">
//                     Vivian@gmail.com
//                   </div>
//                   <div className="attribute-fixed-width request-record reschedules">
//                     Reschedules
//                   </div>
//                   <div className="attribute-fixed-width date-record">
//                     Today, 10 May 2023
//                   </div>
//                   <div className="delete-view-btn">
//                     <div className="view-button">View</div>
//                     <div className="delete-button">Delete</div>
//                   </div>
//                 </div>
//                 <div className="list-container">
//                   <div className="s-n">8</div>
//                   <div className="attribute-fixed-width patient-profile-record">
//                     <div className="profile-img-view"></div>
//                     <div className="name-view-profile-container">
//                       <p>Micheal Adekunle</p>
//                       <p className="colored-view-profile">View profile</p>
//                     </div>
//                   </div>
//                   <div className="attribute-fixed-width email-record">
//                     Vivian@gmail.com
//                   </div>
//                   <div className="attribute-fixed-width request-record reschedules">
//                     Reschedules
//                   </div>
//                   <div className="attribute-fixed-width date-record">
//                     Today, 10 May 2023
//                   </div>
//                   <div className="delete-view-btn">
//                     <div className="view-button">View</div>
//                     <div className="delete-button">Delete</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminPatientView;
