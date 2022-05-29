import * as React from 'react'
import {forwardRef, useState} from 'react'
import {MenuItem} from "@mui/material";
import Box from "@mui/material/Box";
import WalaTextField from "../../../components/WalaTextField";

function LocationBox(props, ref) {
  const [airport, setAirport] = useState(props.title === "From" ? 'Noi Bai' : 'Tan Son Nhat');
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
              {option.city}
            </MenuItem>
          ))}
        </WalaTextField>
      </Box>
    </div>
  );
}

const airports = [
  {label: 'Noi Bai', city: 'Hanoi', value: 'Noi Bai'},
  {label: 'Tan Son Nhat', city: 'Ho Chi Minh City', value: 'Tan Son Nhat'},
  {label: 'Cam Ranh', city: 'Nha Trang', value: 'Cam Ranh'},
  {label: 'Da Nang', city: 'Da Nang', value: 'Da Nang'},
  {label: 'Phu Bai', city: 'Hue', value: 'Phu Bai'}
]

export default forwardRef(LocationBox)