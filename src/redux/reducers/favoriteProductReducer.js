import { ActionTypes } from "../constants/action-types";

const defaultItem = (favorites, payload) => {
 return [...favorites, payload];
};

const findItem = (favorites, payload) => {
 const idx = favorites.findIndex((favorite) => favorite.id === payload.id);
 console.log(idx);
 if (idx !== -1) {
  console.log("If");
  return favorites.filter((favorite) => favorite.id !== payload.id);
 } else {
  console.log("Else");
  return [...favorites, payload];
 }
 /*if (find >= 0) {
  console.log(find);
  favorites.splice(favorites[find], 1);
  return favorites;
 } else {
  console.log(find);
  return [...favorites, payload];
 }*/
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
