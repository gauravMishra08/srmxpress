import React, { useState } from 'react';
import axios from 'axios';
import '../styles/register.css';
import Navbar from '../components/Navbar';
import bgvideo from '../images/bgvideo.mp4';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // New state for success message
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/register', {
        username,
        email,
        password,
      });

      // Assuming the response contains a token on successful registration
      localStorage.setItem('token', response.data.token);
      
      // Set the success message
      setSuccessMessage('User registered successfully');
      setError('');

      // Delay the redirect by 2 seconds (2000 ms)
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      console.error('Error registering user:', error);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="video-background">
        <video autoPlay loop muted className="bg-video">
          <source src={bgvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="container">
        <div className="login-box">
          <h2>Create your Account</h2>
          <p>Unlock all features!</p>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                className="register-input-field"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="email"
                placeholder="SRM Email"
                className="register-input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                className="register-input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Confirm Password"
                className="register-input-field"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>} {/* Success message */}
            <div className="options">
              <label className="accept-terms">
                <input type="checkbox" className="checkbox" required />
                Accept <a href="#" className="terms-and-conditions">terms and conditions</a>
              </label>
            </div>
            <button className="login-btn" type="submit">Register</button>
          </form>
          <p className="login-to-account">
            You have an account? <a href="http://localhost:3000/login" className="create-account-link">Login now</a>
          </p>
        </div>
        <div className="image-box">
          <div className="vertical-line"></div>
          <img src="https://i.ibb.co/xXgG446/Untitled-design-4.png" alt="Right Side" />
        </div>
      </div>
    </>
  );
}

export default Register;
