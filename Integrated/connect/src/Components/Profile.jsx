// App.js
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Profile.css'; // Import your CSS file


const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmpassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="loop">
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
      <div className="pcontainer">
        <div className="vegetables">
          <h2 className="wow">MY PROFILE</h2>
          <label htmlFor="firstName">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="vegetables">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="vegetables">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
       
        <div className="mi">
        <Link to="/dashboard">
          <button>Update Details</button>
        </Link>
      </div>
      </div>
      </div>
    </div>
  );
};

export default App;
