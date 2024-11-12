import React, { useEffect, useState } from 'react';
import '../styles/profile.css';
import Navbar from '../components/Navbar';
import logo from '../../src/logo192.png';

const Profile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('email');

    if (storedUsername && storedEmail) {
      setUsername(storedUsername);
      setEmail(storedEmail);
    } else {
      // Optionally handle case where data is not found
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="profile-section">
        <h1>ACCOUNT INFORMATION</h1>
        <div className="profile-container">
          <div className="profile-info">
            <div>
              <img src={logo} alt="Profile" className="pfp" />
            </div>
            <h2 className="name">{username || 'Loading...'}</h2>
            <h2 className="name">9315715875</h2>
            <br />
            <h3>SRM Email</h3>
            <div className="pemail-display">
              <h2>{email || 'Loading...'}</h2>
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