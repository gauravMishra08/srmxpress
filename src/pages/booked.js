import React from 'react';
import '../styles/booked.css'; // Adjust the path as necessary
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom'

const Booked = () => {
  return (
    <div>
        <Navbar />  
      <title>SRMXpress - Nearby Drivers</title>
      <link rel="stylesheet" href="styles.css" />
      <div className="container">
        <div className="left-section">
          <div className="driver-box">
            <h1>Looking for nearby drivers</h1>
            <div className="icon">
            </div>

            <div className="ride-details">
              <p><strong>SRM Hotel gate</strong></p>
              <p>SRM - Main block</p>
              <p>SRM Hotel gate</p>
              <p><strong>Abode Valley</strong></p>
              <p>S 304, Kakkan St, Potheri, Chennai,</p>
              <p>Kattankulathur, Tamil Nadu</p>

              <button className="edit-button">EDIT OR ADD STOPS</button>

              <div className="fare">
                <p>RS 69.14</p>
                <p>Cash/Online</p>
              </div>
              <Link to="/" className='cancel-button'>Cancel</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booked;