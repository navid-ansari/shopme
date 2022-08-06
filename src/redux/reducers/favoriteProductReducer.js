import { ActionTypes } from "../constants/action-types";

const defaultItem = (favorites, payload) => {
 return [...favorites, payload];
};

const findItem = (favorites, payload) => {
 const idx = favorites.findIndex((favorite) => favorite.id === payload.id);
 if (idx !== -1) {
  return favorites.filter((favorite) => favorite.id !== payload.id);
 } else {
  return [...favorites, payload];
 }
};

export const toggleFavoriteProductReducer = (state = [], { type, payload }) => {
 switch (type) {
  case ActionTypes.FAVOURITE_PRODUCTS:
   return state.length === 0
    ? defaultItem(state, payload)
    : findItem(state, payload);
  default:
   return state;
 }
};
