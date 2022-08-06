import { combineReducers } from "redux";

import { productReducer, selectedProductReducer } from "./productReducer";
import { toggleFavoriteProductReducer } from "./favoriteProductReducer";

import { cartReducer } from "./cartReducer";

const reducers = combineReducers({
 allProducts: productReducer,
 product: selectedProductReducer,
 favorites: toggleFavoriteProductReducer,
 cart: cartReducer,
});

export { reducers };
