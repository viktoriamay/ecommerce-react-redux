const initialState = {
  productData: {},
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return { ...state, productData: action.payload };
      
    default:
      return state;
  }
};
