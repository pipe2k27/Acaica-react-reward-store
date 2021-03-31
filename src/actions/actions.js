export const SET_PRODUCTS = 'SET_PRODUCTS';

const headers = {
  'Content-Type': 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjdmNjZhZjJiNjU3MDAwMWZjZTZjNDciLCJpYXQiOjE2MDIxODQ4Nzl9.d9Fo9paYF9kCpospKG7pglidFsMAXy5BUl6odcuB78o',
};

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};
export const getProducts = () => {
  return async (dispatch) => {
    const data = await fetch(
      'https://coding-challenge-api.aerolab.co/products',
      {
        headers,
      }
    );
    const products = await data.json();
    dispatch(setProducts(products));
  };
};
