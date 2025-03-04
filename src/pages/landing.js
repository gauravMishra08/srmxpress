import React, { useState } from 'react';
import '../styles/landing.css';
import Navbar from '../components/Navbar';
import home1 from '../images/home1.png'; // Import the image
import home2 from '../images/home2.png'; // Import the image
import home3 from '../images/home3.png'; // Import the image
import home4 from '../images/home4.png'; // Import the image  
import home5 from '../images/home5.png'; // Import the image
import home6 from '../images/home6.png'; // Import the image
import home7 from '../images/home7.png'; // Import the image
import facebook from '../images/Facebook.png'; // Import the image
import instagram from '../images/Instagram.png'; // Import the image
import twitter from '../images/Twitter.png'; // Import the image
import { Link, useNavigate } from 'react-router-dom';

const locations = [
  { key: 'SRM Arch Gate', location: { lat: 12.823077, lng: 80.041048 }},
  { key: 'Estancia', location: { lat: 12.828071, lng: 80.049303 }},
  { key: 'Abode', location: { lat: 12.817431, lng: 80.040277 }},
  { key: 'VGN', location: { lat: 12.819101, lng: 80.026906 }},
  { key: 'Potheri Railway Station', location: { lat: 12.820916, lng: 80.037085 }},
];

const haversineDistance = (loc1, loc2) => {
  const toRad = (angle) => (Math.PI / 180) * angle;
  const R = 6371; // Earth’s radius in km
  const dLat = toRad(loc2.lat - loc1.lat);
  const dLng = toRad(loc2.lng - loc1.lng);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(loc1.lat)) * Math.cos(toRad(loc2.lat)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in kilometers
};

const calculateFare = (distance) => {
  const baseRate = 50; // Base fare
  const ratePerKm = 10; // Rate per kilometer
  return baseRate + (distance * ratePerKm);
};

const Landing = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [distance, setDistance] = useState(null);
  const [fare, setFare] = useState(null);
  const navigate = useNavigate();

  const handleFindDriver = () => {
    const pickupLocation = locations.find(loc => loc.key === pickup)?.location;
    const destinationLocation = locations.find(loc => loc.key === destination)?.location;
    
    if (pickupLocation && destinationLocation) {
      const calculatedDistance = haversineDistance(pickupLocation, destinationLocation);
      setDistance(calculatedDistance);
      setFare(calculateFare(calculatedDistance));

      // Navigate to the Booked page with the distance and fare details
      navigate('/booked', {
        state: {
          pickup,
          drop: destination,
          distance: calculatedDistance,
          fare: calculateFare(calculatedDistance),
        }
      });
    } else {
      alert('Please select valid locations');
    }
  };

  return (
    <>
      <Navbar />
      <div className="landing-container">
        <header className="header">
          <img src={home1} alt="taxi" className="taxi-image" />
          <div className="ride-booking">
  <h1 style={{ fontSize: '2.5rem', marginBottom: '5px' }}>Need a Ride?</h1>
  <h1 style={{ fontSize: '2rem', marginTop: '0' }}>Book with <span className="highlight">SRMXPress</span> Now!</h1>      
  <div className="booking-form">
    <h1>Experience seamless campus commutes</h1>
    
    <div className="input-container">
      <label htmlFor="pickup">Your Pickup</label>
      <select 
        id="pickup" 
        value={pickup} 
        onChange={(e) => setPickup(e.target.value)}
      >
        <option value="">Select Pickup Location</option>
        {locations.map((loc, index) => (
          <option key={index} value={loc.key}>{loc.key}</option>
        ))}
      </select>
    </div>

    <div className="input-container">
      <label htmlFor="destination">Your Destination</label>
      <select 
        id="destination" 
        value={destination} 
        onChange={(e) => setDestination(e.target.value)}
      >
        <option value="">Select Destination</option>
        {locations.map((loc, index) => (
          <option key={index} value={loc.key}>{loc.key}</option>
        ))}
      </select>
    </div>

    <div className="options-container">
      <button className="find-driver-btn" onClick={handleFindDriver}>Find a Driver</button>
    </div>
  </div>
</div>

        </header>

        <section className="features">
          <h2>Why choose SRMXpress?</h2>
          <div className="features-cards">
            <div className="card">
              <img src={home2} alt="Effortless Registration" />
              <h3>Effortless Registration</h3>
              <p>Quick and secure sign-up using your SRM Email ID.</p>
            </div>
            <div className="card">
              <img src={home3} alt="Schedule in Advance" />
              <h3>Schedule in Advance</h3>
              <p>Plan your rides ahead of time with our scheduling feature.</p>
            </div>
            <div className="card">
              <img src={home4} alt="Your wallet will thank you" />
              <h3>Your wallet will thank you</h3>
              <p>We have the lowest fares available now.</p>
            </div>
          </div>
        </section>

        <section className="become-driver">
          <h2>Become a Driver</h2>
          <p>Sign up as a driver and become part of the SRMXpress community. Drive on your schedule and earn as you support campus commutes.</p>
          <Link to="/register" className="register-btn">Register Now</Link>      
        </section>

        <section className="how-it-works">
          <h2>How does it work?</h2>
          <div className="steps">
            <div className="step">
              <img src={home5} alt="Track" className="tracking-pic" />
              <h3>Track</h3>
              <p>Monitor your ride in real-time and stay informed with notifications.</p>
            </div>
            <div className="step">
              <img src={home6} alt="Sign up" />
              <h3>Sign up</h3>
              <p>Register with your SRM Email ID and password.</p>
            </div>
            <div className="step">
              <img src={home7} alt="Book a ride" />
              <h3>Book a ride</h3>
              <p>Choose your ride type, pickup, and drop-off points.</p>
            </div>
          </div>
        </section>

        <footer>
          <p>SRMXpress, SRM University, Kattankulathur, Chennai</p>
          <div className="social-icons">
            <a href="#"><img src={facebook} alt="Facebook" /></a>
            <a href="#"><img src={instagram} alt="Instagram" /></a>
            <a href="#"><img src={twitter} alt="Twitter" /></a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Landing;
