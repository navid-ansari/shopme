import { ActionTypes } from "../constants/action-types";

const defaultCart = (cartItems, payload) => {
 return [...cartItems, payload];
};

const toggleCart = (cartItems, payload) => {
 const idx = cartItems.findIndex((item) => item.id === payload.id);
 console.log(idx);
 if (idx !== -1) {
  console.log("If");
  return cartItems.filter((product) => product.id !== payload.id);
 } else {
  console.log("Else");
  return [...cartItems, payload];
 }
};

export const cartReducer = (state = [], { type, payload }) => {
 switch (type) {
  case ActionTypes.CART:
   return state.length === 0
    ? defaultCart(state, payload)
    : toggleCart(state, payload);
  default:
   return state;
 }
};
