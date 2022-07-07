import * as React from "react";
import { Link } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Logo from "../assets/travelwala.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navbar = () => {
  const [transportAnchorEl, setTransportAnchorEl] = React.useState(null);
  const [accommodationAnchorEl, setAccommodationAnchorEl] = React.useState(null);

  const openTransport = Boolean(transportAnchorEl);
  const openAccommodation = Boolean(accommodationAnchorEl);

  const handleClickTransport = (event) => {
    setTransportAnchorEl(event.currentTarget);
  };

  const handleClickAccommodation = (event) => {
    setAccommodationAnchorEl(event.currentTarget);
  };

  const handleFlightsClick = () => {
    setTransportAnchorEl(null);
  };

  const handleComboClick = () => {
    setTransportAnchorEl(null);
  };

  const handleHotelsClick = () => {
    setTransportAnchorEl(null);
  };

  const handleCloseTransport = () => {
    setTransportAnchorEl(null);
  };

  const handleCloseAccommodation = () => {
    setAccommodationAnchorEl(null);
  };

  const btnStyle = { my: 2, color: "black", display: "block", mr: 2 };

  return (<AppBar position="sticky" style={{background: "#FFFFFF", top:"0"}}>
    <Toolbar>
      <Grid container>
        <Grid item xs={4}>
          <Link href="/">
            <img src={Logo} alt="Travelwala_logo" />
          </Link>
        </Grid>
        <Grid item xs={8}>
          <Box sx={{
            alignItems: "right",
            justifyContent: "right",
            lexGrow: 1,
            display: { xs: "none", md: "flex" }
          }}>

            {/*Transport menu button*/}
            <div>
              <Button
                id="transport-button"
                aria-controls={openTransport ? "transport-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openTransport ? "true" : undefined}
                onClick={handleClickTransport}
                sx={{ my: 2, color: "black", mr: 2 }}
              >
                Transport
                <KeyboardArrowDownIcon />
              </Button>
              <Menu
                id="transport-menu"
                anchorEl={transportAnchorEl}
                open={openTransport}
                onClose={handleCloseTransport}
                MenuListProps={{
                  "aria-labelledby": "transport-button"
                }}
              >
                <MenuItem onClick={handleFlightsClick}>Flights</MenuItem>
                <MenuItem onClick={handleComboClick}>Flight + Hotel</MenuItem>
              </Menu>
            </div>
            {/*End of Transport menu button*/}

            {/*Accommodation menu button*/}
            <div>
              <Button
                id="accommodation-button"
                aria-controls={openAccommodation ? "accommodation-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openAccommodation ? "true" : undefined}
                onClick={handleClickAccommodation}
                sx={{ my: 2, color: "black", mr: 2 }}
              >
                Accommodation
                <KeyboardArrowDownIcon />
              </Button>
              <Menu
                id="accommodation-menu"
                anchorEl={accommodationAnchorEl}
                open={openAccommodation}
                onClose={handleCloseAccommodation}
                MenuListProps={{
                  "aria-labelledby": "accommodation-button"
                }}
              >
                <MenuItem onClick={handleHotelsClick}>Hotels</MenuItem>
              </Menu>
            </div>
            {/*End of Accommodation menu button*/}

            <Button sx={btnStyle}>
              Contact
            </Button>

            <Button sx={btnStyle}>
              Things To Do
            </Button>

            <Button
              href="/mybooking"
              sx={btnStyle}>
              My Booking
            </Button>

            <Button
              href="/signin"
              sx={{
              my: 2,
              color: "black",
              display: "block"
            }}>
              Sign In
            </Button>

            <Button
              href="/signup"
              sx={[{
              my: 2,
              color: "white",
              marginLeft: 2,
              background: "black",
              display: "block",
              borderRadius: 40
            },
              {
              "&:hover": { color: "black" }
            }]}>
              Register
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>);
};

export default Navbar;
