import React from 'react';
import '../styles/login.css'; 
import Navbar from '../components/Navbar';
import bgvideo from '../images/bgvideo.mp4';

function Login() {
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
          <h2>Enter your new password</h2>
          <p>This is the last step in recovering your password</p>
          <form>
            <div className="input-box">
              <input type="text" placeholder="New Password" className="login-input-field" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Confirm Password" className="login-input-field" />
            </div>
            <div className="options">
              <label className="remember-me">
                <input type="checkbox" className="checkbox" />
                Remember me
              </label>
              <a href="http://localhost:3000/otp" className="forgot-password">Forgot Password?</a>
            </div>
            <button className="login-btn" type="submit">LOG IN</button>
          </form>
          <p className="create-account">
            Don't have an account? <a href="http://localhost:3000/register" className="create-account-link">Create an account</a>
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