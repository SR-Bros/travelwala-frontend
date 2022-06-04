import React from "react";
import { Grid } from "@mui/material";
import SignInComponent from "./components/SignInComponent";
import BookNow from "./components/BookNow";

const LeftSideBackground = require("../../assets/plane-and-sky.jpg");

const SignIn = () => {
  return (
    <Grid container>
      <Grid item xs={8}
            style={{
              backgroundImage: `url(${LeftSideBackground})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}>
        <BookNow />
      </Grid>
      <Grid item xs={4}>
        <SignInComponent />
      </Grid>
    </Grid>
  );
};

export default SignIn;