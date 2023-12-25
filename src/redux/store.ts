import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/es/storage";
import { rootReducer } from "./reducer";

const persistConfig = {
  key: "root",
  storage: localStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export let store = createStore(persistedReducer);
export let persistor = persistStore(store);
