import React from 'react';
import '../styles/profile.css'; // Adjust the path as necessary
import Navbar from '../components/Navbar';
import contactImage from '../images/contact-taxi.png'
import logo from '../../src/logo192.png'
const Profile = () => {
  return (
    <>
    <Navbar />
    <div className="profile-section">
      <h1>ACCOUNT INFORMATION</h1>
      <div className="profile-container">
        <div className="profile-info">
            <div>
                <img src={logo} alt="image" border="0" className="pfp"/>
            </div>
            <h2 className="name">Utkarsh Jaiswal</h2>
            <h2 className="name">9315715875</h2>
            <br></br>
            <h3>SRM Email </h3>
          <div className="pemail-display">
            <h2>uj5768@srmist.edu.in</h2>
            <h4>Forgot password?</h4>
            <a href="/otp" className="change-email">Reset</a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;