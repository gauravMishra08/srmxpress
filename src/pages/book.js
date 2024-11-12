// book.js
import React, { useState, useCallback } from 'react';
import Navbar from '../components/Navbar';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import '../styles/book.css';
import { Link, useNavigate } from 'react-router-dom';

const locations = [
    { key: 'SRM Arch Gate', location: { lat: 12.823077, lng: 80.041048 }},
    { key: 'Estancia', location: { lat: 12.828071, lng: 80.049303 }},
    { key: 'Abode', location: { lat: 12.817431, lng: 80.040277 }},
    { key: 'VGN', location: { lat: 12.819101, lng: 80.026906 }},
    { key: 'Potheri Railway Station', location: { lat: 12.820916, lng: 80.037085 }}
];

const haversineDistance = (loc1, loc2) => {
    const toRad = angle => (Math.PI / 180) * angle;
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

const BookRide = () => {
  const [selectedPickup, setSelectedPickup] = useState('Pick a location');
  const [selectedDrop, setSelectedDrop] = useState('Pick a location');
  const [directions, setDirections] = useState(null);
  const navigate = useNavigate();

  const selectedPickupLocation = locations.find(location => location.key === selectedPickup);
  const selectedDropLocation = locations.find(location => location.key === selectedDrop);

  const handleDirectionsCallback = useCallback((result) => {
    if (result !== null && result.status === 'OK') {
      setDirections(result);
    } else {
      setDirections(null);
    }
  }, []);

  const handleFindDriver = () => {
    if (selectedPickupLocation && selectedDropLocation) {
      const distance = haversineDistance(
        selectedPickupLocation.location,
        selectedDropLocation.location
      );
      const fare = calculateFare(distance);

      navigate('/booked', {
        state: {
          pickup: selectedPickup,
          drop: selectedDrop,
          distance,
          fare
        }
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="left-section">
          <div className="full-box">
            <h1>NEED A RIDE?</h1>
            <hr className="divider" />
            <h2>Book with <span className="highlight">SRMXpress</span> now!</h2>

            <div className="ride-form">
              <label htmlFor="pickup">Find a ride</label>
              <select id="pickup" onChange={(e) => setSelectedPickup(e.target.value)}>
                {['Pick a location', ...locations.map(loc => loc.key)].map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>

              <label htmlFor="drop">Drop location</label>
              <select id="drop" onChange={(e) => setSelectedDrop(e.target.value)}>
                {['Pick a location', ...locations.map(loc => loc.key)].map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>

              <button onClick={handleFindDriver} className='find'>Find a driver</button>            
            </div>
          </div>
        </div>
        <div className="right-section">
          <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
              mapContainerStyle={{ width: '430px', height: '400px' }}
              defaultCenter={{ lat: 12.823362753735854, lng: 80.04445242591584 }}
              defaultZoom={16}
            >
              {selectedPickupLocation && selectedDropLocation && (
                <>
                  <DirectionsService
                    options={{
                      origin: selectedPickupLocation.location,
                      destination: selectedDropLocation.location,
                      travelMode: 'DRIVING',
                    }}
                    callback={handleDirectionsCallback}
                  />
                  {directions && (
                    <DirectionsRenderer options={{ directions }} />
                  )}
                </>
              )}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </>
  );
};

export default BookRide;
