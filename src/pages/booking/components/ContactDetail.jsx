import * as React from 'react';
import * as ThemeStyle from './css/style'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';

export default function ContactDetail() {
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
                        />
                        <TextField
                            id="last-name"
                            placeholder="Last Name*"
                            helperText=""
                        />
                    </div>
                    <div>
                        <TextField
                            id="email-address"
                            placeholder="Email address*"
                            helperText=""
                        />
                        <TextField
                            id="phone-number"
                            placeholder="Phone Number*"
                            helperText=""
                        />
                    </div>
                </Container>
            </Box>
    );
}
