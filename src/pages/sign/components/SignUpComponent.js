import React, { useState } from "react";
import { Grid, Paper, Typography, TextField, Box, Button, Link } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Axios from "axios";

const theme = createTheme({
  palette: {
    orangeFake: {
      main: "#f7812d",
      contrastText: "#fff"
    }
  }
});

const paperStyle = {
  padding: 20,
  width: 420,
  height: 500,
  margin: "40px auto",
  alignContent: "center",
  alignItems: "center"
};

const headerStyle = { margin: 0, fontFamily: "Monospace", fontSize: "24px" };

const SignUpComponent = () => {
  const [usernameReg, setUsernameReg] = useState("");
  const [phonenumberReg, setPhonenumberReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [emailReg, setEmailReg] = useState("");

  const register = () => {
    Axios.post("", {
      full_name: usernameReg,
      phone_number: phonenumberReg,
      password: passwordReg,
      email: emailReg
    }).then((response) => {

      console.log(response.data);
    });
  };

  return (
    <Paper elevation={10} style={paperStyle}>
      <Grid align="center" style={{ marginTop: 20 }}>
        <h2 style={headerStyle}>Join us as a Travelwala member</h2>
        <Typography variant="caption" gutterBottom>Please fill this form to create an account!</Typography>
      </Grid>
      <TextField id="username"
                 variant="standard"
                 label="Username"
                 placeholder="Enter your username"
                 onChange={(e) => {
                   setUsernameReg(e.target.value);
                 }}
                 fullWidth required
      />
      <TextField id="phoneNumber"
                 variant="standard"
                 label="Phone Number"
                 placeholder="Enter your phone number"
                 onChange={(e) => {
                   setPhonenumberReg(e.target.value);
                 }}
                 fullWidth required
      />
      <TextField id="password"
                 variant="standard"
                 label="Password"
                 placeholder="Enter your password"
                 type="password"
                 onChange={(e) => {
                   setPasswordReg(e.target.value);
                 }}
                 fullWidth required
      />
      <TextField id="email"
                 variant="standard"
                 label="Email"
                 type="password"
                 placeholder="Enter your email"
                 onChange={(e) => {
                   setEmailReg(e.target.value);
                 }}
                 fullWidth required
      />
      <Box sx={{ pt: 1 }} style={{ textAlign: "center" }}>
        <ThemeProvider theme={theme}>
          <Button type="submit"
                  color="orangeFake"
                  style={{ marginTop: 20 }}
                  variant="contained"
                  onClick={register}
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