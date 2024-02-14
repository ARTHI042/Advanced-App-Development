import './Contact.css'
import { FaInstagram, FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa'; 
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import logoo from '../pics/logoo.png'
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to handle form submission (e.g., send data to a server)
        console.log('Form submitted:', formData);
        toast.success('Feedback submitted successfully!', {
          position: 'bottom-right',
           autoClose: 3000, 
           hideProgressBar: false,
          closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
   })
      };    
  return (
<div className="contact-container">
      <div className="cnav">
        <nav>
          <div className="menu">
            <div className="logo">
              <a href="#">SplashInn</a>
            </div>
            <ul>
            <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/">Back</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="home-container1">
    
    
   
    <div className='contact-left'>
        <div className='contact-image'>
            <img src='https://img.freepik.com/free-photo/office-desktop-with-laptop-business-man_23-2148174084.jpg?w=900&t=st=1706291919~exp=1706292519~hmac=1c6200afe7136da6efe943c84d25a45d4734c5ba09f35b5a1ab828d6a5b69c47' alt='Image' width='100%'></img>
        </div>
    </div>
        <div className="contact-form-container">
        <h1>CONTACT US</h1><p></p>
        <p><strong>Send us your valuble feedback </strong></p>
        <p></p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name"><strong>Name:</strong></label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

            <label htmlFor="email"><strong>Email:</strong></label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

            <label htmlFor="message"><strong>Message:</strong></label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required ></textarea>
<div className="but">
            <button type="submit">Send Message</button></div>
        </form>

        <div className="social-icons">
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

    
  )
}

export default Contact
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './Contact.css'; 

// const ContactPage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleInputChange = (e, setterFunction) => {
//     setterFunction(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Feedback submitted:", { name, email, message });

//     toast.success('Feedback submitted successfully!', {
//       position: 'bottom-right',
//       autoClose: 3000, 
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//     });
//   };

//   return (
//     <div className="page-container">
//     <div className="top-bar">
//         <Link to="/" className="button01">Back</Link>
//       </div>
//     <div className="contact-container">
      
//       <h1>Contact Us</h1>
//       <p>We value your feedback! Please share your thoughts with us.</p>
//       <form className="contact-form" onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" value={name} onChange={(e) => handleInputChange(e, setName)} required />

//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" value={email} onChange={(e) => handleInputChange(e, setEmail)} required />

//         <label htmlFor="message">Your Feedback:</label>
//         <textarea id="message" rows="4" value={message} onChange={(e) => handleInputChange(e, setMessage)} required />
// <div className="good">
//         <button type="submit">Submit Feedback</button></div>
//       </form>
//       <ToastContainer />
//     </div></div>
//   );
// };

// export default ContactPage;
