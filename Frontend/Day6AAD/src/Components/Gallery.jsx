// ImageGrid.jsx

// import React from 'react';
import './Gallery.css'; // Import your CSS file for styling if needed
import { Link } from 'react-router-dom'; // Assuming you are using React Router

function ImageGrid() {
  const images = Array.from({ length: 24 }, (_, index) => `https://source.unsplash.com/1600x900/?boat?image=${index + 1}`);

  return (
    <div className="image-grid60">
      {images.map((imageUrl, index) => (
        <div className="box-container60" key={index}>
          <img src={imageUrl} alt={`Image ${index + 1}`} />
        </div>
      ))}
      <div className="back-button60">
        <Link to="/dashboard">
          <button>Back to Dashboard</button>
        </Link>
      </div>
    </div>
  );
}

export default ImageGrid;
