import React, { Fragment } from "react";
import { Box, Divider } from "@mui/material";
import FlightDetail from "./flight-detail/FlightDetail";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { FlightResponse } from "../../../../api/flight/FlightService.types";

function FlightCart() {
  const roundTrip: boolean = useSelector(
    (state: RootState) => (state.criteria as any).roundTrip
  );
  const departureFlight: FlightResponse = useSelector(
    (state: RootState) => state.booking.departureFlight
  );
  const returnFlight: FlightResponse | undefined = useSelector(
    (state: RootState) => state.booking.returnFlight
  );

  return (
    <Box
      sx={{
        height: "308px",
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
        airlineImage={departureFlight.airline?.imageLink}
        airlineName={departureFlight.airline?.name}
        departureTime={departureFlight.departureTime}
        arrivalTime={departureFlight.expectedArrivalTime}
        departureAirport={departureFlight.departureAirport}
        arrivalAirport={departureFlight.arrivalAirport}
      />
      {roundTrip && returnFlight && (
        <Fragment>
          <Divider />
          <FlightDetail
            title="Return"
            airlineImage={returnFlight.airline?.imageLink}
            airlineName={returnFlight.airline?.name}
            departureTime={returnFlight.departureTime}
            arrivalTime={returnFlight.expectedArrivalTime}
            departureAirport={returnFlight.departureAirport}
            arrivalAirport={returnFlight.arrivalAirport}
          />
        </Fragment>
      )}
    </Box>
  );
}

export default FlightCart;
