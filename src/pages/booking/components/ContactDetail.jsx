import * as React from 'react';
import * as ThemeStyle from './css/style'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';

export default function ContactDetail() {
    const passenger = {
        title: "",
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        email: "",
        type: "Adult"
    };

    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [email, setEmail] = React.useState("");

    const handleOnChange = (event, setFunction) => {
        setFunction(event.target.value);
    }

    React.useEffect(() => {
        setTitle(passenger.title);
        setFirstName(passenger.firstName);
        setLastName(passenger.lastName);
        setDateOfBirth(passenger.dateOfBirth);
        setEmail(passenger.email);
        
        const temp = structuredClone(passenger);
        dispatch(choosePassengerForBooking(temp));
    }, [passenger.title, passenger.firstName, passenger.lastName, passenger.dateOfBirth, passenger.email]);

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
                justifyContent: 'center',
                ...ThemeStyle.box
                }}
                noValidate
                autoComplete="off"
            >   
                <Container>
                    <div>
                        <h3>Contact Details (for E-ticket/Voucher)</h3>
                    </div>
                    <div>
                        <TextField
                            id="first-name"
                            placeholder="First Name*"
                            helperText=""
                            value={firstName}
                            onChange={(event) => {
                                handleOnChange(event, setFirstName); 
                                passenger.firstName = event.target.value;
                            }}
                        />
                        <TextField
                            id="last-name"
                            placeholder="Last Name*"
                            helperText=""
                            value={lastName}
                            onChange={(event) => {
                                handleOnChange(event, setLastName); 
                                passenger.lastName = event.target.value;
                            }}
                        />
                    </div>
                    <div>
                        <TextField
                            id="email-address"
                            placeholder="Email address*"
                            helperText=""
                            value={email}
                            onChange={(event) => {
                                handleOnChange(event, setEmail); 
                                passenger.email = event.target.value;
                            }}
                        />
                        <TextField
                            id="phone-number"
                            placeholder="Phone Number*"
                            helperText=""
                            value={phoneNumber}
                            onChange={(event) => {
                                handleOnChange(event, setPhoneNumber); 
                                passenger.phoneNumber = event.target.value;
                            }}
                        />
                    </div>
                </Container>
            </Box>
    );
}
