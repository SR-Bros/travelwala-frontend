import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingState } from "./types";
import { FlightResponse } from "../../api/flight/FlightService.types";

const initialState: BookingState = {
  departureFlight: {} as FlightResponse,
  returnFlight: {} as FlightResponse,
};

const bookingSlice = createSlice({
  name: "bookingSlice",
  initialState: initialState,
  reducers: {
    chooseDepartureFlightForBooking: (
      state,
      action: PayloadAction<FlightResponse>
    ) => {
      state.departureFlight = action.payload;
    },
    chooseReturnFlightForBooking: (
      state,
      action: PayloadAction<FlightResponse>
    ) => {
      state.returnFlight = action.payload;
    },
  },
});

export default bookingSlice.reducer;
export const { chooseDepartureFlightForBooking, chooseReturnFlightForBooking } =
  bookingSlice.actions;
