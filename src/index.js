import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import your global CSS file
import App from './App'; // Import the main App component

// Create a root for React to render the App component into
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


