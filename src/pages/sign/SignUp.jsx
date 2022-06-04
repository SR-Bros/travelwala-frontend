import React from "react";
import { Grid } from "@mui/material";
import SignUpComponent from "./components/SignUpComponent";
import BookNow from "./components/BookNow";

const LeftSideBackground = require("../../assets/plane-and-sky.jpg");

const SignUp = () => {
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
        <SignUpComponent />
      </Grid>
    </Grid>
  );
};

export default SignUp;