import { GET_PRODUCTS } from '../../actionTypes';

const initialState = {
  products: [],
};
export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};
