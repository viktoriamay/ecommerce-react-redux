import axios from 'axios';

export const addAllProducts = (data) => {
  return {
    type: 'ADD_ALL_PRODUCTS',
    payload: data,
  };
};

export const sortProductsByPrice = (priceOrder) => ({
  type: 'SORT_PRODUCTS_BY_PRICE',
  payload: priceOrder,
});

export const sortProductsByName = (nameOrder) => ({
  type: 'SORT_PRODUCTS_BY_NAME',
  payload: nameOrder,
});

export const getAllProducts = () => {
  return (dispatch) => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((data) => dispatch(addAllProducts(data)));
  };
};
