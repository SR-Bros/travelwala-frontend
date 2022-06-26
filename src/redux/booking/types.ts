import { FlightResponse } from "../../api/flight/FlightService.types";

export type BookingState = {
  departureFlight: FlightResponse;
  returnFlight?: FlightResponse;

  // TODO: create type ContactResponse in directory /api/contact

  // TODO: create type PassengerResponse in directory /api/response
};
