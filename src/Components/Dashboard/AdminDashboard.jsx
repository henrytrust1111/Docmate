import React, { useState } from "react";
import "./AdminDashboard.css";
import AdminHeader from "./AdminHeader";
import AdminLeftNav from "./AdminLeftNav";
import AdminRightNav from "./AdminRightNav";
import AdminAppointmentReview from "./AdminAppointmentReview";
import AdminAssignDoctor from "./AdminAssignDoctor";
import AdminBookingReview from "./AdminBookingReview";
import AdminRescheduleReview from "./AdminRescheduleReview";
import AdminPayment from "./AdminPayment";
import AdminPatientView from "./AdminPatientView";
import AdminProfile from "./AdminProfile";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  const [adminRightNav, setAdminRightNav] = useState(true);
  const [adminPatientView, setAdminPatientView] = useState(false);
  const [adminProfile, setAdminProfile] = useState(false);
  const [adminPayment, setAdminPayment] = useState(false);
  const [adminAppointmentReview, setAdminAppointmentReview] = useState(false);
  const [adminAssignDoctor, setAdminAssignDoctor] = useState(false);
  const [bookingReview, setBookingReview] = useState(false);
  console.log(adminRightNav);
  console.log(adminPatientView);
  console.log(adminProfile);
  console.log(adminPayment);
  console.log(adminAppointmentReview);
  console.log(adminAssignDoctor);
  console.log(bookingReview);

  return (
    <div className="admin-dashboard-container">
      <AdminHeader />
      <div className="admin-dashboard-holder">
        <AdminLeftNav />
        <Outlet />
        {/* <AdminLeftNav
          setAdminPatientView={setAdminPatientView}
          setAdminProfile={setAdminProfile}
          setAdminRightNav={setAdminRightNav}
          setAdminPayment={setAdminPayment}
          setAdminAppointmentReview={setAdminAppointmentReview}
          setAdminAssignDoctor={setAdminAssignDoctor}
        />
        {adminRightNav ? (
          <AdminRightNav
            setAdminPatientView={setAdminPatientView}
            setAdminProfile={setAdminProfile}
            setAdminRightNav={setAdminRightNav}
            setAdminPayment={setAdminPayment}
            setAdminAppointmentReview={setAdminAppointmentReview}
            setAdminAssignDoctor={setAdminAssignDoctor}
          />
        ) : adminAppointmentReview ? (
          <AdminAppointmentReview
            setAdminAppointmentReview={setAdminAppointmentReview}
            setAdminPatientView={setAdminPatientView}
            setAdminProfile={setAdminProfile}
            setAdminRightNav={setAdminRightNav}
            setAdminPayment={setAdminPayment}
            setAdminAssignDoctor={setAdminAssignDoctor}
            setBookingReview={setBookingReview}
          />
        ) : adminAssignDoctor ? (
          <AdminAssignDoctor
            setAdminAppointmentReview={setAdminAppointmentReview}
            setAdminPatientView={setAdminPatientView}
            setAdminProfile={setAdminProfile}
            setAdminRightNav={setAdminRightNav}
            setAdminPayment={setAdminPayment}
            setAdminAssignDoctor={setAdminAssignDoctor}
            setBookingReview={setBookingReview}
          />
        ) : bookingReview ? (
          <AdminBookingReview
            setBookingReview={setBookingReview}
            setAdminRightNav={setAdminRightNav}
          />
        ) : adminPatientView ? (
          <AdminPatientView />
        ) : adminPayment ? (
          <AdminPayment />
        ) : adminProfile ? (
          <AdminProfile />
        ) : null} */}

        {/* <AdminRescheduleReview /> */}
      </div>
    </div>
  );
};

export default AdminDashboard;
