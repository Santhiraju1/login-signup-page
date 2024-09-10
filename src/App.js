import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'; 
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  const [isLogin, setIsLogin] = useState(false); // Determine which form to show (login/signup)
  const [isFormVisible, setIsFormVisible] = useState(false); // To toggle form visibility

  const toggleForm = (formType) => {
    // Toggle between showing or hiding the form based on its current state
    if (isFormVisible && ((formType === 'login' && isLogin) || (formType === 'signup' && !isLogin))) {
      setIsFormVisible(false);  // Close the form if it's already open and the same form type is clicked again
    } else {
      setIsLogin(formType === 'login');
      setIsFormVisible(true);   // Show the respective form (login or signup)
    }
  };

  const closeForm = () => {
    setIsFormVisible(false);  // Close the form after successful registration or login
  };

  return (
    <div>
      <Header toggleForm={toggleForm} />
      <div className="app-container">
        {isFormVisible && (
          isLogin ? (
            <Login toggleForm={closeForm} />   // Show login form
          ) : (
            <Signup toggleForm={closeForm} />  // Show signup form
          )
        )}
      </div>
    </div>
  );
}

export default App;









