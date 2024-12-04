import { useState } from 'react';

const RainbowText = () => {
  // Array of ROYGBIV colors
  const colors = [
    '#FF0000', // Red
    '#FF7F00', // Orange
    '#FFFF00', // Yellow
    '#00FF00', // Green
    '#0000FF', // Blue
    '#4B0082', // Indigo
    '#9400D3'  // Violet
  ];

  // State for text and background colors
  const [colorIndex, setColorIndex] = useState(0);
  const [isDarkBackground, setIsDarkBackground] = useState(true);

  // Handle text click
  const handleTextClick = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  // Handle background click
  const handleBackgroundClick = () => {
    setIsDarkBackground(prev => !prev);
  };

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center cursor-pointer"
      style={{ backgroundColor: isDarkBackground ? '#000000' : '#FFFFFF' }}
      onClick={handleBackgroundClick}
    >
      <h1 
        className="text-8xl font-bold p-8 select-none"
        style={{ color: colors[colorIndex] }}
        onClick={(e) => {
          e.stopPropagation();
          handleTextClick();
        }}
      >
        Hello World
      </h1>
    </div>
  );
};

export default RainbowText;