import * as React from 'react';
import * as ThemeStyle from './css/style'
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import { Divider, Grid, Typography } from '@mui/material';
import {
    CreateBookingResponse,
    BookingRequest,
  } from "../../../api/booking/BookingService.types";
  import BookingService from "../../../api/booking/BookingService";

const testPrice = {
    total: 624,
    details: [
        {
            name: "Hawaiian Airlines (Adult)",
            amount: 1,
            price: "503"
        },
        {
            name: "Taxes and Fees",
            amount: "",
            price: "121"
        },
    ]

}

export default function PriceDetail() {
    const [data, setData] = React.useState({});
    const priceDetail = testPrice;
    /*
    const priceDetail = [...props.priceDetail];
    */
    
    const typoStyle = {
        pb: 1,
        fontSize: '20px'
    }

    const loadInvoice = (bookingData) => {
        BookingService.requestBookingInvoice(bookingData)
          .then((response) => {
            if (response && response.data) {
              setData(response.data);
            }
          })
          .catch((reason) => console.log(reason));
    };

    React.useEffect(() => {
        async function init() {
            const bookingData = await initCriteria();
            loadInvoice(bookingData);
          }
      
          init();
    });

    const initCriteria = () => {
        const passengerList = useSelector();
        const departureFlight = useSelector();
        const returnFlight = useSelector();
        const contactDetail = useSelector();

        return {
            createBookingFlightSpecs: {
                travellerSpecs: {
                    adultFormData: adultData,
                    childFormData: childData,
                    infantFormData: infantData
                },
                flightProductSpecs: {
                    departureFlightId: departureFlightInfo,
                    returnFlightId: returnFlightInfo,
                    seatClass: 
                    adultCount:
                    childCount:
                    infantCount:
                }
            },
            bookingContact: {
                firstName: 
                lastName:
                phoneNumber:
                email:
            }
        };
    };

    return (
            <Box
                component="form"
                sx={{
                '& .MuiTextField-root': { m: 1, width: '35ch' },
                border: 1,
                flexWrap: 'wrap',
                display: 'inline-flex',
                alignContent: 'center',
                pb: 1,
                mb: 5,
                justifyContent: 'center',
                width: 700,
                ...ThemeStyle.box
                }}
                noValidate
                autoComplete="off"
            >   
                <Container>
                    <div>
                        <Box
                            sx={{          
                                py:2,   
                                px: 0,               
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                lineHeight: 0
                            }}
                        >
                            <h3>Price you pay</h3>
                            <h3>Total ${priceDetail.total}</h3>
                        </Box>
                    </div>
                    <Divider/>
                    <div>
                        <Box sx={{width: '100%', mt: 2}}>
                            <Grid container columnSpacing={20}>
                            {
                                priceDetail.details.map((e) => 
                                    <>            
                                    <Grid item xs={12} sx={{mb: 2}}>
                                        <Box
                                            sx={{
                                                display:'flex',
                                                alignItems: 'flex-start',
                                                flexDirection:'row',
                                                justifyContent: 'space-between',
                                                lineHeight: 0,
                                                pr: 0,
                                            }}>
                                            <item>
                                                <Typography sx={{...typoStyle}}>{e.name + (e.amount > 0 ? "x" +e.amount : "")}</Typography>
                                            </item>
                                                <Typography sx={{...typoStyle}}>${e.price}</Typography>
                                        </Box>
                                    </Grid>
                                    </>
                                )
                            }
                            </Grid>
                        </Box>
                    </div>
                </Container>
            </Box>
    );
}
