import React from "react";
import "./AdminDashboard.css";
import AdminHeader from "./AdminHeader";
import AdminLeftNav from "./AdminLeftNav";
import AdminRightNav from "./AdminRightNav";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard-container">
      <AdminHeader />
      <div className="admin-dashboard-holder">
        <AdminLeftNav />
        <AdminRightNav />
      </div>
    </div>
  );
};

export default AdminDashboard;
