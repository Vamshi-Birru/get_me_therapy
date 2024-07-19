import React from 'react';
import '../Styles/circle.css';

const CircularAnimation = () => {
    return (
      <div className="circular-animation">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle className="animated-circle" cx="50" cy="50" r="47" fill="none" stroke="white" strokeWidth="2" />
          <circle className="white-circle" cx="50" cy="50" r="31" fill="white" />
          <path className="arrow" d="M41.75 50 L58.25 50 L52.25 43.225 M58.25 50 L52.25 56.775" fill="none" stroke="#ff9800" strokeWidth="2" />
        </svg>
      </div>
    );
  };
  
  export default CircularAnimation;