export const initialState = {
  basket: [],
  user: null,
  address: {},
};

// It is for all checkout amount subtotal
export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log("Action >>>", action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    // It is all code for remove product from basket
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`
                        Cant ' t remove product whose ID is ${index}
                    `);
      }

      return {
        ...state,
        basket: newBasket,
      };

    // it is for save all information Address components

    case "SET_ADDRESS":
      return {
        ...state,
        address: { ...action.item },
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    default:
      return state;
  }
};

export default reducer;
