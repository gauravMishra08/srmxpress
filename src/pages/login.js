import React from 'react';
import '../styles/login.css'; // Ensure you have the necessary styles in index.css

function Login() {
  return (
    <>
      <div className="container">
        <div className="login-box">
          <h2>Login to your Account</h2>
          <p>Welcome back! Select method to log in:</p>
          <button className="google-btn">
            <div className="google-btn-content">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google" className="google-logo" />
            </div>
            Continue with Google
          </button>
          <div className="separator">
            <span>or continue with SRM email</span>
          </div>
          <form>
            <div className="input-box">
              <input type="text" placeholder="SRM Email" className="input-field" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" className="input-field" />
            </div>
            <div className="options">
              <label className="remember-me">
                <input type="checkbox" className="checkbox" />
                Remember me
              </label>
              <a href="#" className="forgot-password">Forgot Password?</a>
            </div>
            <button className="login-btn" type="submit">LOG IN</button>
          </form>
          <p className="create-account">
            Don't have an account? <a href="#" className="create-account-link">Create an account</a>
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