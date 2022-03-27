import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Inputs } from './inputs';
import {InputsDialog} from './inputsDialog';
import {ShowData} from './DataView';
function App() {
  return (
    <div className="App">
      <ShowData/>
      <InputsDialog/>
      <Inputs/>
    </div>
  );
}

export default App;
