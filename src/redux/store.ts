import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./booking/BookingSlice";
// @ts-ignore
import criteriaReducer from "./reducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducerConfig = {
  key: "travelwala-frontend",
  storage,
  blacklist: ["booking"],
};

const reducers = combineReducers({
  booking: bookingReducer,
  criteria: criteriaReducer,
});

const persistedReducer = persistReducer(rootReducerConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);
const storeProvider = { store, persistor };
export default storeProvider;
