import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import FlightSearchBox from "../../home/components/FlightSearchBox";
import './FlightSearchBar.css'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props}></Slide>;
});

const FlightSearchBar = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        maxWidth='xl'
        fullWidth
      >
        <DialogContent>
          <div id="bar">
            <FlightSearchBox/>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FlightSearchBar;