import { createStore } from "redux";
//import { reducers } from "./reducers";
import { rootReducer } from "./reducers";
import { persistReducer, persistStore } from "redux-persist";
import { useDispatch } from "react-redux";
import { resetStoreAction } from "./actions/resetStoreAction";

const store = createStore(
 rootReducer,
 {},
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

export const mockStore = createStore(rootReducer);

export const resetStore = async () => {
 // eslint-disable-next-line react-hooks/rules-of-hooks
 store.dispatch(resetStoreAction());
};

/*export const persistor = persistStore(store);

export const resetStore = async () => {
  await persistor.purge();
  store.dispatch(resetStore());
  await persistor.flush();
};*/
