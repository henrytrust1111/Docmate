import "./PatientRescheduleForm.css";
import { RiErrorWarningLine } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";
import { MdOutlineCancel } from "react-icons/md";
import { useState } from "react";
import axios from "axios"
import { useParams } from "react-router-dom";

const PatientRescheduleForm = () => {

    const [date, SetDate] = useState()
    const [time, SetTime] = useState()
    const [reasonForReschedule, SetReasonForReschedule] = useState()

    const params = useParams();
    const appointmentId = params.appointmentId;

    console.log(appointmentId)

    const handleReschedule = async () => {
        try {
            const res = axios.put(
                `https://doc-mate.onrender.com/reschedule-app/${appointmentId}`, {
                date, time, reasonForReschedule
            })
            console.log(res)

        } catch (error) {
            console.log("error")

        }
    }

    return (
        <>
            <div className='RescheduleMaincon'>
                <div className='RescheduleMainBody'>
                    <div className='Resleftside'>
                        <div className='ResleftsideUp'>
                            <div className='ResleftsideUpIcon1'></div>
                            <div className='ResleftsideUpIcon'>
                                <RiErrorWarningLine />
                            </div>
                        </div>
                        <div className='ResleftsideDown'>
                            <div className='ResleftsideDownwrapper'>
                                <div className='ResleftsideDownh3'>
                                    <h3>By rescheduling the appointment you must agree to these points:</h3>
                                </div>
                                <div className='ResleftsideDownPtagbox'>
                                    <div className='ResleftsideDownPtagswrap'>
                                        <div className='ResleftPtagsbox'>
                                            <div className='ResleftPtagsboxLeft'>
                                                <GoDotFill />
                                            </div>
                                            <div className='ResleftPtagsboxRight'>
                                                <p>Vivamus sogitis lacus vel augue
                                                    laoreet rutrum faucibus dolor auctor.</p>
                                            </div>
                                        </div>
                                        <div className='ResleftPtagsbox'>
                                            <div className='ResleftPtagsboxLeft'>
                                                <GoDotFill />
                                            </div>
                                            <div className='ResleftPtagsboxRight'>
                                                <p>Vivamus sogitis lacus vel augue
                                                    laoreet rutrum faucibus dolor auctor.</p>
                                            </div>
                                        </div>
                                        <div className='ResleftPtagsbox'>
                                            <div className='ResleftPtagsboxLeft'>
                                                <GoDotFill />
                                            </div>
                                            <div className='ResleftPtagsboxRight'>
                                                <p>Vivamus sogitis lacus vel augue
                                                    laoreet rutrum faucibus dolor auctor.</p>
                                            </div>
                                        </div>
                                        <div className='ResleftPtagsbox'>
                                            <div className='ResleftPtagsboxLeft'>
                                                <GoDotFill />
                                            </div>
                                            <div className='ResleftPtagsboxRight'>
                                                <p>Vivamus sogitis lacus vel augue
                                                    laoreet rutrum faucibus dolor auctor.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Resrightside'>
                        <div className='ResrightsideCancle'>
                            <MdOutlineCancel />
                        </div>
                        <div className='RescheduleApt'>
                            <h3>Reschedule Appiontment</h3>
                        </div>
                        <div className='RescheduleAptmnt'>
                            <div className='RescheduleAptmntUP'>
                                <div className='RescheduleAptmntUPWrap'>
                                    <div className='SelectAptmentUp'>
                                        <div className='SelectNewDateApt'>
                                            <p>Select new date of your appointment</p>
                                        </div>
                                        <div className='SelectCalenderApt'>
                                            <div className='SelectNewCalenderApt'>
                                                <input type="Date"
                                                    value={date}
                                                    onChange={(e) => SetDate(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='SelectAptmentDown'>
                                        <div className='SelectNewTimeApt'>
                                            <p>Select new time of your appointment</p>
                                        </div>
                                        <div className='SelectNewTimeAptBox'>
                                            <div className="SelectNewTimemainBox">
                                                <input type="Time"
                                                    value={time}
                                                    onChange={(e) => SetTime(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='RescheduleAptmntDown'>
                                <div className='RescheduleAptmntDownwrap'>
                                    <div className='RescheduleTimingNdSubmitdwn'>
                                        <div className='RescheduleSubmitdwnwrapp'>
                                            <div className='RescheduleCancelndSubmit'>
                                                <div className='ReschedulReasontextwrap'>
                                                    <textarea name="" id=""
                                                        placeholder='Reason for your reschedule?'
                                                        value={reasonForReschedule}
                                                        onChange={(e) => SetReasonForReschedule(e.target.value)}
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div className='RescheduleMainCancelndSubmit'> 
                                                <div className='RRescheduleMainSubmit'>
                                                    <button onClick={()=>handleReschedule()}>RESCHEDULE</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PatientRescheduleForm