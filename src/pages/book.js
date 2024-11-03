import React from 'react';
import '../styles/book.css'; // Adjust the path as necessary
import Navbar from '../components/Navbar';

const Book = () => {
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
              <img src="photo" alt="Driver Icon" />
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

              <button className="cancel-button">CANCEL</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;