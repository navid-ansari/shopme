import { ActionTypes } from "../constants/action-types";

import store from "../store";

const defaultItem = (favorites, payload) => {
 console.log("default item");
 payload.isFavorite = true;
 return [payload, ...favorites];
};

const findItem = (favorites, payload) => {
 const idx = favorites.findIndex((favorite) => favorite.id === payload.id);

 // if already favorite
 if (idx !== -1) {
  console.log("If");
  //console.log(favorites);
  let unFavorite = [];
  unFavorite = favorites.filter((favorite) => {
   if (favorite.id !== payload.id) {
    //favorite.isFavorite = true;
    //console.log(favorite);
    return favorite;
   }
  });
  console.log(unFavorite);
  return [...unFavorite];

  // if not already favorite
 } else {
  console.log("Else");
  const modifiedFavorites = favorites.map((favorite) => {
   return {
    ...favorite,
    isFavorite: true,
   };
  });
  payload.isFavorite = true;
  const newFavorites = [payload, ...modifiedFavorites];
  console.log(newFavorites);
  return newFavorites;
 }
};

export const toggleFavoriteReducer = (state = [], { type, payload }) => {
 switch (type) {
  case ActionTypes.FAVOURITE_PRODUCTS:
   return state.length === 0
    ? defaultItem(state, payload)
    : findItem(state, payload);
  default:
   return state;
 }
};

//return favorites.filter((favorite) => favorite.id !== payload.id);
