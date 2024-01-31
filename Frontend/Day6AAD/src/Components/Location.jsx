// import React from 'react';
import './Location.css';
import { Link } from 'react-router-dom';

const ChooseLocation = () => {
  return (
    <div className="loc">
      <nav className='navi5'>
       
       <Link to="/dashboard">Back</Link>
     </nav>
    <div className="choose-location">
      <h1>Choose your Location</h1>
      <div className="box-con">
      <Link to="/kerala"><div className="bo bbox1">KERALA</div></Link>
      <Link to="/kashmir"><div className="bo bbox2">KASHMIR</div></Link>
      <Link to="/Maha"><div className="bo bbox3">MAHARASHTRA</div></Link>
      <Link to="/goa"><div className="bo bbox4">GOA</div></Link>
      </div>
    </div>
    </div>
  );
};

export default ChooseLocation;
