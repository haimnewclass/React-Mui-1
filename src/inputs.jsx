import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';

export const Inputs=(props)=>{

    const [severity,setSeverity] = useState('');
    const [input1,setInput1] = useState('');
    const [input2,setInput2] = useState('');
    const [input12,setInput12] = useState('');

    
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
      


<TextField
          required
          label="Write another Word"
          defaultValue=""
          onKeyUp={(e)=>{
              let val = e.target.value;
              setInput1(val);

              if(val.length>1 && val.length<=3)
              {
              // alert
                setSeverity('warning');
              }
              else if(val.length===4)
              {
                  // success
                  setSeverity('success');
              }
              else if(val.length>4 ){
                  // Error
                  setSeverity('error');
              }
              console.log(severity);
              console.log(val.length);
          }}
        />

<TextField
          required
          label="Write a Word"
          defaultValue=""
          onChange={(e)=>{
            setInput2(e.target.value)
        }}

        />
<Alert severity={severity}>{severity}</Alert>

<IconButton color="primary" onClick={()=>{
    setInput12(input1+" "+input2);
}}  component="span">
          <SendIcon />
        </IconButton>
        *{input12}*

        </Paper>
</Box>
    </div>)
}
