import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Product from '../../components/Product';
import NavBar from '../../components/Navbar';
import Banner from '../../components/Banner';
import { getProducts, getUser, addPoints } from '../../actions/actions';

import './styles.css';

const Home = ({ products, getProducts, getUser, user, addPoints }) => {
  useEffect(() => {
    getProducts();
    getUser();
  }, []);
  return (
    <div>
      <NavBar name="Albus Dumbledore" coins={user.points} />
      <Banner />
      <div onClick={() => addPoints(7500)}>add Points</div>
      <div className="main-products center">
        {products &&
          products.map((product) => (
            <Product
              price={product.cost}
              name={product.name}
              category={product.category}
              pic={product.img.hdUrl}
            />
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const products = state.products.products;
  const user = state.user.user;
  return { products, user };
};
const mapDispatchToProps = {
  getProducts,
  getUser,
  addPoints,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
