import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import DefaultImage from "../../../../../components/SVG/DefaultImage";
import {
  convertDateToAmPm,
  hourMinuteDiff,
} from "../../../../../utils/DateTimeUtils";

type FlightDetailProps = {
  title: string;
  airlineImage?: string | null;
  airlineName: string;
  departureTime: Date;
  arrivalTime: Date;
  departureAirport: string;
  arrivalAirport: string;
  sx?: object;
};

function FlightDetail(props: FlightDetailProps) {
  const {
    title,
    airlineImage,
    airlineName,
    departureTime,
    arrivalTime,
    departureAirport,
    arrivalAirport,
    sx,
  } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        ...sx,
      }}
    >
      {title}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "200px", display: "flex", flexDirection: "row" }}>
          {airlineImage ? (
            <Box
              component="img"
              sx={{
                height: 64,
                width: 64,
              }}
              src={airlineImage}
            />
          ) : (
            <DefaultImage style={{ height: "40px", width: "40px" }} />
          )}
          <Typography>{airlineName}</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography>{hourMinuteDiff(departureTime, arrivalTime)}</Typography>
          <Typography>
            {convertDateToAmPm(new Date(departureTime))}
            &nbsp; - &nbsp;
            {convertDateToAmPm(new Date(arrivalTime))}
          </Typography>
          <Typography>
            {departureAirport}&nbsp; - &nbsp;{arrivalAirport}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default FlightDetail;
