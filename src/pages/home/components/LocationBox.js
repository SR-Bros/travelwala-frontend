import * as React from 'react'
import {forwardRef, useState} from 'react'
import {MenuItem} from "@mui/material";
import Box from "@mui/material/Box";
import WalaTextField from "../../../components/WalaTextField";

function LocationBox(props, ref) {
  const [airport, setAirport] = useState(props.title === "From" ? 'Hanoi' : 'Ho Chi Minh City');
  const handleChange = (event) => {
    setAirport(event.target.value);
  };
  return (<div>
      <h2 style={{marginBottom: 10}}>{props.title}</h2>
      <Box
        ref={ref}
        component="form"
        sx={{
          '& .MuiTextField-root': {m: 1, width: '300px'},
        }}
        noValidate
        autoComplete="off"
      >
        <WalaTextField
          id={props.title}
          select
          label="City"
          value={airport}
          onChange={handleChange}
          iconStart={props.iconStart}
        >
          {airports.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </WalaTextField>
      </Box>
    </div>
  );
}

const airports = [
    {label: 'Hanoi', value: 'Hanoi'},
    {label: 'Ho Chi Minh City', value: 'Ho Chi Minh City'},
    {label: 'Nha Trang',value: 'Nha Trang'},
    {label: 'Da Nang', value: 'Da Nang'},
    {label: 'Hue', value: 'Hue'}
]

export default forwardRef(LocationBox)