const initialState = {
  list: [],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ALL_PRODUCTS':
      return { ...state, list: action.payload.data };
    case 'SORT_PRODUCTS_BY_PRICE':
      const { payload: priceOrder } = action;
      const sortedList = [...state.list].sort((a, b) => {
        if (priceOrder === 'asc') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
      return { ...state, list: sortedList };

    case 'SORT_PRODUCTS_BY_NAME':
      const { payload: nameOrder } = action;
      const sortedListByName = [...state.list].sort((a, b) => {
        if (nameOrder === 'asc') {
          return a.title.localeCompare(b.title);
        } else {
          return b.title.localeCompare(a.title);
        }
      });
      return { ...state, list: sortedListByName };

    default:
      return state;
  }
};
