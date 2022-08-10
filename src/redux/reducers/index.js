import { combineReducers } from "redux";

import { productReducer, selectedProductReducer } from "./productReducer";
import { toggleFavoriteReducer } from "./favoriteReducer";

import { cartReducer } from "./cartReducer";

const reducers = combineReducers({
 allProducts: productReducer,
 product: selectedProductReducer,
 favorites: toggleFavoriteReducer,
 cart: cartReducer,
});

export { reducers };
