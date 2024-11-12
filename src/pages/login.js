import React, { useState } from 'react';
import '../styles/login.css';
import Navbar from '../components/Navbar';
import bgvideo from '../images/bgvideo.mp4';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });
  
      // Store JWT, username, and email in localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', response.data.user.username);
      localStorage.setItem('email', response.data.user.email);
  
      navigate('/profile');
    } catch (err) {
      setError('Invalid email or password');
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
          <h2>Login to your Account</h2>
          <p>Welcome back! Select method to log in:</p>
          <button className="google-btn">
            <div className="google-btn-content">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
                alt="Google"
                className="google-logo"
              />
            </div>
          </button>
          <div className="separator">
            <span>or continue with SRM email</span>
          </div>
          <form onSubmit={handleLogin}>
            <div className="input-box">
              <input
                type="text"
                placeholder="SRM Email"
                className="login-input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                className="login-input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <div className="options">
              <label className="remember-me">
                <input type="checkbox" className="checkbox" />
                Remember me
              </label>
              <a href="http://localhost:3000/otp" className="forgot-password">
                Forgot Password?
              </a>
            </div>
            <button className="login-btn" type="submit">
              LOG IN
            </button>
          </form>
          <p className="create-account">
            Don't have an account?{' '}
            <a href="http://localhost:3000/register" className="create-account-link">
              Create an account
            </a>
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

export default Login;
