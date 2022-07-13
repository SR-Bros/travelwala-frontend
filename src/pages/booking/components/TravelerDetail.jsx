import * as React from 'react';
import * as ThemeStyle from './css/style'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Container} from '@mui/system';
import {useDispatch, useSelector}  from "react-redux";
import { passengerSelector } from "../../../redux/selectors";
import { addAdult, addChild, addInfant, removeAdult, removeChild, removeInfant } from "../../../redux/actions";
import {
    choosePassengerForBooking
  } from "../../../redux/booking/BookingSlice";

function Passengers() {
    const dispatch = useDispatch();
    const {adult, child, infant} = useSelector(passengerSelector);
    const handleIncrease = (type) => {
        switch (type) {
            case "Adult":
            dispatch(addAdult())
            break
            case "Child":
            dispatch(addChild())
            break
            case "Infant":
            dispatch(addInfant())
            break
            default:
            break
        }
    }
  
    const handleDecrease = (type) => {
        switch (type) {
            case "Adult":
            dispatch(removeAdult())
            break
            case "Child":
            dispatch(removeChild())
            break
            case "Infant":
            dispatch(removeInfant())
            break
            default:
            break
        }
    }
}

const TravelerDetailComponent = (props) => {
    const [title, setTitle] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [dateOfBirth, setDateOfBirth] = React.useState("");
    const [email, setEmail] = React.useState("");

    const dispatch = useDispatch();

    const handleOnChange = (event, setFunction) => {
        dispatch(choosePassengerForBooking(props.passengers));
        setFunction(event.target.value);
    }

    React.useEffect(() => {
        setTitle(props.passenger.title);
        setFirstName(props.passenger.firstName);
        setLastName(props.passenger.lastName);
        setDateOfBirth(props.passenger.dateOfBirth);
        setEmail(props.passenger.email);
        console.log(props.passengers)
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
                                {props.passenger.type}
                            </Button>
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
    const {adult, child, infant} = useSelector(passengerSelector);
    const [passengers, setPassengers] = React.useState([]);

    React.useEffect(() => {
        debugger
        for(let i = 0; i < adult; i++) {
            setPassengers(
                [
                    ...passengers ,
                    {
                        title: "",
                        firstName: "",
                        lastName: "",
                        dateOfBirth: "",
                        email: "",
                        type: "Adult"
                    }
                ]);
        }
        for(let i = 0; i < child; i++) {
            setPassengers(
                [
                    ...passengers ,
                    {
                        title: "",
                        firstName: "",
                        lastName: "",
                        dateOfBirth: "",
                        email: "",
                        type: "Child"
                    }
                ]);
        }
        for(let i = 0; i < infant; i++) {
            setPassengers(
                [
                    ...passengers ,
                    {
                        title: "",
                        firstName: "",
                        lastName: "",
                        dateOfBirth: "",
                        email: "",
                        type: "Infant"
                    }
                ]);
        }
    }, [])

    return (
        <>
        <Grid Container>
            <Grid item xs={12}>
                {
                    passengers.map((passenger, index) =>
                        <>
                            <TravelerDetailComponent
                                passenger={passenger}
                                index={index}
                                onRemove={(index) => {
                                    setPassengers([...passengers.slice(0, index), ...passengers.slice(index+1, passengers.length)])
                                    // Decrease the passenger type count in redux 
                                    Passengers.handleDecrease();
                                }}
                                passengers={passengers}
                            />
                        </>
                    )
                }
            </Grid>
            <Grid item xs={12} sx={{
                ...ThemeStyle.box, 
                border:0,
                mb: 5
                }}
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
                                email: "",
                                type: "Adult"
                            }
                        ]); 
                    }}
                    sx={{width:'100%'}}
                >
                    Add Passenger
                </Button> 
            </Grid>
        </Grid>
        </>
    );
}
