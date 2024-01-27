
import './Home.css';
import './Login';
import './SignUp';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
      <div className="body1">
      <header className="headersd">
        <h1>SplashInn</h1>  
      </header>
      <main>
        <div className="intro">
          <h1>BoatHouse Booking</h1>
          <h4>We manage waterfront holiday accommodation </h4>
          <p>Navigate seamless reservations and explore a curated selection of picturesque boathouses, 
            providing the perfect retreat for your waterfront getaway. Experience the ease of planning your next 
            waterside escape with our user-friendly interface and secure booking platform. </p>
          <Link to="/signup"><button>Check Availability</button></Link>     
        </div>
      </main>
      <div className="iconss"></div>
    </div>
    </div>
  );
}

export default Home;
