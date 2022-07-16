import * as React from 'react';
import * as ThemeStyle from './css/style'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { departureSelector } from '../../../redux/selectors';
import {useDispatch, useSelector}  from "react-redux";
import { isConstructorDeclaration } from 'typescript';


const style = {
    border:1,
    ...ThemeStyle.box, 
    width: '100%',
    px: 2,
    mx: 0
};

const infoText = {
    p: 0,
    mb: 0,
    color: 'red',
    border: 1
};

const testFlight = {
    airlineName: 'Vietnamairlines',
    flightName: 'FIG4312',
    flightTime: '16h 45m',
    flightStartTime: '7:00 AM',
    flightEndTime: '4:15 PM',
}

const Flight = ({Flight}) => {
    
    return (
        <Grid container spacing={2} sx={{}}>
            <Grid item xs={6}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    lineHeight: 0
                }}>
                    <item>
                        <p sx={infoText}>{Flight.airlineName}</p>
                    </item>
                    <item>
                        <p>{Flight.flightName}</p>
                    </item>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box sx={{
                    display:'flex',
                    alignItems: 'flex-end',
                    flexDirection:'column',
                    lineHeight: 0
                }}>
                    <item>
                        <p>{Flight.flightTime}</p>
                    </item>
                    <item>
                        <p>{Flight.flightStartTime} - {Flight.flightEndTime}</p>
                    </item>
                    <item>
                        <p>{Flight.flightTime} in HNL</p>
                    </item>
                </Box>
            </Grid>
        </Grid>
    );
}

const returnFlight = true;

export default function FlightDisplay() {
    const departureFlight = useSelector(departureSelector);

    console.log("departure");
    console.log(departureFlight);
    
    return (
        <Box sx={style}>
            <div>
                <h3>Departure</h3>
            </div>
            <Flight Flight={testFlight}/>
            {
                returnFlight ? 
                (
                    <>
                    <Divider />
                    <div>
                        <h3>Return</h3>
                    </div>
                    <Flight Flight={testFlight}/>
                    </>
                ) : (<></>)
            }
            <Divider />
        </Box>
    );
}
