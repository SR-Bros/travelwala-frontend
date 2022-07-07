import React, { useState } from "react";
import { Grid, Paper, Typography, TextField, Box, Button, Link } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SignUpService from "../../../api/signup/SignUpService";

//Constant
const theme = createTheme({
  palette: {
    orangeFake: {
      main: "#f7812d",
      contrastText: "#fff"
    }
  },
});

const paperStyle = {
  padding: 20,
  width: 420,
  height: 550,
  margin: "40px auto",
  alignContent: "center",
  alignItems: "center"
};

const headerStyle = { margin: "0", fontFamily: "Monospace", fontSize: "24px" };

const textFieldStyle = { margin: "5px 0px 0px 0px" };

const SignUpComponent = ({ handleChange }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signup = () => {
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      telephone: telephone,
      username: username,
      password: password
    };

    SignUpService.signup(user);
  };

  //Component
  return (
    <Paper elevation={10} style={paperStyle}>
      <Grid align="center" style={{ marginTop: 20 }}>
        <h2 style={headerStyle}>Join us as a Travelwala member</h2>
        <Typography variant="caption" gutterBottom>Please fill this form to create an account!</Typography>
      </Grid>
      <TextField id="firstName"
                 variant="standard"
                 label="First Name"
                 style={textFieldStyle, {marginRight: 30}}
                 onChange={(e) => {
                   setFirstName(e.target.value);
                 }}
                 required
      />
      <TextField id="lastName"
                 variant="standard"
                 label="Last Name"
                 onChange={(e) => {
                   setLastName(e.target.value);
                 }}
                 required
      />
      <TextField id="signupUsername"
                 variant="standard"
                 label="Username"
                 style={textFieldStyle}
                 onChange={(e) => {
                   setUsername(e.target.value);
                 }}
                 fullWidth required
      />
      <TextField id="email"
                 variant="standard"
                 label="Email"
                 style={textFieldStyle}
                 onChange={(e) => {
                   setEmail(e.target.value);
                 }}
                 fullWidth required
      />

      <TextField id="telephone"
                 variant="standard"
                 label="Telephone"
                 style={textFieldStyle}
                 onChange={(e) => {
                   setTelephone(e.target.value);
                 }}
                 fullWidth required
      />
      <TextField id="signupPassword"
                 variant="standard"
                 label="Password"
                 type="password"
                 style={textFieldStyle}
                 onChange={(e) => {
                   setPassword(e.target.value);
                 }}
                 fullWidth required
      />
      <Box sx={{ pt: 1 }} style={{ textAlign: "center" }}>
        <ThemeProvider theme={theme}>
          <Button type="submit"
                  color="orangeFake"
                  style={{ marginTop: 20 }}
                  variant="contained"
                  onClick={signup}
                  fullWidth>
            Sign up
          </Button>
        </ThemeProvider>
        <Box sx={{ pt: 2 }}>
          Already registered?
          <div>
            <Link href="./SignIn">
              Login
            </Link>
          </div>
        </Box>
        <Box sx={{ pt: 1 }}>
          <Typography>Or log in with:</Typography>
          <Button style={{ marginTop: 10 }} variant="contained"
                  fullWidth>
            <div style={{ paddingRight: 5 }}>
              <img
                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c6bf231775a1d162b567c0882e1d7e3b.svg"
                alt="google-icon"
                width="20" height="20" />
            </div>
            Google
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default SignUpComponent;