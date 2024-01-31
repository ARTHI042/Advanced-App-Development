import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css'; // Import your CSS file for styling

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e, setterFunction) => {
    setterFunction(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", { name, email, message });
    // Add your logic to handle the feedback submission (e.g., send to server, display a confirmation message)

    // Display a success message
    toast.success('Feedback submitted successfully!', {
      position: 'bottom-right',
      autoClose: 3000, // 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div>
    <div className="top-bar">
        <Link to="/" className="button01">Back</Link>
      </div>
    <div className="contact-container">
      
      <h1>Contact Us</h1>
      <p>We value your feedback! Please share your thoughts with us.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => handleInputChange(e, setName)} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => handleInputChange(e, setEmail)} required />

        <label htmlFor="message">Your Feedback:</label>
        <textarea id="message" rows="4" value={message} onChange={(e) => handleInputChange(e, setMessage)} required />
<div className="good">
        <button type="submit">Submit Feedback</button></div>
      </form>
      <ToastContainer />
    </div></div>
  );
};

export default ContactPage;
