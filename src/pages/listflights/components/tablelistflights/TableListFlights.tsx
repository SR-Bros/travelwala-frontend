import React from "react";
import { SearchFlightResponse } from "../../../../api/flight/FlightService.types";
import { Table, TableBody, TableContainer } from "@mui/material";
import FlightItem from "./FlightItem/FlightItem";

type TableListFlightsProps = {
  data: SearchFlightResponse;
};

function TableListFlights(props: TableListFlightsProps) {
  const { data } = props;

  return (
    <TableContainer>
      <Table aria-label="simple table" style={{ borderCollapse: "inherit" }}>
        <TableBody>
          {data.departureFlights?.map((flight) => (
            <FlightItem flight={flight} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableListFlights;
