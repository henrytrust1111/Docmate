import React from "react";
import "./PatientRescheduleForm.css";

const PatientRescheduleForm = () => {
  return (
    <div className="PatientRescheduleForm-container">
      <div className="PatientRescheduleForm-wrapper">
        <div className="PatientRescheduleForm-container1">
          <div className="PatientRescheduleForm-cancelBtn">
            <img src="/icons/cancelButton.svg" alt="cancelIcon" />
          </div>
        </div>
        <div className="PatientRescheduleForm-container2">
          <div className="PatientRescheduleForm-contentHolder">
            <div className="PatientRescheduleForm-title">
              <h2>Rescheduling</h2>
            </div>
            <div className="PatientRescheduleForm-subTitle">
              <p>Kindly select just a time suitable for you</p>
            </div>
            <div className="PatientRescheduleForm-tableContainer">
              <div className="PatientRescheduleForm-tableTitle">
                <div className="PatientRescheduleForm-tableTitle-container">
                  <div className="PatientRescheduleForm-tableBox1"></div>
                  <div className="PatientRescheduleForm-tableBox1"></div>
                  <div className="PatientRescheduleForm-tableBox2">
                    <h5 className="PatientRescheduleForm-h5">DAY</h5>
                  </div>
                  <div className="PatientRescheduleForm-tableBox1 tableBox1">
                    <h5 className="PatientRescheduleForm-h5">TIME</h5>
                  </div>
                  <div className="PatientRescheduleForm-tableBox2">
                    <h5 className="PatientRescheduleForm-h5">DOCTOR</h5>
                  </div>
                  <div className="PatientRescheduleForm-tableBox3">
                    <h5 className="PatientRescheduleForm-h5">SPECIALITY</h5>
                  </div>
                </div>
              </div>
              <div className="PatientRescheduleForm-tableContent-container">
                <div className="PatientRescheduleForm-tableContent">
                  <div className="PatientRescheduleForm-tableBox1">
                    <p>1</p>
                  </div>
                  <div className="PatientRescheduleForm-tableBox1">
                    <input type="checkbox" className="" />
                  </div>
                  <div className="PatientRescheduleForm-tableBox2">
                    <p>23rd-March-2024</p>
                  </div>
                  <div className="PatientRescheduleForm-tableBox1 tableBox1">
                    <p>12:pm</p>
                  </div>
                  <div className="PatientRescheduleForm-tableBox2">
                    <p>Dr Adekunle Bassey</p>
                  </div>
                  <div className="PatientRescheduleForm-tableBox3">
                    <p>Physician</p>
                  </div>
                </div>
                <div className="PatientRescheduleForm-tableContent">
                  <div className="PatientRescheduleForm-tableBox1">
                    <p>2</p>
                  </div>
                  <div className="PatientRescheduleForm-tableBox1">
                    <input type="checkbox" className="" />
                  </div>
                  <div className="PatientRescheduleForm-tableBox2">
                    <p>23rd-March-2024</p>
                  </div>
                  <div className="PatientRescheduleForm-tableBox1 tableBox1">
                    <p>12:pm</p>
                  </div>
                  <div className="PatientRescheduleForm-tableBox2">
                    <p>Dr Adekunle Bassey</p>
                  </div>
                  <div className="PatientRescheduleForm-tableBox3">
                    <p>Physician</p>
                  </div>
                </div>
                <div className="PatientRescheduleForm-tableContent">
                  <div className="PatientRescheduleForm-tableBox1">
                    <p>3</p>
                  </div>
                  <div className="PatientRescheduleForm-tableBox1">
                    <input type="checkbox" className="" />
                  </div>
                  <div className="PatientRescheduleForm-tableBox2">
                    <p>23rd-March-2024</p>
                  </div>
                  <div className="PatientRescheduleForm-tableBox1 tableBox1">
                    <p>12:pm</p>
                  </div>
                  <div className="PatientRescheduleForm-tableBox2">
                    <p>Dr Adekunle Bassey</p>
                  </div>
                  <div className="PatientRescheduleForm-tableBox3">
                    <p>Physician</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="PatientRescheduleForm-btnContainer">
              <div className="PatientRescheduleForm-btn">Book Appointment</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientRescheduleForm;
