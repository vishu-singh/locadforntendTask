import { GET_PRODUCTS } from './../../actionTypes';

import { postRequest } from '../../api';
import createBrowserHistory from './../../history';

export const getProducts = () => async dispatch => {
  try {
    const res = await postRequest(`locad/product/getProducts`);
   
    dispatch({ type: GET_PRODUCTS, payload: res.data.data });
  } catch (err) {
    
  }
};
export const updateProduct = async data => {
  try {
    const res = await postRequest(`locad/product/updateProduct`, data);
    
    return res;
  } catch (err) {
    
  }
};

export const addProduct = async data => {
  try {
    const res = await postRequest(`locad/product/createNew`, data);
    
    return res;
  } catch (err) {
    
  }
};

export const DeleteProduct = async data => {
  try {
    const res = await postRequest(`locad/product/deleteProduct`, data);
    return res;
  } catch (err) {

  }
};