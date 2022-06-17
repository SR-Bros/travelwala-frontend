import React, { Fragment, useMemo } from "react";
import { FlightResponse } from "../../../../../api/flight/FlightService.types";
import { Box, Button, TableCell, TableRow, Typography } from "@mui/material";
import {
  convertDateToAmPm,
  hourMinuteDiff,
} from "../../../../../utils/DateTimeUtils";
import DefaultImage from "../../../../../components/SVG/DefaultImage";

type FlightItemProps = {
  flight: FlightResponse;
};

function FlightItem(props: FlightItemProps) {
  const { flight } = props;

  const CellImage = useMemo(() => {
    return (
      <TableCell align="center" style={{ width: "60px" }}>
        {flight.airline.imageLink ? (
          <Box
            component="img"
            sx={{
              height: 64,
              width: 64,
            }}
            src={flight.airline.imageLink}
          />
        ) : (
          <DefaultImage style={{ height: "40px", width: "40px" }} />
        )}
      </TableCell>
    );
  }, [flight.airline.imageLink]);

  const CellAgencyName = useMemo(() => {
    return (
      <TableCell
        align="left"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          // width: "",
        }}
      >
        <Typography>
          {hourMinuteDiff(
            new Date(flight.departureTime),
            new Date(flight.expectedArrivalTime)
          )}
        </Typography>
        <Typography>{flight.airline.name}</Typography>
      </TableCell>
    );
  }, [flight.airline.name]);

  const CellFlightDuration = useMemo(() => {
    return (
      <TableCell align="right" style={{ width: "160px" }}>
        {convertDateToAmPm(new Date(flight.departureTime))}
        &nbsp; - &nbsp;
        {convertDateToAmPm(new Date(flight.expectedArrivalTime))}
      </TableCell>
    );
  }, [flight.departureTime, flight.expectedArrivalTime]);

  const CellPrice = useMemo(() => {
    return (
      <TableCell align="right" style={{ width: "115px" }}>
        {flight.adultEconomicPrice.toLocaleString()} VND
      </TableCell>
    );
  }, [flight.adultBusinessPrice, flight.adultEconomicPrice]);

  const CellBtnChoose = useMemo(() => {
    return (
      <TableCell align="right" style={{ width: "115px" }}>
        <Button type="submit" variant="contained">
          Choose
        </Button>
      </TableCell>
    );
  }, []);

  return (
    <TableRow>
      {CellImage}
      {CellAgencyName}
      {CellFlightDuration}
      {CellPrice}
      {CellBtnChoose}
    </TableRow>
  );
}

export default FlightItem;
