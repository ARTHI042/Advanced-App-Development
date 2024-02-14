import './Goa.css';
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
      <div className='event1'><img src="https://images.pexels.com/photos/5349466/pexels-photo-5349466.jpeg?auto=compress&cs=tinysrgb&w=600" alt="me"></img>
      <p className='para'>This is the best option for cruising through the heavenly backwaters of Goa.<br></br>Location:Calangute<br></br>Plan:2 NIGHTS / 3 DAYS<br></br>Cost:13,000/-</p>
     <Link to='/Booking'> <button className='button-33'>BOOK NOW</button></Link></div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className='event2'><img src="https://images.pexels.com/photos/9242873/pexels-photo-9242873.jpeg?auto=compress&cs=tinysrgb&w=600" alt="me"></img>
      <p className='para'>This is best for those who have ample time to spare.<br></br>You can bathe in the breathtaking beauty of the Goa backwaters. <br></br>Location:Siolim<br></br>Plan:3 NIGHTS / 4 DAYS<br></br>Cost:19,000/-</p><br></br>
      <button className='button-33'>BOOK NOW</button>
      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className='event3'><img src="https://images.pexels.com/photos/11273996/pexels-photo-11273996.jpeg?auto=compress&cs=tinysrgb&w=600" alt="me"></img>
      <p className='para'>Goa houseboat package in Goa is the longest among the packages, as it will take you beyond Goa.<br></br>You can bathe in the breathtaking beauty of the Kerala backwaters. <br></br>Location:Panaji<br></br>Plan:4 NIGHTS / 5 DAYS<br></br>Cost:26,000/- </p>
      <button className='button-33'>BOOK NOW</button></div>
    </div>
    {/* <div className="about-me1">
      <div className='event4'><img src="https://images.pexels.com/photos/19460850/pexels-photo-19460850/free-photo-of-men-working-in-the-field-during-harvest.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="me"></img>
      <p className='para'>This is best for those who have ample time to spare.<br></br>You can bathe in the breathtaking beauty of the Kerala backwaters. <br></br>Location:Champakulam<br></br>Plan:4 NIGHTS / 5 DAYS<br></br>Cost:26,000/-</p><button className='button-31'>BOOK NOW</button></div>&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className='event5'><img src="https://img.freepik.com/free-photo/organic-farm-harvests-fresh-fruit-vegetables-generated-by-ai_188544-36467.jpg?t=st=1706294658~exp=1706298258~hmac=c6e59c75ff88077c0501d0d77dfe8b799ca5c1c6111e2c44d271d7a47045ea94&w=2000" alt="me"></img>
      <p className='para'>This is best for those who have ample time to spare.<br></br>You can bathe in the breathtaking beauty of the Kerala backwaters. <br></br>Location:Champakulam<br></br>Plan:4 NIGHTS / 5 DAYS<br></br>Cost:26,000/-</p><button className='button-31'>BOOK NOW</button>
      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className='event6'><img src="https://img.freepik.com/free-photo/photorealistic-money-with-plant_23-2151027604.jpg?size=626&ext=jpg&ga=GA1.1.627563915.1683457253&semt=ais_ai_generated" alt="me"></img>
      <p className='para'>This is best for those who have ample time to spare.<br></br>You can bathe in the breathtaking beauty of the Kerala backwaters. <br></br>Location:Champakulam<br></br>Plan:3 NIGHTS / 4 DAYS<br></br>Cost:19,000/-</p><button className='button-31'>BOOK NOW</button></div>
    </div> */}
    
  </main>
  </div>
    </div>
  );
}

export default Services;