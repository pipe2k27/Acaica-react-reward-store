import React from 'react';
import Thousand from '../ThousandSeparator';
import './styles.css';

const Navbar = ({ name, coins }) => {
  return (
    <div className="navbar">
      <img
        className="navbar-logo"
        src={`${process.env.PUBLIC_URL}/assets/logo-long.png`}
        alt="my store"
      />
      <div className="flex-center-vertical">
        <p className="grey">{name}</p>
        <div className="flex-center-vertical navbar-coins">
          {coins && <Thousand num={coins} />}
          <img
            src={`${process.env.PUBLIC_URL}/assets/coin.png`}
            className="coin"
            alt="coin"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
