import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';
import { DataGrid ,GridRowsProp, GridColDef } from '@mui/x-data-grid';


const rows=[
     ];
  
export const ShowData2=(props)=>{
  const [rowsState,setrowsState] = useState(rows);
  const [stateID,setStateID] = useState(1);
  const [state,setState] = useState('');
  const [state1,setState1] = useState('');
  const [state2,setState2] = useState('');


    return (<div>
<h1>DataGrid 2</h1>
<Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 828,
          height: 200
        }
      }}
    >
<Paper elevation={6}>
      


<TextField
                required
                label="Write another Word"
                defaultValue=""
                onChange={(e)=>{
                   let v = e.target.value;
                   setState(v)
                }}
              />
      <TextField
                required
                label="Write another Word"
                defaultValue=""
                onChange={(e)=>{
                   let v = e.target.value;
                   setState1(v)
                }}
              />
      <TextField
                required
                label="Write another Word"
                defaultValue=""
                onChange={(e)=>{
                   let v = e.target.value;
                   setState2(v)
                }}
              />
              </Paper>
              
</Box>
<div onClick={()=>{



let tRows =[];
Object.assign(tRows,rowsState);
let v,v1,v2;

v = state;
v1 =state1;
v2 =state2;
tRows.push({ id:stateID, col1:v , col2:v1, col3:v2 });
setrowsState(tRows);
console.log(tRows);
setStateID(stateID+1);


}}>Add</div>
<div  style={{ height: 400, width: '100%' }}
>    
<DataGrid  columns={[
    { field: 'col1', headerName: 'Column 1', minWidth: 50 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
    { field: 'col3', headerName: 'Column 3', width: 150 },
  ]}
  
 rows={rowsState}
  
  />

</div>
    </div>);
}