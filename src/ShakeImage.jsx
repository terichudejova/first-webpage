
import React, { useState } from 'react';
import './ShakeImage.css';

export default function ShakeImage({url, top, left, width, height, className}) {
  const [isShaking, setIsShaking] = useState(false);

  const handleMouseEnter = () => {
    setIsShaking(true);
  };

  const handleMouseLeave = () => {
    setIsShaking(false);
  };

  return (
    <img
      src={url}
      alt="Shaking"
      className={`${isShaking ? 'shake' : ''} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ 
        width: width, 
        height: height, 
        position: 'absolute', 
        top: top, 
        left: left,
      }}
    />
  );
}
