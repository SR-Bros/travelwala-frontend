import React, { Fragment } from "react";
import { Box, Divider } from "@mui/material";
import FlightDetail from "./flight-detail/FlightDetail";
import { FlightResponse } from "../../../../api/flight/FlightService.types";

function FlightCart() {
  const willReturn: boolean = true;
  const departureFlight: FlightResponse;
  const arrivalFlight: FlightResponse;
  return (
    <Box
      sx={{
        height: "308px",
        width: "400px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "8px",
        border: "1px solid #E9E8FC",
        borderRadius: "12px",
      }}
    >
      <FlightDetail
        title="Departure"
        airlineImage={departureFlight.airline.imageLink}
        airlineName={departureFlight.airline.name}
        departureTime={departureFlight.departureTime}
        arrivalTime={departureFlight.expectedArrivalTime}
        departureAirport={departureFlight.departureAirport}
        arrivalAirport={departureFlight.arrivalAirport}
      />
      {willReturn ? (
        <Fragment>
          <Divider />
          <FlightDetail
            title="Departure"
            airlineImage={arrivalFlight.airline.imageLink}
            airlineName={arrivalFlight.airline.name}
            departureTime={arrivalFlight.departureTime}
            arrivalTime={arrivalFlight.expectedArrivalTime}
            departureAirport={arrivalFlight.departureAirport}
            arrivalAirport={arrivalFlight.arrivalAirport}
          />
        </Fragment>
      ) : (
        <Fragment></Fragment>
      )}
    </Box>
  );
}

export default FlightCart;
