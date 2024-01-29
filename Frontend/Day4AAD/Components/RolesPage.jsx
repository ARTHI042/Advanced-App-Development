// RolesPage.jsx
import './RolesPage.css';
import './Login';
import './SignUp';
import './Adsignup';
import './About';
import './Contact';
import { Link } from 'react-router-dom';
const RolesPage = () => {
  return (
    <div>
        <div className="body11">
      <nav>
        <div className="menu">
          <div className="logo">
            <a href="#">SplashInn</a>
          </div>
         <ul>
            
            <Link to="/about"><li><a href="#">About</a></li></Link>
            <Link to="/contact"><li><a href="#">Contact</a></li></Link>
          
            
          </ul> 
        </div>
      </nav>
      <div className="imgbg">
        <div className="overlay"></div>
      </div>
      <div className="center">
        <div className="title">More than just your place to stay</div>
        <div className="sub_title">Choose your role</div>
        <div className="btns">
          <Link to="/adsignup"><button>ADMIN</button></Link>
          <Link to="/signup"><button>USER</button></Link>
        </div>
      </div>
    </div>
    </div>

  );
};

export default RolesPage;
