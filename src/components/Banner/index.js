import React from 'react';
import './styles.css';

const Banner = () => {
  return (
    <div className="banner">
      <img
        className="banner-image"
        src={`${process.env.PUBLIC_URL}/assets/background.png`}
        alt="my store"
      />
    </div>
  );
};

export default Banner;
