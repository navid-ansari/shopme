import { ActionTypes } from "../constants/action-types";

const defaultCart = (cartItems, payload) => {
 return [payload, ...cartItems];
};

const toggleCart = (cartItems, payload) => {
 const idx = cartItems.findIndex((item) => item.id === payload.id);
 if (idx !== -1) {
  return cartItems.filter((product) => product.id !== payload.id);
 } else {
  return [payload, ...cartItems];
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
