import { combineReducers } from "redux";

import { ActionTypes } from "../constants/action-types";
import { productReducer, selectedProductReducer } from "./productReducer";
import { toggleFavoriteReducer } from "./favoriteProductReducer";

import { cartReducer } from "./cartReducer";

/*const reducers = combineReducers({
 allProducts: productReducer,
 product: selectedProductReducer,
 favorites: toggleFavoriteProductReducer,
 cart: cartReducer,
});*/

const appReducer = combineReducers({
 /* your app’s top-level reducers */
 allProducts: productReducer,
 product: selectedProductReducer,
 favorites: toggleFavoriteReducer,
 cart: cartReducer,
});

const rootReducer = (state, action) => {
 if (action.type === ActionTypes.RESET_STORE) {
  return appReducer(undefined, action);
 }

 return appReducer(state, action);
};

//export { reducers };
export { rootReducer };
