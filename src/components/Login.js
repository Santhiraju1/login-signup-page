import React, { useState } from 'react';
import './Login.css';

function Login({ toggleForm }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful login
    alert(`Login successful! Username: ${formData.username}`);
    toggleForm();  // Close the form after successful login
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className='login-font'>Login</h2>
        {/* Username */}
        <div className="form-group">
          <label className='user-font'>User Name:</label>
          <input
            type="text"
            name="username"
            placeholder="Enter User Name"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="form-group">
          <label className='user-font'>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Remember Me */}
        <div className="form-group-remember">
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />
          <label className='user-font'>Remember Me</label>
        </div>

        {/* Login and New User button */}
        <div className="button-group">
          <button type="submit" className="login-button">
            Login
          </button>
          <button
            type="button"
            className="new-user-button"
            onClick={() => toggleForm('signup')} // Switch to signup form
          >
            New User? Register here
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;



