import React, { useEffect, useState } from 'react';
import '../styles/profile.css'; // Adjust the path as necessary
import Navbar from '../components/Navbar';
import logo from '../../src/logo192.png'

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch('/api/user');
      const data = await response.json();
      setUser(data);
    };
    fetchUserData();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="profile-section">
        <h1>ACCOUNT INFORMATION</h1>
        <div className="profile-container">
          <div className="profile-info">
            <div>
              <img src={user.profilePicture || logo} alt="Profile" className="pfp" />
            </div>
            <h2 className="name">{user.name}</h2>
            <h2 className="name">{user.phone}</h2>
            <br />
            <h3>SRM Email</h3>
            <div className="pemail-display">
              <h2>{user.email}</h2>
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