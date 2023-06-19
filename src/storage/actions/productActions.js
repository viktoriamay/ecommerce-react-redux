import axios from 'axios';

export const addProduct = (data) => {
  return {
    type: 'ADD_PRODUCT',
    payload: data,
  };
};

export const getProduct = (productId) => {
  return (dispatch) => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        dispatch(addProduct(response.data));
      });
  };
};
