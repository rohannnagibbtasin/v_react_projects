import React,{useContext} from 'react';
import { Button, TextField } from '@mui/material';
import { multiStepContext } from '../StepContex';

export default function SecondStep() {
    const { setCurrentStep, userData, setUserData } = useContext(multiStepContext);
  return <div>
      <div>
            <TextField label="Email" margin="normal" variant="outlined" color='secondary' />
        </div>
        <div>
            <TextField label="Country" margin="normal" variant="outlined" color='secondary' />
        </div>
        <div>
            <TextField label="District" margin="normal" variant="outlined" color='secondary' />
        </div>
        <Button onClick={()=>setCurrentStep(3)} variant="contained" color="primary" >Next</Button>
  </div>;
}
