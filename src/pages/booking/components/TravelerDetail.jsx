import * as React from 'react';
import * as ThemeStyle from './css/style'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Container} from '@mui/system';

const TravelerDetailComponent = (props) => {
    var myform = [];

    const removePassenger = (index) => {
        myform = myform.slice(index);
        props.setNumberOfPassenger(props.numberOfPassenger-1);
        console.log(myform);
    }

    const detailForm = (index) => {
        return (       
        <div>
            <Box
                component="form"
                sx={{
                '& .MuiTextField-root': { m: 1, width: '35ch' },
                border: 1,
                flexWrap: 'wrap',
                display: 'inline-flex',
                alignContent: 'center',
                pb: 1,
                mb:5,
                justifyContent: 'center',
                ...ThemeStyle.box,
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
                            <h3>Passenger {index}</h3>
                            <Button onClick={() => props.numberOfPassenger > 1 ? removePassenger(index-1) : 0 }>Remove Passenger</Button>
                        </Box>
                    </div>
                    <div>
                        <TextField
                            id="title"
                            placeholder="Title"
                            helperText=""
                        />
                    </div>
                    <div>
                        <TextField
                            id="first-name"
                            placeholder="First Name*"
                            helperText=""
                        />
                        <TextField
                            id="last-name"
                            placeholder="Midle & Last Name*"
                            helperText=""
                        />
                    </div>
                    <div>
                        <TextField
                            id="date-of-birth"
                            placeholder="Date of Birth*"
                            helperText=""
                        />
                        <TextField
                            id="email-address"
                            placeholder="Email address*"
                            helperText=""
                        />
                    </div>
                </Container>
            </Box>
        </div>
        );
    };

    for (let i = 0 ; i< props.numberOfPassenger; i++) {
        myform.push(detailForm(i+1));
    }

    return (
        <>
            {myform}
        </>
    );
}



export default function TravelerDetail() {
    const [numberOfPassenger, setNumberOfPassenger] = React.useState(1);

    React.useEffect(() => {
    }, [numberOfPassenger]);

    return (
        <>
        <div>
            <TravelerDetailComponent numberOfPassenger={numberOfPassenger} setNumberOfPassenger={setNumberOfPassenger}/>
        </div>
        <div>
            <Box sx = {{
                mt: 0,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                alignContent: 'center',
            }}>
                <Button 
                    variant='outlined'
                    onClick={() => setNumberOfPassenger(numberOfPassenger+1)}
                    sx={{m:2}}
                >
                    Add Passenger
                </Button> 
            </Box>
        </div>
        </>
    );
}
