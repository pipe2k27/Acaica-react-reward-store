import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Product from '../../components/Product';
import NavBar from '../../components/Navbar';
import Banner from '../../components/Banner';
import { getProducts } from '../../actions/actions';

import './styles.css';

const Home = ({ products, getProducts }) => {
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <NavBar name="Albus Dumbledore" coins={'14.000'} />
      <Banner />
      <div className="main-products center">
        {products.map((product) => (
          <Product
            price={'12.000'}
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
  const products = state.products;
  return { products };
};
const mapDispatchToProps = {
  getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
