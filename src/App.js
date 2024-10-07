import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import OTP from './pages/otp';
import Landing from './pages/landing';
import Contact from './pages/contact';
import Profile from './pages/profile';
import NewPass from './pages/newpass';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/profile" element={<Profile />} />
        <Route path="/newpass" element={<NewPass />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;