import React from "react";

export const UserContext = React.createContext();

export const initialState = {
  total: 0,
  basket: [],
  products: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "Delete":
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.payload),
      };
    case "Remove_Count":
      let foundItem = state.basket.find(
        (product) => product.id === action.payload
      );
      if (foundItem && foundItem.count > 1) {
        return {
          ...state,
          basket: state.basket.map((item) =>
            item.id === foundItem.id ? { ...item, count: item.count - 1 } : item
          ),
        };
      }
      return state; 
    case "Add":
      let foundProduct = state.products.find(
        (product) => product.id === action.payload
      );
      let isExist = state.basket.some((item) => item.id === action.payload);

      if (isExist) {
        return {
          ...state,
          basket: state.basket.map((item) =>
            item.id === foundProduct.id
              ? { ...item, count: item.count + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          basket: [...state.basket, { ...foundProduct, count: 1 }],
        };
      }
    case "set_Product":
      return {
        ...state,
        products: action.payload,
      };
    case "set_Total":
      return {
        ...state,
        total: state.basket.reduce(
          (acc, item) => acc + item.price * item.count,
          0
        ),
      };
    default:
      return state;
  }
};
