import React, { useState } from 'react';
import './Signup.css';

function Signup({ toggleForm }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    role: 'Normal',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
  
    alert(`Registration successful! Username: ${formData.username}, Role: ${formData.role}`);
    setFormData({
      username:'',
      password: '',
      confirmPassword: '',
      role: 'Normal'
    });
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
          <span className="required-field">
            Password is a required field, Make sure it's at least 8 characters including a number, an uppercase letter, and one special character.
          </span>
       
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
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="Admin">Admin</option>
            <option value="Normal">Normal</option>
          </select>
        </div>

        {/* Register and Existing User button */}
        <div className="button-group">
          <button type="submit" className="register-button">
            Register
          </button>
          <button type="button" className="existing-user-button" onClick={toggleForm}>
            Existing User? Login here
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;


