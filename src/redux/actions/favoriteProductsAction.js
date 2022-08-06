import { ActionTypes } from "../constants/action-types";

export const toggleFavoriteProduct = (products) => {
 return {
  type: ActionTypes.FAVOURITE_PRODUCTS,
  payload: products,
 };
};

export const addSelectedFavoriteProduct = (product) => {
 return {
  type: ActionTypes.ADD_SELECTED_FAVOURITE_PRODUCT,
  payload: product,
 };
};

export const removeSelectedFavoriteProduct = (product) => {
 return {
  type: ActionTypes.REMOVE_SELECTED_FAVOURITE_PRODUCT,
  payload: product,
 };
};
