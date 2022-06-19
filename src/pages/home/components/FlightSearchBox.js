import * as React from "react";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { Autocomplete, Button, Checkbox, FormControlLabel, IconButton, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import "./FlightSearchBox.css";
import BoxLocation from "./LocationBox";
import SimplePopper from "./SimplePopper";
import {StoreProvider} from "../../../store"
import BasicDatePicker from "./BasicDatePicker";
import useNavigateSearch from "../../../hooks/useNavigateSearch";

const seatClasses = [
  {
    label: 'Economy'
  },
  {
    label: 'Business'
  }
]

function FlightSearchBox() {
  const [checked, setChecked] = React.useState(false);
  const [value, setValue] = React.useState([null, null]);
  const navigate = useNavigateSearch();

  const handleChange = (e) => {
    if (e.currentTarget.checked) {
      setChecked(true)
    } else {
      setChecked(false)
    }
  }

  const fromRef = React.useRef();
  const toRef = React.useRef();

  const handleSwap = () => {
    const fromInput = fromRef.current.querySelector('input');
    const toInput = toRef.current.querySelector('input');
    const fromDiv = fromRef.current.querySelector('#From');
    const toDiv = toRef.current.querySelector('#To');
    let buff = fromInput.value;
    fromInput.value = toInput.value;
    toInput.value = buff;
    buff = fromDiv.innerHTML;
    fromDiv.innerHTML = toDiv.innerHTML;
    toDiv.innerHTML = buff;
  }

  const getSearchParams = () => {
    const fromInput = fromRef.current.querySelector('input');
    const toInput = toRef.current.querySelector('input');
    const departureDate = document.getElementById("departure-date").querySelector('input').value;
    const returnDate = checked ? document.getElementById("return-date").querySelectorAll('input')[1].value : "NA"
    const seatClass = document.getElementById("seat-class").querySelector('input').value;
    const passengerLabelList = document.getElementById("passenger").querySelector('input').value.split(" ");
    return {
      ap: `${fromInput.value}.${toInput.value}`,
      dt: `${departureDate}.${returnDate}`,
      ps: `${passengerLabelList[0]}.${passengerLabelList[2]}.${passengerLabelList[4]}`,
      sc: seatClass
    };
  }

  return (<StoreProvider>
      <div id="box">
        <div id="left-side">
          <div className="from">
            <BoxLocation
              ref={fromRef}
              title="From"
              iconStart={<FlightTakeoffIcon sx={{color: "#2196f3", fontSize: 25}}/>}
            />
          </div>
          <div>
            <IconButton onClick={handleSwap} sx={{marginLeft: 14, marginBottom: -4, marginTop: 2}}>
              <ChangeCircleIcon sx={{color: "#2196f3", fontSize: 70}}/>
            </IconButton>
          </div>
          <div>
            <BoxLocation
              ref={toRef}
              title="To"
              iconStart={<FlightLandIcon sx={{color: "#2196f3", fontSize: 25}}/>}
            />
          </div>
        </div>
        <div id="center">
          {/*<div id="departure-date">*/}
          {/*  <h2>Departure Date</h2>*/}
          {/*  <BasicDatePicker/>*/}
          {/*</div>*/}
          {/*<div id="return-date">*/}
          {/*  <FormControlLabel*/}
          {/*    className="CheckBox"*/}
          {/*    value="end"*/}
          {/*    control={<Checkbox onChange={(e) => {*/}
          {/*      handleChange(e)*/}
          {/*    }}/>}*/}
          {/*    label={<h2>Return Date</h2>}*/}
          {/*    labelPlacement="end"*/}
          {/*  />*/}
          {/*  <br/>*/}
          {/*  <div style={{transitionDuration: 5, display: visible}}>*/}
          {/*    <BasicDatePicker/>*/}
          {/*  </div>*/}
          {/*</div>*/}
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
              disablePast
              calendars={2}
              PopperProps={{
                sx: {paddingTop: 22, paddingRight: 10}
              }}
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <div id="departure-date">
                    <h2>Departure Date</h2>
                    {checked ? <TextField {...startProps}/> : <BasicDatePicker />}
                  </div>
                  <div id="return-date">
                    <FormControlLabel
                      className="CheckBox"
                      value="end"
                      control={<Checkbox onChange={(e) => {
                        handleChange(e)
                      }}/>}
                      label={<h2>Return Date</h2>}
                      labelPlacement="end"
                    />
                    <br/>
                    {checked && <TextField {...endProps}/>}
                  </div>
                </React.Fragment>
              )}
            />
          </LocalizationProvider>
        </div>
        <div id="right-side">
          <div id="passenger">
            <SimplePopper></SimplePopper>
          </div>
          <h2 style={{marginTop: 100}}>Seat Class</h2>
          <div id="seat-class">
            <Autocomplete
              options={seatClasses}
              defaultValue={seatClasses[0]}
              popupIcon={<ExpandMoreIcon sx={{color: "#2196f3", fontSize: 25}}/>}
              renderInput={(params) =>
                (<TextField
                  {...params}
                />)}
            />
          </div>
          <Button
            variant="contained"
            startIcon={<TravelExploreIcon/>}
            sx={{height: 50, marginTop: 5, marginLeft: 27}}
            onClick={() => {navigate("/flight/search", getSearchParams());}}
          >
            Search flights
          </Button>
        </div>
      </div>
    </StoreProvider>

  );
}

export default FlightSearchBox