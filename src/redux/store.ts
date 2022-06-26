import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./booking/BookingSlice";
// @ts-ignore
import criteriaReducer from "./reducer";

const reducers = combineReducers({
  booking: bookingReducer,
  criteria: criteriaReducer,
});

const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
