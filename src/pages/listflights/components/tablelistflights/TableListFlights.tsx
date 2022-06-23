import React from "react";
import { SearchFlightResponse } from "../../../../api/flight/FlightService.types";
import { Table, TableBody, TableContainer } from "@mui/material";
import FlightItem from "./FlightItem/FlightItem";
import { BoxTableListFlight } from "./TableListFlight.styles";

type TableListFlightsProps = {
  data: SearchFlightResponse;
};

function TableListFlights(props: TableListFlightsProps) {
  const { data } = props;

  return (
    <BoxTableListFlight
      sx={{
        boxShadow: 3,
      }}
    >
      <TableContainer
        sx={{
          margin: "0px 16px 8px",
          width: "calc(100% - 30px)",
          height: "100%",
          "&::-webkit-scrollbar": {
            width: 10,
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#fff",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#888",
            borderRadius: 10,
            border: "2px solid transparent",
            backgroundClip: "content-box",
            "&:hover": {
              backgroundColor: "#555",
            },
          },
        }}
      >
        <Table aria-label="simple table" style={{ borderCollapse: "inherit" }}>
          <TableBody>
            {data.departureFlights?.map((flight) => (
              <FlightItem flight={flight} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </BoxTableListFlight>
  );
}

export default TableListFlights;
