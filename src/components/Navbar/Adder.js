import React from 'react';
import * as actions from '../../actions/actions';
import { connect } from 'react-redux';

import './styles.css';

const Adder = ({ className, addPoints, loadUser }) => {
  const pointAdder = (points) => {
    loadUser();
    addPoints(points);
  };
  return (
    <div className={`adder ${className}`}>
      <div className="adder-button" onClick={() => pointAdder(1000)}>
        +1000
        <img
          src={`${process.env.PUBLIC_URL}/assets/coin.png`}
          className="coin"
          alt="coin"
        />
      </div>
      <div className="adder-button" onClick={() => pointAdder(5000)}>
        +5000
        <img
          src={`${process.env.PUBLIC_URL}/assets/coin.png`}
          className="coin"
          alt="coin"
        />
      </div>
      <div className="adder-button" onClick={() => pointAdder(7500)}>
        +7500
        <img
          src={`${process.env.PUBLIC_URL}/assets/coin.png`}
          className="coin"
          alt="coin"
        />
      </div>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addPoints: (points) => dispatch(actions.addPoints(points)),
//     loadUser: () => dispatch(actions.setUserLoading()),
//   };
// };

const mapDispatchToProps = {
  addPoints: actions.addPoints,
  loadUser: actions.setUserLoading,
};

export default connect(null, mapDispatchToProps)(Adder);
