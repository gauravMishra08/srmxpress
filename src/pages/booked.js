import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/booked.css';
import QR from '../images/qrcode.jpg'; // Import the image

const Booked = () => {
  const location = useLocation();
  const { pickup, drop, distance, fare } = location.state || {};

  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="left-section">
          <div className="driver-box">
            <h1>Looking for nearby drivers</h1>
            <div className="ride-details">
              <p><strong>Pickup:</strong> {pickup || "N/A"}</p>
              <p><strong>Drop:</strong> {drop || "N/A"}</p>
              <p><strong>Distance:</strong> {distance ? `${distance.toFixed(2)} km` : "Calculating..."}</p>
              <div className="fare">
                <p><strong>Fare:</strong> ₹{fare ? fare.toFixed(2) : "Calculating..."}</p>
              </div>
              <Link to="/" className="cancel-button">Cancel</Link>
              <button onClick={openModal} className="pay-now-button">Pay Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button onClick={closeModal} className="close-modal">X</button>
            <div className="modal-content">
              {/* QR Code Image */}
              <img src={QR} alt="Payment" className="modal-image" />
              {/* Pickup, Drop, and Fare Details */}
              <div className="ride-details-modal">
                <p><strong>Pickup Location:</strong> {pickup || "N/A"}</p>
                <p><strong>Drop Location:</strong> {drop || "N/A"}</p>
                <p><strong>Fare:</strong> ₹{fare ? fare.toFixed(2) : "Calculating..."}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booked;
