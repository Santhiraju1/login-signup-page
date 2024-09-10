import React from 'react';
import { FaCloudSun, FaUserCircle } from 'react-icons/fa'; // For app and profile icons
import './Header.css';

const Header = ({ toggleForm }) => {
  return (
    <header className="header">
      <div className="left-section">
        {/* App Icon and App Name */}
        <FaCloudSun className="app-icon" />
        <h1 className="app-name">Weather App</h1>
      </div>

      {/* Search bar for location */}
      <div className="search-bar">
        <input type="text" placeholder="Search location..." />
        <button className="search-button">Search</button>
      </div>

      {/* Profile Icon and Login/Signup buttons */}
      <div className="right-section">
        <button className="login-button" onClick={() => toggleForm('login')}>
          Login
        </button>
        <button className="login-button" onClick={() => toggleForm('signup')}>
          Signup
        </button>
        <FaUserCircle className="profile-icon" />
      </div>
    </header>
  );
};

export default Header;

