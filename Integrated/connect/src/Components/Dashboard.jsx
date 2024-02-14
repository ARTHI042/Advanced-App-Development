// import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Import your CSS file for styling

const Dashboard = () => {
  return (
    <div className="newbody">
    <div className="dashboard-container">
      <div className="contact-container">
      <div className="cnav">
        <nav>
          <div className="menu">
            <div className="logo">
              <a href="#">SplashInn</a>
            </div>
            <ul>
            <li>
                <Link to="/home">Home</Link>
              </li>
           <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              
              <li>
                <Link to="/">Logout</Link>
              </li>
              <li></li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="main-container">
        <div className="navcontainer">
          <nav className="nav">
            <div className="nav-upper-options">
              <div className="nav-option option1">
                <h3>SPLASHINN</h3>
              </div>
              <Link to="/profile">
                <div className="nav-option logout">
                  <h3>Profile</h3>
                </div>
              </Link> 
              <Link to="/location">
                <div className="nav-option ">
                  <h3> View all boats </h3>
                </div>
              </Link>
              <Link to="/Accman">
                <div className="nav-option ">
                  <h3>Manage Bookings</h3>
                </div>
              </Link>
              <Link to="/gallery">
                <div className="nav-option">
                  <h3> Image Gallery</h3>
                </div>
              </Link>
              <Link to="/claim1">
                <div className="nav-option ">
                  <h3> Payment History</h3>
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
              <br></br>
              <div className="box box4">
                <div className="text">
                  <br></br>
                  <h2 className="topic-heading">Highly</h2>
                  <h2 className="topic">Trusted Members</h2>
                </div>
              </div>
              <div className="box box5">
                <div className="text">
                  <br></br>
                  <h2 className="topic-heading"> 100% </h2>
                  <h2 className="topic">Money saving guarantee</h2>
                </div>
              </div>
              <div className="box box6">
                <div className="text">
                  <br></br>
                  <h2 className="topic-heading">Secured</h2>
                  <h2 className="topic">User-Friendly Interface</h2>
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
    </div>
    </div>
  );
};

export default Dashboard;
