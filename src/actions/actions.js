export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_USER = 'SET_USER';
export const ADD_POINTS = 'ADD_POINTS';
const headers = {
  'Content-Type': 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk',
};

// product fetching

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

// user fetching

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};
export const getUser = () => {
  return async (dispatch) => {
    const data = await fetch(
      'https://coding-challenge-api.aerolab.co/user/me',
      {
        headers,
      }
    );
    const user = await data.json();
    console.log(user);
    dispatch(setUser(user));
  };
};

// add points

export const setPoints = (points) => {
  return {
    type: ADD_POINTS,
    payload: points,
  };
};

export const addPoints = (points) => {
  return async (dispatch) => {
    const body = { amount: points };
    const adder = await fetch(
      'https://coding-challenge-api.aerolab.co/user/points',
      { headers, method: 'POST', body: JSON.stringify(body) }
    );
    const adderMessage = await adder.json();
    console.log(adderMessage);
    dispatch(setPoints(points));
  };
};
