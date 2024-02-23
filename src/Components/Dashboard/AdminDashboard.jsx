import React from "react";
import "./AdminDashboard.css";
import AdminHeader from "./AdminHeader";
import AdminLeftNav from "./AdminLeftNav";
import AdminRightNav from "./AdminRightNav";
import AdminAppointmentReview from "./AdminAppointmentReview";
import AdminAssignDoctor from "./AdminAssignDoctor";
import AdminBookingReview from "./AdminBookingReview";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard-container">
      <AdminHeader />
      <div className="admin-dashboard-holder">
        <AdminLeftNav />
        {/* <AdminRightNav /> */}
        {/* <AdminAppointmentReview /> */}
        {/* <AdminAssignDoctor /> */}
        <AdminBookingReview />
      </div>
    </div>
  );
};

export default AdminDashboard;
