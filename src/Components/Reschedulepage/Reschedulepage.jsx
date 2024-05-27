// import './Reschedulepage.css'
// import { RiErrorWarningLine } from "react-icons/ri";
// import { GoDotFill } from "react-icons/go";
// import { MdOutlineCancel } from "react-icons/md";

// const Rechedulepage = () => {
//       return (
//         <>
//             <div className='RescheduleMaincon'>
//                 <div className='RescheduleMainBody'>
//                     <div className='Resleftside'>
//                         <div className='ResleftsideUp'>
//                             <div className='ResleftsideUpIcon1'></div>
//                             <div className='ResleftsideUpIcon'>
//                                 <RiErrorWarningLine />
//                             </div>
//                         </div>
//                         <div className='ResleftsideDown'>
//                             <div className='ResleftsideDownwrapper'>
//                                 <div className='ResleftsideDownh3'>
//                                     <h3>By rescheduling the appointment you agree to these points:</h3>
//                                 </div>
//                                 <div className='ResleftsideDownPtagbox'>
//                                     <div className='ResleftsideDownPtagswrap'>
//                                         <div className='ResleftPtagsbox'>
//                                             <div className='ResleftPtagsboxLeft'>
//                                                 <GoDotFill />
//                                             </div>
//                                             <div className='ResleftPtagsboxRight'>
//                                                 <p>Vivamus sogitis lacus vel augue
//                                                     laoreet rutrum faucibus dolor auctor.</p>
//                                             </div>
//                                         </div>
//                                         <div className='ResleftPtagsbox'>
//                                             <div className='ResleftPtagsboxLeft'>
//                                                 <GoDotFill />
//                                             </div>
//                                             <div className='ResleftPtagsboxRight'>
//                                                 <p>Vivamus sogitis lacus vel augue
//                                                     laoreet rutrum faucibus dolor auctor.</p>
//                                             </div>
//                                         </div>
//                                         <div className='ResleftPtagsbox'>
//                                             <div className='ResleftPtagsboxLeft'>
//                                                 <GoDotFill />
//                                             </div>
//                                             <div className='ResleftPtagsboxRight'>
//                                                 <p>Vivamus sogitis lacus vel augue
//                                                     laoreet rutrum faucibus dolor auctor.</p>
//                                             </div>
//                                         </div>
//                                         <div className='ResleftPtagsbox'>
//                                             <div className='ResleftPtagsboxLeft'>
//                                                 <GoDotFill />
//                                             </div>
//                                             <div className='ResleftPtagsboxRight'>
//                                                 <p>Vivamus sogitis lacus vel augue
//                                                     laoreet rutrum faucibus dolor auctor.</p>
//                                             </div>
//                                         </div>
//                                     </div>

//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='Resrightside'>
//                         <div className='ResrightsideCancle'>
//                             <MdOutlineCancel />
//                         </div>
//                         <div className='RescheduleApt'>
//                             <h3>Reschedule Appiontment</h3>
//                         </div>
//                         <div className='RescheduleAptmnt'>
//                             <div className='RescheduleAptmntUP'>
//                                 <div className='RescheduleAptmntUPWrap'>
//                                     <div className='SelectAptmentUp'>
//                                         <div className='SelectNewDateApt'>
//                                             <p>Select new date of your appointment</p>
//                                         </div>
//                                         <div className='SelectCalenderApt'>
//                                             <div className='SelectNewCalenderApt'>
//                                                 <input type="Date" placeholder='Date' />
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className='SelectAptmentDown'>
//                                         <div className='SelectNewTimeApt'>
//                                             <p>Select new time of your appointment</p>
//                                         </div>
//                                         <div className='SelectNewTimeAptBox'>
//                                             <div className='SelectNewTimeAptBoxss'>
//                                                 <div className='SelectNewTimeBox1'>
//                                                     <div className='SelectNewtimeHour'>
//                                                         <h3>HOUR</h3>
//                                                     </div>
//                                                     <div className='SelectNewtimingHour'>
//                                                         <h3>_ _</h3>
//                                                     </div>
//                                                 </div>
//                                                 <div className='Timedotss'>:</div>
//                                                 <div className='SelectNewTimeBox2'>
//                                                     <div className='SelectNewminutes'>
//                                                         <h3>MINUTE</h3>
//                                                     </div>
//                                                     <div className='SelectNewminutesRead'>
//                                                         <h3>_ _</h3>
//                                                     </div>
//                                                 </div>
//                                             </div>

//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className='RescheduleAptmntDown'>
//                                 <div className='RescheduleAptmntDownwrap'>
//                                     <div className='RescheduleTimingNdSubmitup'>
//                                         <div className='RescheduleTimingpwrap'>
//                                             <div className='ResschTimingBox1'>
//                                                 <div className='ResschTimeBox'>
//                                                     <h3>7 AM</h3>
//                                                 </div>
//                                                 <div className='ResschTimeBox'>
//                                                     <h3>8 AM</h3>
//                                                 </div>
//                                                 <div className='ResschTimeBox'>
//                                                     <h3>9 AM</h3>
//                                                 </div>
//                                                 <div className='ResschTimeBox'>
//                                                     <h3>9 AM</h3>
//                                                 </div>
//                                             </div>
//                                             <div className='ResschTimingBox2'>
//                                                 <div className='ResschTimeBox'>
//                                                     <h3>10 AM</h3>
//                                                 </div>
//                                                 <div className='ResschTimeBox'>
//                                                     <h3>11 AM</h3>
//                                                 </div>
//                                                 <div className='ResschTimeBox'>
//                                                     <h3>12 PM</h3>
//                                                 </div>
//                                                 <div className='ResschTimeBox'>
//                                                     <h3>1 PM</h3>
//                                                 </div>
//                                             </div>
//                                             <div className='ResschTimingBox3'>
//                                                 <div className='ResschTimeBox'>
//                                                     <h3>2 PM</h3>
//                                                 </div>
//                                                 <div className='ResschTimeBox'>
//                                                     <h3>3 PM</h3>
//                                                 </div>
//                                                 <div className='ResschTimeBox'>
//                                                     <h3>4 PM</h3>
//                                                 </div>
//                                                 <div className='ResschTimeBox'>
//                                                     <h3>5 PM</h3>
//                                                 </div>
//                                             </div>
//                                             <div className='ResschTimingBox4'>
//                                                 <div className='ResschTimeBox'>
//                                                     <h3>6 PM</h3>
//                                                 </div>
//                                                 <div className='ResschTimeBox'>
//                                                     <h3>7 PM</h3>
//                                                 </div>
//                                                 <div className='ResschTimeBox'>
//                                                     <h3>8 PM</h3>
//                                                 </div>
//                                                 <div className='ResschTimeBox'>
//                                                     <h3>9 PM</h3>
//                                                 </div>
//                                             </div>

//                                         </div>
//                                     </div>
//                                     <div className='RescheduleTimingNdSubmitdwn'>
//                                         <div className='RescheduleSubmitdwnwrapp'>
//                                             <div className='RescheduleCancelndSubmit'>
//                                                 <div className='ReschedulReasontextwrap'>
//                                                    <textarea name="" id=""  
//                                                    placeholder='Reason for your reschedule?'
//                                                    ></textarea>
//                                                 </div>
//                                             </div>
//                                             <div className='RescheduleMainCancelndSubmit'>
//                                                 <div className='RRescheduleMainCancel'>
//                                                     <button>CANCEL</button>
//                                                 </div>
//                                                 <div className='RRescheduleMainSubmit'>
//                                                     <button>RESCHEDULE</button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//         </>

//     )

// }
// export default Rechedulepage