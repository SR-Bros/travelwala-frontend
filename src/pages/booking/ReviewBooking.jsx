import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import React from "react";
import BookingProcess from "./components/BookingProcess";
import FlightDisplay from "./components/FlightDisplay";
import DisplayInfoBlock from './components/DisplayInfoBlock';
import PriceDetail from './components/PriceDetail';
import { passengerListSelector } from '../../redux/selectors';
import {useDispatch, useSelector}  from "react-redux";


const tommyxiaomi = {
  name: 'Tomy xiaomy',
  "Mobile number": '0909023421',
  Email: 'tomy.xm@gmail.com'
}

const Booking = () => {
    // TODO: GET passengerlist from redux

    const travelerDetail = useSelector(passengerListSelector);
    console.log(travelerDetail);
    
    return (
    <Box sx={{
        ml: 7,
        mt: 5
    }}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <div>
                    <h1>Contact Details</h1>
                </div>
            </Grid>
            <Grid item xs={7.5}>
                <DisplayInfoBlock attributes={["Mobile number", "Email"]} info={tommyxiaomi}/>
            </Grid>
            <Grid item xs={2.5}>
                <FlightDisplay/>
            </Grid>
            <Grid item xs={2}>
                <BookingProcess currentState='review'/>
            </Grid>
            {/* Traveler Details */}
            <Grid item xs={12} sx={{mt:-10}}>
                <div>
                    <h1>Traveler Details</h1>
                </div>
            </Grid>
            <Grid item xs={7.5}>
                {
                  travelerDetail.map((e) => 
                    <>
                    <DisplayInfoBlock attributes={["title", "lastName", "dateOfBirth", "email", "type"]} info={e} />
                    </>
                    )
                }
            </Grid>
            {/* Payment Details */}
            <Grid item xs={12} sx={{}}>
                <div>
                    <h1>Price Details</h1>
                </div>
            </Grid>
            <Grid item xs={7.5}>
              <PriceDetail />
            </Grid>
            <Grid item xs={5} >
                <Box sx={{          
                    mb: 5,      
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignContent: 'center',
                }}>
                    <Button variant='outlined' href='#'>Continue To Payment</Button>
                </Box>
            </Grid>
        </Grid>
    </Box>
  );
};

export default Booking;