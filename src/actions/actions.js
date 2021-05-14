export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_USER = 'SET_USER';
export const ADD_POINTS = 'ADD_POINTS';
export const SET_HISTORY = 'SET_HISTORY';
export const SET_REDEEM = 'SET_REDEEM';

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

export const setProductsLoading = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: 'loading',
  };
};

export const getProducts = () => {
  return async (dispatch) => {
    dispatch(setProductsLoading());
    try {
      const data = await fetch(
        'https://coding-challenge-api.aerolab.co/products',
        {
          headers,
        }
      );
      const products = await data.json();
      dispatch(setProducts(products));
    } catch {
      dispatch(setRedeem('error'));
    }
  };
};

// user fetching

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const setUserLoading = () => {
  return {
    type: SET_USER,
    payload: 'loading',
  };
};

export const getUser = () => {
  return async (dispatch) => {
    dispatch(setUserLoading());
    try {
      const data = await fetch(
        'https://coding-challenge-api.aerolab.co/user/me',
        {
          headers,
        }
      );
      const user = await data.json();
      dispatch(setUser(user));
    } catch {
      dispatch(setRedeem('error'));
    }
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
    try {
      const body = { amount: points };
      const adder = await fetch(
        'https://coding-challenge-api.aerolab.co/user/points',
        { headers, method: 'POST', body: JSON.stringify(body) }
      );
      dispatch(setPoints(points));
      dispatch(getUser());
    } catch {
      dispatch(setRedeem('error'));
    }
  };
};

// get reedem history

export const setHistory = (history) => {
  return {
    type: SET_HISTORY,
    payload: history,
  };
};

export const getHistory = () => {
  return async (dispatch) => {
    dispatch(setHistory('loading'));
    try {
      const historyGetter = await fetch(
        'https://coding-challenge-api.aerolab.co/user/history',
        { headers, method: 'GET' }
      );
      const answer = await historyGetter.json();
      const smallAnswer = answer.reverse().slice(0, 10);
      console.log(smallAnswer);
      // console.log(await reedemer.JSON());
      dispatch(setHistory(smallAnswer));
    } catch {
      dispatch(setRedeem('error'));
    }
  };
};

// reedem product

export const setRedeem = (newRedeem) => {
  return {
    type: SET_REDEEM,
    payload: newRedeem,
  };
};

export const reedem = (product) => {
  return async (dispatch) => {
    dispatch(setRedeem('loading'));
    try {
      const body = { productId: product };
      const reedemer = await fetch(
        'https://coding-challenge-api.aerolab.co/redeem',
        { headers, method: 'POST', body: JSON.stringify(body) }
      );
      const answer = await reedemer.json();
      dispatch(setRedeem('OK'));
    } catch {
      dispatch(setRedeem('error'));
    }
  };
};
