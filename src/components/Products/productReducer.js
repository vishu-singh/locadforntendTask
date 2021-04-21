import { GET_PRODUCTS } from '../../actionTypes';

const initialState = {
  products: [],
};
export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
        console.log(action.payload,'pay;oa reducer')
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};
