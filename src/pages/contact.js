import React from 'react';
import '../styles/contact.css'; // Adjust the path as necessary
import Navbar from '../components/Navbar';
import contactImage from '../images/contact-taxi.png'
const Contact = () => {
  return (
    <>
    <Navbar />
    <div className="contact-us-section">
      <h1>CONTACT US</h1>
      <div className="contact-container">
        <div className="contact-form">
        <div className="input-box">
              <input type="text" placeholder="Name" className="login-input-field" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="SRM Email" className="email" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Mobile Number" className="phone" />
            </div>
          <select>
            <option>Select An Interest</option>
            <option>Booking</option>
            <option>Support</option>
            <option>General Inquiry</option>
          </select>
          <textarea placeholder="Message"></textarea>
        </div>
        <div className="contact-info">
          <div className="email-display">
            <h2>srmxpress.27@gmail.com</h2>
          </div>
          <div className="contact-image">
            <a href="https://ibb.co/ScvHGBQ">
              <img src={contactImage} alt="Screenshot-2024-09-28-151250" border="0" />
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;