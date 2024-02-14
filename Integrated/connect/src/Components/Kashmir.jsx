import './Kashmir.css';
import { Link } from 'react-router-dom';
// import servicesimg from '../assets/servicesimg'
function Services() {
  return (

    <div className='services-container'> 
      <nav className='navi4'>
       
        <Link to="/location">Back</Link>
      </nav>
      
    <div className='academy'>
     <main>
    <div className="about-me">
      <div className='event11'><img src="https://images.pexels.com/photos/13671454/pexels-photo-13671454.jpeg?auto=compress&cs=tinysrgb&w=600" alt="me"></img>
      <p className='para'>This is the best option for cruising through the heavenly backwaters of Kashmir.<br></br>Location:SriNagar<br></br>Plan:2 NIGHTS / 3 DAYS<br></br>Cost:13,000/-</p>
     <Link to='/Booking'> <button className='button-33'>BOOK NOW</button></Link></div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className='event12'><img src="https://images.pexels.com/photos/11522584/pexels-photo-11522584.jpeg?auto=compress&cs=tinysrgb&w=600" alt="me"></img>
      <p className='para'>This is best for those who have ample time to spare. <br></br>Location:Nigeen Lake<br></br>Plan:3 NIGHTS / 4 DAYS<br></br>Cost:19,000/-</p><br></br>
      <Link to='/Booking'><button className='button-33'>BOOK NOW</button></Link>
      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className='event13'><img src="https://images.pexels.com/photos/19260643/pexels-photo-19260643/free-photo-of-a-houseboat-on-the-sea.jpeg?auto=compress&cs=tinysrgb&w=600" alt="me"></img>
      <p className='para'>Kashmir houseboat package in Kashmir is the longest among the packages, as it will take you beyond Kashmir. <br></br>Location:Sonwar Bagh<br></br>Plan:4 NIGHTS / 5 DAYS<br></br>Cost:26,000/- </p>
      <Link to='/Booking'><button className='button-33'>BOOK NOW</button></Link></div>
    </div>
    <div className="about-me1">
      <div className='event14'><img src="https://images.pexels.com/photos/3772087/pexels-photo-3772087.jpeg?auto=compress&cs=tinysrgb&w=600" alt="me"></img>
      <p className='para'>This is best for those who have ample time to spare.<br></br>Location:Champakulam<br></br>Plan:4 NIGHTS / 5 DAYS<br></br>Cost:26,000/-</p><Link to='/Booking'><button className='button-31'>BOOK NOW</button></Link></div>&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className='event15'><img src="https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=600" alt="me"></img>
      <p className='para'>This is best for those who have ample time to spare.<br></br>You can bathe in the breathtaking beauty of the Kashmir backwaters. <br></br>Location:Champakulam<br></br>Plan:4 NIGHTS / 5 DAYS<br></br>Cost:26,000/-</p><Link to='/Booking'><button className='button-31'>BOOK NOW</button></Link>
      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className='event16'><img src="https://images.pexels.com/photos/8462313/pexels-photo-8462313.jpeg?auto=compress&cs=tinysrgb&w=600" alt="me"></img>
      <p className='para'>This is best for those who have ample time to spare.<br></br>You can bathe in the breathtaking beauty of the Kashmir backwaters. <br></br>Location:Champakulam<br></br>Plan:3 NIGHTS / 4 DAYS<br></br>Cost:19,000/-</p><Link to='/Booking'><button className='button-31'>BOOK NOW</button></Link></div>
    </div>
    
  </main>
  </div>
    </div>
  );
}

export default Services;