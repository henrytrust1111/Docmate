import React, { useState } from "react";
import "./AdminAssignDoctor.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-hot-toast";

const AdminAssignDoctor = () => {
  const [doctorName, setDoctorName] = useState("");
  const [fee, setFee] = useState(3000);
  const [time, setTime] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [date, setDay] = useState("");
  const [doctorsReview, setDoctorsReview] = useState(null);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const data = { doctorName, fee, time, speciality, date };
  const id = localStorage.getItem("userAppointmentID");
  const Url = `https://doc-mate.onrender.com/createAppointment/${id}`;
  const loggedInHospital = JSON.parse(localStorage.getItem("loggedInHospital"));
  const userToken = loggedInHospital?.token;

  const headers = {
    Authorization: `Bearer ${userToken}`,
  };

  const handleAssignDoc = async (e) => {
    e.preventDefault();

    if (!doctorName || !fee || !time || !speciality || !date) {
      toast.error("All fields are required.");
      return;
    }

    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      toast.error("Date cannot be in the past.");
      return;
    }

    const selectedTime = new Date(`1970-01-01T${time}:00`);
    const startTime = new Date("1970-01-01T08:00:00");
    const endTime = new Date("1970-01-01T16:00:00");

    if (selectedTime < startTime || selectedTime > endTime) {
      toast.error("Time must be between 8:00 AM and 4:00 PM.");
      return;
    }
    setLoading(true);

    try {
      const response = await axios.post(Url, data, { headers });
      setDoctorsReview(response);
      localStorage.setItem("doctorsReview", JSON.stringify(response.data));
      nav("/admin/adminAppointmentReview/adminAssignDoctor/bookingReview");
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while assigning the doctor.");
    }finally {
      setLoading(false);
    }
  };

  return (
    <div className="AdminAssignDoctor-page">
      <div className="AdminAssignDoctor-wrapper">
        <div className="AdminAssignDoctor-content-container">
          <div className="AdminAssignDoctor-content-title">
            <h1 className="assign-doctor-title">Assign a Doctor</h1>
          </div>
          <div className="AdminAssignDoctor-content-inputs">
            <div className="AdminAssignDoctor-content-inputs-wrapper">
              <label className="AdminAssignDoctor-content-label" id="AdminAssignDoctor-content-label">
                Doctor's name:
              </label>
              <input
                type="text"
                className="AdminAssignDoctor-input-input"
                id="AdminAssignDoctor-input-input"
                onChange={(e) => setDoctorName(e.target.value)}
              />
            </div>
            <div className="AdminAssignDoctor-content-inputs-wrapper">
              <label className="AdminAssignDoctor-content-label" id="AdminAssignDoctor-content-label">
                Doctor's Speciality:
              </label>
              <input
                type="text"
                className="AdminAssignDoctor-input-input"
                id="AdminAssignDoctor-input-input"
                onChange={(e) => setSpeciality(e.target.value)}
              />
            </div>
            <div className="AdminAssignDoctor-content-inputs-wrapper">
              <label className="AdminAssignDoctor-content-label" id="AdminAssignDoctor-content-label">
                Day of appointment:
              </label>
              <input
                type="date"
                className="AdminAssignDoctor-input-input"
                id="AdminAssignDoctor-input-input"
                onChange={(e) => setDay(e.target.value)}
              />
            </div>
            <div className="AdminAssignDoctor-content-inputs-wrapper">
              <label className="AdminAssignDoctor-content-label" id="AdminAssignDoctor-content-label">
                Time of appointment:
              </label>
              <input
                type="time"
                className="AdminAssignDoctor-input-input"
                id="AdminAssignDoctor-input-input"
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div className="AdminAssignDoctor-content-inputs-wrapper">
              <label className="AdminAssignDoctor-content-label" id="AdminAssignDoctor-content-label">
                Fee:
              </label>
              <input
                type="text"
                className="AdminAssignDoctor-input-input"
                id="AdminAssignDoctor-input-input"
                value={fee}
                onChange={(e) => setFee(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="AdminAssignDoctor-proceed-btn-container">
          <div className="proceed-btn" onClick={handleAssignDoc}>
          {loading ? "Proceeding..." : "Proceed"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAssignDoctor;











