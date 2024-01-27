// RolesPage.jsx
import './RolesPage.css';
import './Login';
import './SignUp';
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
            
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Feedback</a></li>
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
          <button>ADMIN</button>
          <Link to="/"><button>USER</button></Link>
        </div>
      </div>
    </div>
    </div>

  );
};

export default RolesPage;
