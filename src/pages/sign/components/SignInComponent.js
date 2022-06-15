import React, { useState } from "react";
import { Grid, Paper, TextField, Button, Typography, Link, Box } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SignInService from "../../../api/signin/SignInService"
import Axios from "axios";

const theme = createTheme({
  palette: {
    orangeFake: {
      main: "#f7812d",
      contrastText: "#fff"
    }
  }
});

const headerStyle = { margin: 0, fontFamily: "Monospace", fontSize: "24px" };

const paperStyle = {
  padding: 20,
  height: 500,
  width: 420,
  margin: "40px auto",
  alignContent: "center",
  alignItems: "center"
};

const SignInComponent = ({ handleChange }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const user = {
      username: username,
      password: password,
    }

    SignInService.login(user);
  };

  return (
    <Paper elevation={10} style={paperStyle}>
      <Grid align="center" style={{ marginTop: 50 }}>
        <h2 style={headerStyle}>Log in to your account</h2>
      </Grid>
      <TextField id="loginUsername"
                 label="Username"
                 variant="standard"
                 placeholder="Enter username/phone number"
                 onChange={(e) => {
                   setUsername(e.target.value);
                 }}
                 fullWidth required />
      <TextField id="loginPassword"
                 label="Password"
                 variant="standard"
                 placeholder="Enter password"
                 type="password"
                 onChange={(e) => {
                   setPassword(e.target.value);
                 }}
                 fullWidth required />
      <FormControlLabel
        sx={{ pt: 1 }}
        control={
          <Checkbox
            name="checkedB"
            color="primary"
          />
        }
        label="Remember me"
      />

      <Box sx={{ pt: 2 }} style={{ textAlign: "center" }}>
        <ThemeProvider theme={theme}>
          <Button type="submit"
                  color="orangeFake"
                  variant="contained"
                  onClick={login}
                  fullWidth>
            Sign in
          </Button>
        </ThemeProvider>
        <Box sx={{ pt: 2 }}>
          No account yet?
          <div>
            <Link href="./SignUp">
              Register here
            </Link>
          </div>
        </Box>
        <Box sx={{ pt: 5 }}>
          <Typography>Or log in with:</Typography>
          <Button style={{ marginTop: 10 }} variant="contained"
                  fullWidth>
            <div style={{ paddingRight: 5 }}>
              <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c6bf231775a1d162b567c0882e1d7e3b.svg"
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

export default SignInComponent;