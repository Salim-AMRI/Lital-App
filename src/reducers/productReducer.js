import {ADD_PRODUCT, GET_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT} from '../actions/types';

const initialState = [];

export default function productReducer(state = initialState, action){
    if (action.type === ADD_PRODUCT)
    return { ...state, products: { ...action.payload, ...state.products } };
  if (action.type === GET_PRODUCT) {
    return action.payload;
  }
  if (action.type === EDIT_PRODUCT) {
    return [...state, action.payload];
  }
  if (action.type === DELETE_PRODUCT) {
    return state.filter((product) => product.id !== action.payload);
  }
  return state;
}

