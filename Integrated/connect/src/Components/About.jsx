import './About.css'
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa'; 

// import logoo from '../pics/logoo.png'
const About = () => {
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
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/">Back</Link>
              </li>
              <li></li>
            </ul>
          </div>
        </nav>
      </div>
    <div className="home-container">
      
    <div className="a-intro">
    {/* <div className="mine012">
           <Link to="/">
            <button>Back</button>
          </Link></div> */}
      <h1>About us</h1>
    </div>
    <p></p>
    <br></br>
    <div className="a-about">
        <p></p>
    
    <h2>Embark on a journey of aquatic elegance with our boat house booking application. Discover the magic of waking up to the gentle lapping of waves and the breathtaking views of the water. Effortlessly book your floating retreat, where every detail is designed for your comfort and convenience. Whether you are seeking a romantic getaway or a family adventure, our application opens the door to a world of nautical indulgence. Cast off the stress of planning and let the tides of relaxation guide you to your perfect destination. From luxury amenities to panoramic views, our boat houses redefine waterfront living. Secure your spot on the water, where every reservation is a ticket to an unforgettable experience. With just a click, you can set sail for tranquility, making memories that will linger like the echoes of seagulls over the horizon. Do not just stay; float in style with our boat house booking app – where every booking becomes a passport to aquatic bliss.</h2></div><br></br>
    <div className="a-about">
        <p></p>
        {/* <h2><strong>Our mission is to empower individuals to create and maintain their dream gardens right at home. 
            Whether you have a small balcony or a spacious backyard, our user-friendly
             application offers a wide range of features and resources to support your gardening journey.</strong></h2> */}
    </div>

    <div className='abt-foot'>
      <footer>
        <p>&copy; 2024 SPLASHINN. All rights reserved.</p>
      </footer>
      <div className="abt-social-icons">
            <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} style={{ margin: '0 10px', color: '#3498db' }} />
            </a>
            <a href="https://www.facebook.com/login/" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} style={{ margin: '0 10px', color: '#3498db' }} />
            </a> <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} style={{ margin: '0 10px', color: '#3498db' }} />
            </a>
            <a href="mailto:your@email.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope size={30} style={{ margin: '0 10px', color: '#3498db' }} />
            </a>
        </div>
      </div>

    </div>
    </div>
  )
}

export default About
// import './about.css';
// import { Link } from 'react-router-dom';

// function About() {
//   return (
//     <div className="body4">
//       <div className="head">
//         <center>
//           <h1>SplashInn</h1>
          
//         </center>
//       </div>
//       <div className="para24">
//         <br />
//         <br />
//         <br />

//         <p>
//           Embark on a journey of aquatic elegance with our boat house booking application. Discover the magic of waking up to the gentle lapping of waves and the breathtaking views of the water. Effortlessly book your floating retreat, where every detail is designed for your comfort and convenience. Whether you are seeking a romantic getaway or a family adventure, our application opens the door to a world of nautical indulgence. Cast off the stress of planning and let the tides of relaxation guide you to your perfect destination. From luxury amenities to panoramic views, our boat houses redefine waterfront living. Secure your spot on the water, where every reservation is a ticket to an unforgettable experience. With just a click, you can set sail for tranquility, making memories that will linger like the echoes of seagulls over the horizon. Do not just stay; float in style with our boat house booking app – where every booking becomes a passport to aquatic bliss.
//         </p>
//         <div className="list1">
//           <center>
//             <ul>
//               <li>Instant BoatHouse Booking</li>
//               <li>Guaranteed Comfort</li>
//               <li>100% Cancellation</li>
//               <li>Cheap plans</li>
//             </ul>
//           </center>
//         </div>
//         <br />
//         <br />
//         <br />
//         <div className="lo">
//           <p>
//             {' '}
//             Copyright 2024, Online Booking, Inc.<br />
//             All Rights Reserved.
//           </p>
//         </div>
//         <div className="mine012">
//           <Link to="/">
//             <button>Back</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;
