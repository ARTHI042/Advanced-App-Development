import './Home.css';
import './Login';
import './SignUp';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa'; // Make sure to import the necessary icons
function Home() {
  return (
    <div className="body1">
      <div className="headersd">
        <h1>SplashInn</h1>  
      </div> 
      <main>
        <div className="intro23">
          <h1>BoatHouse Booking</h1>
          <h4>We manage waterfront holiday accommodation </h4>
          <p>Navigate seamless reservations and explore a curated selection of picturesque boathouses, 
            providing the perfect retreat for your waterfront getaway. Experience the ease of planning your next 
            waterside escape with our user-friendly interface and secure booking platform. </p>
          <div className="hop">
          <Link to="/dashboard"><button>Check Availability</button></Link>   </div>  
        </div>
      </main>
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
    
  );
}
export default Home;