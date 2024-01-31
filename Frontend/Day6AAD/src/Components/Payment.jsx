// import React from 'react';
import './Payment.css';
import image from '../assets/QR.png';
import { Link } from 'react-router-dom';

function Payment() {
  return (
    <>
      <div className="comp10">
        <br />
        <center>
          <h1>PAYMENT PORTAL</h1>
        </center>
      </div>
      <div className="report-body10">
        <div className="box-container10"></div>
        <div className="box box8100">
          <div className="text">
            <center>
              <h1 className="topic10"></h1>
              <div className="comp1">
                <center>
                 
                  <p>Scan and pay</p>
                  <div className="input-box1">
                    <span className="icon">
                      <i className='bx bxs-envelope'></i>
                    </span>
                    <input type="text" placeholder='Coupon code:' required />
                  </div>
                  <br />
                  <img className="pic" src={image} />
                </center>
                <br />
                <div className="fine20">
                  <Link to="/bill">
                    <center>
                      <button onClick={() => window.location.href='https://pay.google.com/'}>
                        Generate Bill
                      </button>
                    </center>
                  </Link>
                </div>
              </div>
            </center>
          </div>
        </div>
      </div>
      <div className="mine10">
        <Link to="/dashboard">
          <button>Back to Dashboard</button>
        </Link>
      </div>
    </>
  );
}

export default Payment;
