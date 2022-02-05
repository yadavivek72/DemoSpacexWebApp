import { configureStore } from "@reduxjs/toolkit";
import { name, reducer } from "../features/Missions/missions.reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "persist-key",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: {
    [name]: persistedReducer,
  },
});

export const persistor = persistStore(store);
