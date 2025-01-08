import { useState } from "react";

export default function ColorBoxesItem({ colors }) {
  const [color, setColor] = useState(colors[Math.floor(Math.random() * colors.length)]); 

  const handleClick = () => {
    let newColor;
    do {
      newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === color);
    setColor(newColor);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: '50px',
        height: '50px',
        backgroundColor: color,
        cursor: 'pointer'        
      }}
    />
  );
}
