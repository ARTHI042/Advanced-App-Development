import boat from '../assets/new.png';
import './Addash.css'; 
import { Link } from 'react-router-dom';
function Sidebar() {
  return (
    <div className="contact-container">
      <div className="cnav">
        <nav>
          <div className="menu">
            <div className="logo">
              <a href="#">SplashInn</a>
            </div>
            <ul>
              <li>
                <Link to="/addash">Dashboard</Link>
              </li>
              <li>
                <Link to="/">Logout</Link>
              </li>
              <li></li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="sidebar">
        <div className="brand">SPLASHINN</div>
        <div className="nav-links">
          <Link to="/addboat">Add Boat</Link>
          <Link to="/#">View all Boat</Link>
          <Link to="/#">View all Bookings</Link>
        </div>
      </div>
      <div className="additional-containers">
        <div className="container9">
        <img src={boat}></img>
         
        </div>
       
      </div>
    </div>
  );
}

export default Sidebar;

// // Sidebar.jsx

// // import React from 'react';
// import './Addash.css'; // Import your CSS file for styling if needed
// import { Link } from 'react-router-dom';

// function Sidebar() {
//   return (
//     // <div className="main-container">
//     // <Sidebar />
//     // <div className="content">
//     //   {/* Your main content goes here */}
//     //   <h1>Hello Admin</h1>
//     // </div>
//     <div className="contact-container">
//     <div className="cnav">
//       <nav>
//         <div className="menu">
//           <div className="logo">
//             <a href="#">SplashInn</a>
//           </div>
//           <ul>
//           <li>
//               <Link to="/home">Home</Link>
//             </li>
//          <li>
//               <Link to="/addash">Dashboard</Link>
//             </li>
           
            
//             <li>
//               <Link to="/">Logout</Link>
//             </li>
//             <li></li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//     <div className="sidebar">
//       <div className="brand">SPLASHINN</div>
//       <div className="nav-links">
//         <Link to="/location">Boat Management</Link>
//         <Link to="/profile">View all customers</Link>
//         <Link to="/">View all Bookings</Link>
//       </div>
//     </div>
//      </div>
//   );
// }

// export default Sidebar;
