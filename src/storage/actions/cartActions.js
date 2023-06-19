export const addToCart = (item) => {
  return {
    type: 'ADD_TO_CART',
    payload: item,
  };
};

export const deleteFromCart = (id) => {
  return {
    type: 'DELETE_FROM_CART',
    payload: id,
  };
};
export const clearCart = (id) => {
  return {
    type: 'CLEAR_CART',
    payload: id,
  };
};

