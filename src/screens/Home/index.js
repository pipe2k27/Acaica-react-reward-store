import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Product from '../../components/Product';
import NavBar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Button from '../../components/Button';
import RedeemModal from '../../components/RedeemModal';
import ReactLoading from 'react-loading';
import {
  getProducts,
  getUser,
  addPoints,
  getHistory,
  setProducts,
  setRedeem,
} from '../../actions/actions';

import './styles.css';

const Home = ({
  products,
  getProducts,
  setProducts,
  getUser,
  user,
  getHistory,
  productHistory,
  redeemState,
  setRedeem,
}) => {
  const [history, setHistory] = useState(false);
  const [page, setPage] = useState([0, 16]);

  useEffect(() => {
    getProducts();
    getUser();
    getHistory();
  }, [getHistory, getProducts, getUser]);

  const productSort = (arrayToSort, direction) => {
    const compare = (a, b) => {
      const priceA = a.cost;
      const priceB = b.cost;

      let comparison = 0;
      if (priceA > priceB) {
        comparison = 1;
      } else if (priceA < priceB) {
        comparison = -1;
      }
      return comparison;
    };
    const theArray = arrayToSort.sort(compare);
    if (direction === 'up') {
      const newArray = theArray.reverse();
      setProducts([...newArray]);
    } else {
      setProducts([...theArray]);
    }
  };
  return (
    <div className="home">
      <RedeemModal
        redeemState={redeemState}
        close={() => {
          setRedeem(false);
          getUser();
          getProducts();
        }}
      />
      <NavBar name={user.name} coins={user.points} />
      <Banner />
      {products === 'loading' ||
      user === 'loading' ||
      productHistory === 'loading' ? (
        <ReactLoading
          type={'bars'}
          color={'#222222'}
          height={'90px'}
          width="90px"
          className="center margin-large"
        />
      ) : (
        <div>
          <div
            className="flex-space-between center"
            style={{ width: 800, margin: 40 }}
          >
            <Button
              onClick={() => {
                getProducts(), setHistory(false);
              }}
              label="Products"
              style={!history && { backgroundColor: '#222222', color: 'white' }}
            />
            <Button
              onClick={() => {
                getHistory(), setHistory(true);
              }}
              label="Redeem history"
              style={history && { backgroundColor: '#222222', color: 'white' }}
            />
          </div>
          {!history && (
            <div
              className="flex-space-between center"
              style={{ width: 300, margin: 40 }}
            >
              <div
                className="sort-button"
                onClick={() => {
                  productSort(products, 'down');
                }}
              >
                Sort by Price <i className="fas fa-long-arrow-alt-down"></i>
              </div>
              <div
                className="sort-button"
                onClick={() => {
                  productSort(products, 'up');
                }}
              >
                Sort by Price <i className="fas fa-long-arrow-alt-up"></i>
              </div>
            </div>
          )}
          <div className="main-products center">
            {!history &&
              products &&
              products
                .slice(page[0], page[1])
                .map((product) => (
                  <Product
                    key={product.name}
                    price={product.cost}
                    name={product.name}
                    category={product.category}
                    pic={product.img.hdUrl}
                    id={product._id}
                  />
                ))}
            {history &&
              productHistory &&
              productHistory.map((product) => (
                <Product
                  key={product.name}
                  price={product.cost}
                  name={product.name}
                  category={product.category}
                  pic={product.img.hdUrl}
                  id={product._id}
                  noRedeem
                />
              ))}
          </div>
          {!history && (
            <div
              className="flex-space-between center"
              style={{ width: 100, margin: 40 }}
            >
              <div
                className="sort-button"
                onClick={() => {
                  setPage([0, 16]);
                }}
              >
                1
              </div>
              <div
                className="sort-button"
                onClick={() => {
                  setPage([16, 33]);
                }}
              >
                2
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const products = state.products.products;
  const user = state.user.user;
  const productHistory = state.history.history;
  const redeemState = state.redeem.redeem;
  return { products, user, productHistory, redeemState };
};
const mapDispatchToProps = {
  getProducts,
  getUser,
  addPoints,
  getHistory,
  setProducts,
  setRedeem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
