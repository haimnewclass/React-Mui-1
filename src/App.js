import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Inputs } from './inputs';
import {InputsDialog} from './inputsDialog';
import {ShowData} from './DataView';
import {ShowData2} from './DataView2';
function App() {
  return (
    <div className="App">
      <ShowData2/>
      <ShowData/>
      <InputsDialog/>
      <Inputs/>
    </div>
  );
}

export default App;
