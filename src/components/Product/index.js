import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Button from '../Button';
import './styles.css';
import { reedem } from '../../actions/actions';

const Product = ({
  name,
  category,
  price,
  pic,
  reedem,
  id,
  points,
  noRedeem,
}) => {
  useEffect(() => {
    console.log(points);
  });
  return (
    <div className="product">
      {!noRedeem && (
        <div>
          {price < points ? (
            <div className="condition product-buy">Reedemable now!</div>
          ) : (
            <div className="condition product-difference">
              {price - points} points missing
            </div>
          )}
        </div>
      )}
      <img alt="product" className="product-image center" src={pic} />
      <div className="product-text">
        <p className="product-category">{category}</p>
        <p className="product-name">{name}</p>
      </div>
      {!noRedeem && (
        <div className="product-hover">
          <div className="product-redeem"></div>
          <div className="product-price">
            <p>{price}</p>
            <img
              src={`${process.env.PUBLIC_URL}/assets/coin.png`}
              className="product-coin"
              alt="coin"
            />
          </div>
          {price < points && (
            <Button
              label={'Reedem now'}
              className="product-button"
              color="white"
              onClick={() => {
                console.log(id);
                reedem(id);
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = {
  reedem,
};

const mapStateToProps = (state) => {
  return {
    points: state.user.user.points,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
