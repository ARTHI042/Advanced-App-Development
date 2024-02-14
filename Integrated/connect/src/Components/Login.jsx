import  { useState } from 'react';
import './Login.css'; // Import your CSS file
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Login = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateForm(newEmail, password);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validateForm(email, newPassword);
  };

  const validateForm = (newEmail, newPassword) => {
    // Example validation for email and password
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Basic email and password validation
    const isEmailValid = emailRegex.test(newEmail);
    const isPasswordValid = newPassword.length >= 6;

    // Update the button disabled state and error message
    setIsButtonDisabled(!(isEmailValid && isPasswordValid));
    setErrorMessage((!isEmailValid || !isPasswordValid) ? 'Invalid email or password' : '');
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
   try{
    const response=await axios.post('http://localhost:8080/api/v1/auth/authenticate',{
        email,
        password
      });
      console.log(response.data);
      console.log("Login sucessfull");
      localStorage.setItem('token',response.data.token)
      navigate('/Home');
    }
    catch(error){
      console.error('Login failed',error);
    }
  };

  return (
    
    <div className='flowers'>
      <div className="login-form-box">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>User Login</h2>
          <div className="s-email">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="s-password">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <p className="error-message">{errorMessage}</p>
          <div className="on">
          <button className={`submit-btn ${isButtonDisabled ? 'disabled' : ''}`} type="submit" disabled={isButtonDisabled}>
            Login
          </button></div>
          <h5 className="rem">Dont have an account?<Link to="/signup">Register</Link></h5>
        </form>
      </div>
    </div>
  );
};

export default Login;
