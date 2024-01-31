// import React from 'react';
import './Booking.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';
const RegistrationForm = () => {
  // Generate an array for the dropdown options (1 to 20)
  const personsOptions = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
    <div className="dude">
      <nav className='navi566'>
       
       <Link to="/location">Back</Link>
     </nav>
    <div className="registration-form-container">
      <h2>Enter Your Booking Details</h2>
      <form className="form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="mobile">Mobile Number:</label>
        <input type="tel" id="mobile" name="mobile" required />

        <label htmlFor="persons">Number of Persons:</label>
        <select id="persons" name="persons" required>
          {personsOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <div className="persons-details">
          <div>
            <label htmlFor="adults">Number of Adults:</label>
            <input type="number" id="adults" name="adults" min="1" max="20" required />
          </div>
          <div>
            <label htmlFor="children">Number of Children:</label>
            <input type="number" id="children" name="children" min="0" max="20" required />
          </div>
        </div>

        <Link to="/payment"><button type="submit" className="proceed-button">
          Proceed to Payment
        </button></Link>
      </form>
    </div>
    </div>
  );
};

export default RegistrationForm;
