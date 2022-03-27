import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useState} from 'react';
import * as React from "react";

import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';



export const InputsDialog=(props)=>{

    const [severity,setSeverity] = useState('');
    const [input1,setInput1] = useState('');
    const [openSnack,setopenSnack] = useState(false);




    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleSnackClose=()=>
    {
      setopenSnack(false);
    }
    const handleClose = () => {
      setOpen(false);
    };
    const handleOK = () => {
      setOpen(false);

      let val = input1;
      if(val.length>1 && val.length<=3)
      {
      // alert
        setSeverity('warning');
        setopenSnack(true);
      }
      else if(val.length===4)
      {
          // success
          setSeverity('success');
          setopenSnack(true);
      }
      else if(val.length>4 ){
          // Error
          setSeverity('error');
          setopenSnack(true);
      }
      //
    };
    const handleCloseCancel = () => {
      setOpen(false);
    };

    
    return(<div>
        <h1>Inputs</h1>

        <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 828,
          height: 528
        }
      }}
    >
      <Paper elevation={6}>
      

      <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>String Checker</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter string 
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="simple string"
            type="text"
            fullWidth
            variant="standard"

            onKeyUp={(e)=>{
              let val = e.target.value;
              setInput1(val);
             
          }}
        

          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCancel}>Cancel</Button>
          <Button onClick={handleOK}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>



    <Snackbar open={openSnack} autoHideDuration={7000}  onClose={handleSnackClose}>
        <Alert  severity={severity} style={{width:'100%'}} sx={{ width: '100%' }}>
          {severity}
        </Alert>
      </Snackbar>

<Alert severity={severity}>{severity}</Alert>

        </Paper>
</Box>
    </div>)
}
