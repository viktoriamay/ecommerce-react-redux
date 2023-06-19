const savedCart = JSON.parse(localStorage.getItem('cart'));
const savedTotal = parseFloat(localStorage.getItem('total'));
const savedCount = parseInt(localStorage.getItem('count'));

const initialState = {
  cart: savedCart || [],
  total: savedTotal || 0,
  count: savedCount || 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
        const newTotal = state.total + action.payload.price;
        const newCount = state.count + 1;
        localStorage.setItem('cart', JSON.stringify(state.cart));
        localStorage.setItem('total', newTotal);
        localStorage.setItem('count', newCount);
        return {
          ...state,
          total: newTotal,
          count: newCount,
        };
      } else {
        const newCart = [...state.cart, { ...action.payload, quantity: 1 }];
        const newTotal = state.total + action.payload.price;
        const newCount = state.count + 1;
        localStorage.setItem('cart', JSON.stringify(newCart));
        localStorage.setItem('total', newTotal);
        localStorage.setItem('count', newCount);
        return {
          ...state,
          cart: newCart,
          total: newTotal,
          count: newCount,
        };
      }
    case 'DELETE_FROM_CART':
      const itemToRemove = state.cart.find(
        (item) => item.id === action.payload
      );
      if (itemToRemove.quantity > 1) {
        itemToRemove.quantity -= 1;
        const newTotal = state.total - itemToRemove.price;
        const newCount = state.count - 1;
        localStorage.setItem('cart', JSON.stringify(state.cart));
        localStorage.setItem('total', newTotal);
        localStorage.setItem('count', newCount);
        return {
          ...state,
          total: newTotal,
          count: newCount,
        };
      } else {
        const newCart = state.cart.filter((item) => item.id !== action.payload);
        const newTotal = state.total - itemToRemove.price;
        const newCount = state.count - 1;
        localStorage.setItem('cart', JSON.stringify(newCart));
        localStorage.setItem('total', newTotal);
        localStorage.setItem('count', newCount);
        return {
          ...state,
          cart: newCart,
          total: newTotal,
          count: newCount,
        };
      }
    case 'CLEAR_CART':
      const indexToRemove = state.cart.findIndex(
        (item) => item.id === action.payload
      );
      if (indexToRemove === -1) {
        return state;
      }
      const itemToRemoveDelete = state.cart[indexToRemove];
      const newCart = [...state.cart];
      newCart.splice(indexToRemove, 1);
      const newTotal = (
        state.total -
        itemToRemoveDelete.price * itemToRemoveDelete.quantity
      ).toFixed(2);
      const newCount = state.count - itemToRemoveDelete.quantity;
      localStorage.setItem('cart', JSON.stringify(newCart));
      localStorage.setItem('total', newTotal);
      localStorage.setItem('count', newCount);
      return {
        ...state,
        cart: newCart,
        total: newTotal,
        count: newCount,
      };
    default:
      return state;
  }
};
