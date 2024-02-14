// import React from 'react';
import './Blogs.css'; // Import your CSS file
import { Link } from 'react-router-dom';
const BlogPage = () => {
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
    <div>
        <div className="fo"><h1>Blogs from Our Houseboating Customers</h1></div>
      <div className="blog-container">
        <div className="blog-image">
          <img src="https://source.unsplash.com/1600x900/?boathouse" alt="Blog Image" />
        </div>
        <div className="blog-info">
          <h2>A Tranquil Oasis on Water</h2>
          <p>Our houseboat experience was nothing short of magical. The gentle rocking of the boat, the stunning views of the surrounding nature, and the cozy interior made it a truly tranquil oasis. Waking up to the sound of water and enjoying sunsets on the deck created lasting memories. Highly recommended for those seeking a peaceful retreat.</p>
          <a href="#">Read More</a>
        </div>
      </div>
      <div className="blog-container">
        <div className="blog-image">
          <img src="https://source.unsplash.com/1600x900/?lake" alt="Blog Image" />
        </div>
        <div className="blog-info">
          <h2>Unforgettable Romantic Getaway</h2>
          <p>Our stay on the houseboat was a romantic dream come true. The intimate setting, with a private deck overlooking the water, set the stage for a perfect escape. The cozy bedroom, adorned with soft lighting, created a warm ambiance. It is an ideal choice for couples looking to rekindle romance amidst serene surroundings.</p>
          <a href="#">Read More</a>
        </div>
      </div>
      <div className="blog-container">
        <div className="blog-image">
          <img src="https://source.unsplash.com/1600x900/?dining" alt="Blog Image" />
        </div>
        <div className="blog-info">
          <h2>Family-Friendly Floating Paradise</h2>
          <p>Our family had an amazing time on the houseboat. The kids loved the unique experience of living on water, and the spacious interior provided a comfortable stay for all. Fishing off the deck and enjoying family meals with a picturesque backdrop made it a memorable vacation. The houseboat offered a perfect blend of adventure and relaxation for everyone</p>
          <a href="#">Read More</a>
        </div>
      </div>
      <div className="blog-container">
        <div className="blog-image">
          <img src="https://source.unsplash.com/1600x900/?boat" alt="Blog Image" />
        </div>
        <div className="blog-info">
          <h2>Exceptional Hospitality on Water</h2>
          <p>From the moment we stepped aboard, the hospitality exceeded our expectations. The houseboat crew went above and beyond to ensure our comfort and satisfaction. Delicious meals were served with a view, and the staff attention to detail was impressive. It felt like a luxury hotel on water. A truly remarkable experience that we will cherish.</p>
          <a href="#">Read More</a>
        </div>
      </div>
      <div className="blog-container">
        <div className="blog-image">
          <img src="https://source.unsplash.com/1600x900/?sunrise" alt="Blog Image" />
        </div>
        <div className="blog-info">
          <h2>Adventure Meets Luxury</h2>
          <p>Our houseboat adventure was the perfect combination of thrill and luxury. Exploring waterways during the day and returning to a well-appointed, stylish houseboat in the evening was the best of both worlds. The modern amenities and thoughtful design elevated the experience. If you are looking for a unique blend of adventure and comfort, this houseboat is the answer.</p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BlogPage;