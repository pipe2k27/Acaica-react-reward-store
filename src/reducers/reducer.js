import * as actions from '../actions/actions';

const initialState = {
  products: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === actions.SET_PRODUCTS) {
    return { products: action.payload };
  }
  return state;
};

export default reducer;
