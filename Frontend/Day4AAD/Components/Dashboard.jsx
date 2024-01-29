// import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Import your CSS file for styling

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>SplashInn</h1>
        <div className="profile-logo">
          {/* Replace the image source with your profile image URL */}
          <img src="profile-image-url.jpg" alt="Profile" />
        </div>
      </header>
      <div className="main-container">
        <div className="navcontainer">
          <nav className="nav">
            <div className="nav-upper-options">
              <div className="nav-option option1">
                <h3>SPLASHINN</h3>
              </div>
              <Link to="/postdetails">
                <div className="nav-option option5">
                  <h3>Your Details</h3>
                </div>
              </Link>
              <Link to="/policy">
                <div className="nav-option option5">
                  <h3> Booking </h3>
                </div>
              </Link>
              <Link to="/policycomp">
                <div className="nav-option option5">
                  <h3> Compare And Buy</h3>
                </div>
              </Link>
              <Link to="/claim1">
                <div className="nav-option option4">
                  <h3> Payment History</h3>
                </div>
              </Link>
              {/* <Link to="/renewal">
                <div className="nav-option logout">
                  <h3>Renewal</h3>
                </div>
              </Link> */}
              <Link to="/accman">
                <div className="nav-option option6">
                  <h3>Account Management</h3>
                </div>
              </Link>
              <Link to="/">
                <div className="nav-option logout">
                  <h3>Logout</h3>
                </div>
              </Link>
            </div>
          </nav>
        </div>
        <div className="main">
          <div className="searchbar2">
            <input type="text" name="" id="" placeholder="Search" />
            <div className="searchbtn">
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
                className="icn srchicn"
                alt="search-button"
              />
            </div>
          </div>
          <div className="report-body">
            <div className="box-container">
              <div className="box box1">
                <div className="text">
                  <h6 className="topic-heading">10k+</h6>
                  <h2 className="topic">Active Customer</h2>
                </div>
              </div>

              <div className="box box2">
                <div className="text">
                  <br></br>
                  <h2 className="topic-heading">50+ </h2>
                  <h2 className="topic">Active Bookings</h2>
                </div>
              </div>

              <div className="box box3">
                <div className="text">
                  <br></br>
                  <h2 className="topic-heading">500+</h2>
                  <h2 className="topic">Available Boats</h2>
                </div>
              </div>
              <div className="box box4">
                <div className="text">
                  <br></br>
                  <h2 className="topic-heading">Highly</h2>
                  <h2 className="topic">Trusted Members</h2>
                </div>
              </div>
              <div className="report-header">
                <center>
                  <p>We are one of the largest online booking platform in India </p>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
