import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../../src/logo192.png'; // Adjust the path as necessary

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src="https://i.ibb.co/4tDTjX3/srmexpress-logo-removebg-preview.png" alt="SRM Xpress Logo" className="brand-logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Book a Ride</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
      <div className="navbar-icons">
        <Link to="/notifications" className="icon">
          <i className="fas fa-bell"></i>
        </Link>
        <Link to="/profile" className="icon">
          <img src={logo} alt="Profile" className="profile-photo" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;