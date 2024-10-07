import React, { useState } from 'react';
import '../styles/otp.css';
import Navbar from '../components/Navbar';
import bgvideo from '../images/bgvideo.mp4';

function Login() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleInputChange = (index, event) => {
    const { value } = event.target;
    
    if (value.match(/^\d$/)) {
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index] = value;
        return newOtp;
      });

      if (index < otp.length - 1) {
        const nextInput = document.querySelector(`input:nth-child(${index + 2})`);
        nextInput.focus();
      }
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace') {
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index] = ''; 
        return newOtp;
      });

      if (index > 0) {
        const prevInput = document.querySelector(`input:nth-child(${index})`);
        prevInput.focus();
      }
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
          <h2>Enter OTP</h2>
          <p>Sent OTP on abcdef1234@srmist.edu.in</p>
          <form>
            <div className="input-box">
              {otp.map((value, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  placeholder="-"
                  className="input-field"
                  value={value}
                  onChange={(event) => handleInputChange(index, event)}
                  onKeyDown={(event) => handleKeyDown(index, event)}
                />
              ))}
            </div>
            <br />
            <button className="submit-btn" type="submit">
              SUBMIT
            </button>
          </form>
          <p className="login-to-account">
            <a href="http://localhost:3000/login" className="create-account-link">
              Resend OTP
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
