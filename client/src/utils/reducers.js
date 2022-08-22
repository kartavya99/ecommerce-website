import { useReducer } from "react";

import {
  UPDATE_PRODUCTS,
  UPDATE_USER,
  USER_TO_STATE,
  USER_DELETE_REQUEST,
  PRODUCT_DELETE_REQUEST,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
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
      let newUserState = state.user.filter((newUser) => {
        return newUser._id !== action._id;
      });
      console.log(newUserState);
      return {
        ...state,
        user: [...newUserState],
      };

    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.cart],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product._id !== action.payload._id
        ),
      };

    // case REMOVE_FROM_CART:
    //   let newCartState = state.cart.filter((newProduct) => {
    //     console.log(newProduct);
    //     console.log(newProduct.product._id);
    //     return newProduct._id !== action._id;
    //   });
    //   console.log("inside cart state");

    //   return {
    //     ...state,
    //     cart: [...newCartState],
    //   };

    // case USER_DELETE_REQUEST:
    //   let newUserState = state.user.filter((newUser) => {
    //     return newUser._id !== action._id;
    //   });
    //   console.log(newUserState);
    //   return {
    //     ...state,
    //     user: [...newUserState],
    //   };

    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cart: [...state.cart, action.cart],
      };

    default:
      return state;
  }
};
export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
