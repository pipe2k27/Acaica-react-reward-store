import React from 'react';

import Button from '../Button';
import './styles.css';

const Product = ({ name, category, price, pic }) => {
  return (
    <div className="product">
      <img alt="product" className="product-image center" src={pic} />
      <div className="product-text">
        <p className="product-category">{category}</p>
        <p className="product-name">{name}</p>
      </div>
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
        <Button label={'Reedem now'} className="product-button" color="white" />
      </div>
    </div>
  );
};

export default Product;
