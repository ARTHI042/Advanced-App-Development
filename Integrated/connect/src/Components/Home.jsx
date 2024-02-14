// Home.js
import boat from '../assets/new.png';
import './Home.css';
import './Login';
import './SignUp';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa';

function Home() {
  return (
    <div className="body1">
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
    <div className="body1">
      {/* <div className="headersde">
        <h1>SplashInn</h1>
      </div> */}
      <main>
        <centre><div className="logo1">
          <img src={boat}></img>
        </div></centre>
        <div className="intro23">
          {/* <h1>BoatHouse Booking</h1> */}
          <h4>We manage waterfront holiday accommodation</h4>
           <p>Navigate seamless reservations and explore a curated selection of picturesque boathouses,
            providing the perfect retreat for your waterfront getaway. Experience the ease of planning your next
            waterside escape with our user-friendly interface and secure booking platform. </p> 
        </div>
      </main>
      <section className="boat-class">
        <div className='boat-pic'>
          <img src="https://source.unsplash.com/1600x900/?boathouse"
            alt="Image"></img>
        </div>
        <section className="features">
          <div className="feature">
            <h3 className="do">User-Friendly Interface:</h3>
            <p>A clean and intuitive interface is crucial for any booking application. Users should be able to easily navigate through the app, search for boat houses, and make reservations without any complications.</p>
          </div>
          <div className="feature">
            <h3>Advanced Search and Filters:</h3>
            <p>Implementing advanced search and filtering options allows users to refine their search based on preferences such as location, boat type, amenities, and pricing. This enhances the overall user experience and helps customers find the perfect boat house for their needs.</p>
          </div>
          <div className="feature">
            <h3>Review and Rating System:</h3>
            <p>Including a review and rating system allows users to share their experiences with specific boat houses. This not only helps future customers make informed decisions but also encourages boat house owners to maintain high-quality services.</p>
          </div>
        </section>
      </section>

      <div className='foot'>
        <footer>
          <p>&copy; 2024 SPLASHINN. All rights reserved.</p>
        </footer>
        <div className="home-social-icons">
          <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} style={{ margin: '0 10px', color: '#3498db' }} />
          </a>
          <a href="https://www.facebook.com/login/" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} style={{ margin: '0 10px', color: '#3498db' }} />
          </a>
          <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} style={{ margin: '0 10px', color: '#3498db' }} />
          </a>
          <a href="mailto:your@email.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={30} style={{ margin: '0 10px', color: '#3498db' }} />
          </a>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Home;
