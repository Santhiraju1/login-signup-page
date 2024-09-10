import React, { useState } from 'react';
import './Signup.css';

function Signup({ toggleForm }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const [error, setError] = useState(''); // Now utilized for error messages
  const [existingUsers] = useState(['existingUser1']); // Dummy existing users
  const [isRegistered, setIsRegistered] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z]).{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsRegistered(false);
    if (!formData.username) {
      setError('User Name is required.');
    } else if (!formData.password || !validatePassword(formData.password)) {
      setError(
        'Password must contain at least 8 characters, 1 uppercase letter, and 1 special character.'
      );
    } else if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
    } else if (existingUsers.includes(formData.username)) {
      alert('You already have an account.');
    } else {
      setIsRegistered(true);
      alert('Registered successfully!');
      setFormData({
        username: '',
        password: '',
        confirmPassword: '',
        role: ''
      });
      toggleForm('close'); // Automatically close the form after registration
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className='login-font'>Signup</h2>

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
          <span className="required-field">User name is a required field</span>
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
          <span className="required-field">Password is a required field</span>
          {/* Display error message */}
          {error && <div className='required-field'>{error}</div>}
        </div>
        
        {/* Confirm Password */}
        <div className="form-group">
          <label className='user-font'>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Enter Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        {/* Role Dropdown */}
        <div className="form-group">
          <label className='user-font'>Role:</label>
          <select name="role" value={formData.role} onChange={handleChange} required>
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Normal">Normal</option>
          </select>
        </div>
        
        {/* Register and Existing User button */}
        {isRegistered && <div className="success-message">Registered successfully!</div>}
        <div className="button-group">
          <button type="submit" className="register-button">
            Register
          </button>
          <button
            type="button"
            className="existing-user-button"
            onClick={() => toggleForm('login')} // Switch to login form
          >
            Existing User? Login here
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;








