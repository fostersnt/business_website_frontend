// src/pages/NotFound.jsx
import React from 'react';
import '../styles/NotFound.css'; // Make sure to create and import this CSS file

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message">Oops! The page you're looking for doesn't exist.</p>
        <a href="/" className="notfound-button">Go Back Home</a>
      </div>
    </div>
  );
};

export default NotFound;
