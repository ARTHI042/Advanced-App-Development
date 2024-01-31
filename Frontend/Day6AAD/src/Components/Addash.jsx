// Sidebar.jsx

// import React from 'react';
import './Addash.css'; // Import your CSS file for styling if needed
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    // <div className="main-container">
    // <Sidebar />
    // <div className="content">
    //   {/* Your main content goes here */}
    //   <h1>Hello Admin</h1>
    // </div>
  
    <div className="sidebar">
      <div className="brand">SPLASHINN</div>
      <div className="nav-links">
        <Link to="/profile">BoatHouse Management</Link>
        <Link to="/profile">User Management</Link>
        <Link to="/">Logout</Link>
      </div>
    </div>
    // </div>
  );
}

export default Sidebar;
