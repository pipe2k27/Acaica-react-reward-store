import React from 'react';
import './styles.css';
const Button = ({ onClick, width, color, label, className }) => {
  return (
    <div
      onClick={onClick}
      className={`${className} button button-${color}`}
      style={{ width: width }}
    >
      {label}
    </div>
  );
};

export default Button;
