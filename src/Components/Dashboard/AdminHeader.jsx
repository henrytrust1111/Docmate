import React from 'react'
import "./AdminHeader.css"

const AdminHeader = () => {
  return (
    <header className='dashboard-header'>
        <div className="dashboard-header-wrapper">
            <div className="admin-dashboard-logo">
                <img src="./DocMate.png" alt="logo"/>
            </div>
            <div className="dashboard-search-bar">
                <div className="search-box">
                    <input type="text" className='search-input' placeholder='Search' />
                    <div className="search-icon">
                        <img src="/icons/search.svg" alt="search" />
                    </div>
                </div>
            </div>
            <div className="dashboard-right">
                <div className="notification">
                    <img src="/icons/notification.svg" alt="notification" />
                    <div className="notification-quantity">5</div>
                </div>
                <div className="dashboard-profile">
                    <div className="profile-image-holder"></div>
                    <p>Hi, Henry Trust</p>
                </div>
            </div>
        </div>
    </header>
  )
}

export default AdminHeader