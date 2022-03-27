
import { DataGrid ,GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { useState } from 'react';
const rows=[
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 4, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ];
  
export const ShowData=(props)=>{
const [state,setState] = useState(rows);


    return (<div>
<h1>DataGrid</h1>
<div onClick={()=>{

let tRows =[];
Object.assign(tRows,state);
tRows.push({ id: 7, col1: 'NEW', col2: 'is Amazing!!!!' })
setState(tRows);


}}>Add</div>
<div  style={{ height: 400, width: '100%' }}
>    
<DataGrid  columns={[
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
  ]}
  
 rows={state}
  
  />

</div>
    </div>);
}