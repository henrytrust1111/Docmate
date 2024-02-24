import React from "react";
import "./AdminDashboard.css";
import AdminHeader from "./AdminHeader";
import AdminLeftNav from "./AdminLeftNav";
import AdminRightNav from "./AdminRightNav";
import AdminAppointmentReview from "./AdminAppointmentReview";
import AdminAssignDoctor from "./AdminAssignDoctor";
import AdminBookingReview from "./AdminBookingReview";
import AdminRescheduleReview from "./AdminRescheduleReview";
import AdminPayment from "./AdminPayment";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard-container">
      <AdminHeader />
      <div className="admin-dashboard-holder">
        <AdminLeftNav />
        {/* <AdminRightNav /> */}
        {/* <AdminAppointmentReview /> */}
        {/* <AdminAssignDoctor /> */}
        {/* <AdminBookingReview /> */}
        {/* <AdminRescheduleReview /> */}
        {/* <AdminPayment /> */}
      </div>
    </div>
  );
};

export default AdminDashboard;
