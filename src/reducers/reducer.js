import { combineReducers } from 'redux';
import * as actions from '../actions/actions';

const initialState = {
  products: [],
  user: {},
  history: [],
  redeem: false,
};

const productsReducer = (state = initialState, action) => {
  if (action.type === actions.SET_PRODUCTS) {
    return { ...state, products: action.payload };
  }
  return state;
};

const redeemReducer = (state = initialState, action) => {
  if (action.type === actions.SET_REDEEM) {
    return { ...state, redeem: action.payload };
  }
  return state;
};

const historyReducer = (state = initialState, action) => {
  if (action.type === actions.SET_HISTORY) {
    return { ...state, history: action.payload };
  }
  return state;
};

const userReducer = (state = initialState, action) => {
  if (action.type === actions.SET_USER) {
    return { ...state, user: action.payload };
  }
  return state;
};

const pointsReducer = (state = initialState, action) => {
  if (action.type === actions.ADD_POINTS) {
    return state;
  }
  return state;
};

const reducer = combineReducers({
  products: productsReducer,
  user: userReducer,
  points: pointsReducer,
  history: historyReducer,
  redeem: redeemReducer,
});

export default reducer;
