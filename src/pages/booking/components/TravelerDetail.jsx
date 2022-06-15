import * as React from 'react';
import * as ThemeStyle from './css/style'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Container} from '@mui/system';

const TravelerDetailComponent = (props) => {
    const [title, setTitle] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [dateOfBirth, setDateOfBirth] = React.useState("");
    const [email, setEmail] = React.useState("");

    const handleOnChange = (event, setFunction) => {
        setFunction(event.target.value);
    }

    React.useEffect(() => {
        setTitle(props.passenger.title);
        setFirstName(props.passenger.firstName);
        setLastName(props.passenger.lastName);
        setDateOfBirth(props.passenger.dateOfBirth);
        setEmail(props.passenger.email);
    }, [props.passenger]);

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
                            <h3>Passenger {props.index+1}</h3>
                            <Button onClick={() => 
                                props.onRemove(props.index)
                                }
                            >
                                Remove Passenger
                            </Button>
                        </Box>
                    </div>
                    <div>
                        <TextField
                            id="title"
                            placeholder="Title"
                            helperText=""
                            value={title}
                            onChange={(event) => {
                                handleOnChange(event, setTitle); 
                                props.passenger.title = event.target.value;
                            }}
                        />
                    </div>
                    <div>
                        <TextField
                            id="first-name"
                            placeholder="First Name*"
                            helperText=""
                            value={firstName}
                            onChange={(event) => {
                                handleOnChange(event, setFirstName); 
                                props.passenger.firstName = event.target.value;
                            }}
                        />
                        <TextField
                            id="last-name"
                            placeholder="Midle & Last Name*"
                            helperText=""
                            value={lastName}
                            onChange={(event) => {
                                handleOnChange(event, setLastName); 
                                props.passenger.lastName = event.target.value;
                            }}
                        />
                    </div>
                    <div>
                        <TextField
                            id="date-of-birth"
                            placeholder="Date of Birth*"
                            helperText=""
                            value={dateOfBirth}
                            onChange={(event) => {
                                handleOnChange(event, setDateOfBirth); 
                                props.passenger.dateOfBirth = event.target.value;
                            }}
                        />
                        <TextField
                            id="email-address"
                            placeholder="Email address*"
                            helperText=""
                            value={email}
                            onChange={(event) => {
                                handleOnChange(event, setEmail); 
                                props.passenger.email = event.target.value;
                            }}
                        />
                    </div>
                </Container>
            </Box>
        </div>
        );
    // };
}



export default function TravelerDetail() {
    const [passengers, setPassengers] = React.useState([]);

    return (
        <>
        <div>
            {
                passengers.map((passenger, index) =>
                    <>
                        <TravelerDetailComponent
                            passenger={passenger}
                            index={index}
                            onRemove={(index) => 
                                setPassengers([...passengers.slice(0, index), ...passengers.slice(index+1, passengers.length)])
                            }
                            passengers={passengers}
                        />
                    </>
                )
            }
        </div>
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
                <Button 
                    variant='outlined'
                    onClick={() => {setPassengers(
                        [
                            ...passengers ,
                            {
                                title: "",
                                firstName: "",
                                lastName: "",
                                dateOfBirth: "",
                                email: ""
                            }
                        ]); 
                    }}
                    sx={{m:2}}
                >
                    Add Passenger
                </Button> 
            </Box>
        </div>
        </>
    );
}
