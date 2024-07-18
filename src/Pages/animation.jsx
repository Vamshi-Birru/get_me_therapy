import React from 'react';
import '../Styles/animation.css';

const Animation = () => {
  return (
    <div className="animated-icon-container">
      <svg viewBox="0 0 202.62 150.34" className="animated-icon">
        <circle cx="101.31" cy="75.17" r="70" className="outer-circle" />
        <polygon
          points="101.31 20, 140 34, 160 75.17, 140 116.34, 101.31 130.34, 62.62 116.34, 42.62 75.17, 62.62 34"
          className="outer-polygon"
        />
        <path d="M 80 75.17 L 95 90.17 L 120 65.17" className="checkmark" />
        
        <circle cx="40" cy="30" r="3" className="sparkle sparkle1" />
        <circle cx="162.62" cy="40" r="2" className="sparkle sparkle2" />
        <circle cx="30" cy="120.34" r="2" className="sparkle sparkle3" />
        <circle cx="172.62" cy="110.34" r="3" className="sparkle sparkle4" />
        
        <path d="M 20 60 Q 10 75.17 20 90.34" className="squiggle squiggle1" />
        <path d="M 182.62 45 Q 192.62 60.17 182.62 75.34" className="squiggle squiggle2" />
      </svg>
    </div>
  );
};

export default Animation;