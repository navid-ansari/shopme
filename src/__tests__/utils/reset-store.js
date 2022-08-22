import createStore from "redux-mock-store";

export const mockedStore = () => {
 const mockStore = createStore({
  reducer: {
   allProducts: { products: [] },
   product: {},
   favorites: [],
   cart: [],
  },
 });

 const initialState = {
  allProducts: { products: [] },
  product: {},
  favorites: [],
  cart: [],
 };

 const store = mockStore(initialState);
 return store;
};
