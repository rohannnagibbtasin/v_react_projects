import React,{useContext} from 'react';
import { Button, TextField } from '@mui/material';
import { multiStepContext } from '../StepContex';

export default function ThirdStep() {
    const { submitData } = useContext(multiStepContext);
  return <div>
      <div>
            <TextField label="City" margin="normal" variant="outlined" color='secondary' />
        </div>
        <div>
            <TextField label="Landmark" margin="normal" variant="outlined" color='secondary' />
        </div>
        <div>
            <TextField label="Postal Code" margin="normal" variant="outlined" color='secondary' />
        </div>
        <Button variant="contained" color="primary" onClick={submitData}>Next</Button>
  </div>;
}
