import { useState } from 'react';
import './accman.css';
// import { Link } from 'react-router-dom';
import axios from 'axios';

function ProfileUpdate() {
  const [vehicle_id, setVehicleId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [vehicle_no, setVehicleNo] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      vehicle_id,
      name,
      email,
      vehicle_no,
      mobile,
      password,
    };

    const token = localStorage.getItem('token');

    if (!token) {
      console.error('No JWT token found.');
      return;
    }

    try {
      const response = await axios.put('http://127.0.0.1:8080/put', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data);
      setVehicleId('');
      setName('');
      setEmail('');
      setVehicleNo('');
      setMobile('');
      setPassword('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <header className="header700"></header>
      <div className="background"></div>
      <div className="container1">
        <div className="item"></div>
        <div className="login-section">
          <div className="form-box login">
            <form onSubmit={handleSubmit}>
              <h2>Manage Your Details</h2>
              {[
                { name: 'vehicle_id', placeholder: 'Vehicle_id', state: vehicle_id, setState: setVehicleId },
                { name: 'name', placeholder: 'Name', state: name, setState: setName },
                { name: 'email', placeholder: 'Email ID', state: email, setState: setEmail },
                { name: 'vehicle_no', placeholder: 'Vehicle number', state: vehicle_no, setState: setVehicleNo },
                { name: 'mobile', placeholder: 'Mobile', state: mobile, setState: setMobile },
                { name: 'password', placeholder: 'Password', state: password, setState: setPassword },
              ].map((input, index) => (
                <div className="input-box" key={index}>
                  <span className="icon"><i className='bx bxs-envelope'></i></span>
                  <input type="text" name={input.name} placeholder={input.placeholder} value={input.state} onChange={(e) => input.setState(e.target.value)} required />
                </div>
              ))}
              <button type="submit" className="btn">
                Done
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUpdate;
