import React from 'react';
import './about.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="body4">
      <div className="head">
        <center>
          <h1>SplashInn</h1>
          <p>Sail into Serenity: Your Premier Destination for Effortless Boat House Getaways</p>
        </center>
      </div>
      <div className="para">
        <br />
        <br />
        <br />
        <br />
        <p>
          Embark on a journey of aquatic elegance with our boat house booking application. Discover the magic of waking up to the gentle lapping of waves and the breathtaking views of the water. Effortlessly book your floating retreat, where every detail is designed for your comfort and convenience. Whether you are seeking a romantic getaway or a family adventure, our application opens the door to a world of nautical indulgence. Cast off the stress of planning and let the tides of relaxation guide you to your perfect destination. From luxury amenities to panoramic views, our boat houses redefine waterfront living. Secure your spot on the water, where every reservation is a ticket to an unforgettable experience. With just a click, you can set sail for tranquility, making memories that will linger like the echoes of seagulls over the horizon. Do not just stay; float in style with our boat house booking app – where every booking becomes a passport to aquatic bliss.
        </p>
        <div className="list1">
          <center>
            <ul>
              <li>Instant BoatHouse Booking</li>
              <li>Guaranteed Comfort</li>
              <li>100% Cancellation</li>
              <li>Cheap plans</li>
            </ul>
          </center>
        </div>
        <br />
        <br />
        <br />
        <div className="lo">
          <p>
            {' '}
            Copyright 2024, Online Booking, Inc.<br />
            All Rights Reserved.
          </p>
        </div>
        <div className="mine012">
          <Link to="/">
            <button>Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
