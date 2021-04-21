import { GET_PRODUCTS } from './../../actionTypes';

import { postRequest } from '../../api';
import createBrowserHistory from './../../history';

export const getProducts = () => async dispatch => {
  try {
    const res = await postRequest(`locad/product/getProducts`);
    console.log(res, 'from actions');
    dispatch({ type: GET_PRODUCTS, payload: res.data.data });
  } catch (err) {
    console.log(err);
  }
};
export const updateProduct = async data => {
  try {
    const res = await postRequest(`locad/product/updateProduct`, data);
    console.log(res, 'from action');
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const addProduct = async data => {
  try {
    const res = await postRequest(`locad/product/createNew`, data);
    console.log(res, 'from action');
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const DeleteProduct = async data => {
  try {
    const res = await postRequest(`locad/product/deleteProduct`, data);
    return res;
  } catch (err) {
    console.log(err);
  }
};