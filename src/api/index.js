import axios from 'axios';
const BaseUrl='https://pure-depths-78451.herokuapp.com/'

export const request = (path, data, method) => {
  let token = localStorage.getItem('token');
  return axios({
    method,
    url: `${BaseUrl}${path}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    },
    data,
  });
};

export const getRequest = (path, data) => request(path, data, 'GET');
export const postRequest = (path, data) => request(path, data, 'POST');
export const deleteRequest = (path, data) => request(path, data, 'DELETE');
export const putRequest = (path, data) => request(path, data, 'PUT');
