// SignUp.jsx
import { useState } from 'react';
import './SignUp.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', formData);

      if (response.status === 200) {
        // Registration successful
        console.log('Registration successful:', formData);
        navigate('/Login')
      } else {
        // Handle registration failure
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };
  return (
    <div className="signbackground">
      <div className="signbox-align">
        <div className="signbox-container">
          <div className="s-form">
            <form onSubmit={handleSubmit}>
            <h2 className="s-title">Sign Up</h2>

            <div className="s-username">
              <label className="s-label" htmlFor="name">Username:</label>
              <input type="text" id="name" name="name" value={formData.name}
                onChange={handleChange} required className="s-input"  />
            </div>

            <div className="s-email">
              <label className="s-label" htmlFor="email">Email:</label>
              <input type="email" id="email" name="email"
                value={formData.email} onChange={handleChange} required className="s-input" />
            </div>

            <div className="s-password">
  <label className="s-label" htmlFor="password">Password:</label>
  <input type="password" id="password" name="password" value={formData.password}
    onChange={handleChange} required className="s-input" />
</div>

            <div >
            
              <button className="s-button" type="submit">Sign Up</button>
            </div>

            {/* <p id="error-message">{errorMessage}</p> */}
            <div className="s-login-link">
              <p>Already have an account? <a href='/login'>Login</a></p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;


