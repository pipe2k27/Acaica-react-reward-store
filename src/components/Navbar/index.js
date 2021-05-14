import React, { useState } from 'react';
import Thousand from '../ThousandSeparator';
import Adder from './Adder';
import ReactLoading from 'react-loading';
import './styles.css';

const Navbar = ({ name, coins }) => {
  const [add, setAdd] = useState(false);
  return (
    <div>
      <div className="navbar">
        <img
          className="navbar-logo"
          src={`${process.env.PUBLIC_URL}/assets/logo-long.png`}
          alt="my store"
        />
        <div className="flex-center-vertical">
          <p className="grey">{name}</p>
          <div className="flex-center-vertical navbar-coins">
            {coins ? (
              <Thousand num={coins} />
            ) : (
              <div className="navbar-loader">
                <ReactLoading
                  type={'bars'}
                  color={'#ffffff'}
                  height={'20px'}
                  width="20px"
                  className="navbar-loader"
                />
              </div>
            )}
            <img
              src={`${process.env.PUBLIC_URL}/assets/coin.png`}
              className="coin"
              alt="coin"
            />
          </div>
          <div
            className={`navbar-plus plus-${add}`}
            onClick={() => {
              setAdd((prev) => !prev);
            }}
          >
            +
          </div>
        </div>
      </div>
      <Adder className={`navbar-adder adder-${add}`} />
    </div>
  );
};

export default Navbar;
