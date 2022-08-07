import { useReducer } from "react";

import {
  UPDATE_PRODUCTS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_USER,
  USER_TO_STATE,
  USER_DELETE_REQUEST,
  PRODUCT_DELETE_REQUEST,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...state.products, action.products],
      };

    case PRODUCT_DELETE_REQUEST:
      return {
        ...state,
        products: [...state.products, action.products],
      };

    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.product],
      };

    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity;
          }
          return product;
        }),
      };
    case REMOVE_FROM_CART:
      let newState = state.cart.filter((product) => {
        return product._id !== action._id;
      });
      return {
        ...state,
        cart: newState,
      };

    case UPDATE_USER:
      return {
        ...state,
        user: [...state.user, action.user],
      };

    case USER_TO_STATE:
      // console.log("inside the user state");
      return {
        ...state,
        user: [...state.user, action.user],
      };

    case USER_DELETE_REQUEST:
      // let newUserState = state.user.filter((newUser) => {
      //   return newUser._id !== action._idl;
      // });
      // return {
      //   ...state,
      //   user: newUserState,
      // };

      return {
        ...state,
        user: [...state.user, action.user],
      };

    default:
      return state;
  }
};
export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
