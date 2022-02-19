import React, { useContext } from 'react';
import { Button, TextField } from '@mui/material';
import { multiStepContext } from '../StepContex';

export default function FirstStep() {
    const { setCurrentStep, userData, setUserData } = useContext(multiStepContext);
  return (
    <div>
        <div>
            <TextField label="First name" margin="normal" variant="outlined" color='secondary' />
        </div>
        <div>
            <TextField label="Last name" margin="normal" variant="outlined" color='secondary' />
        </div>
        <div>
            <TextField label="Contact Number" margin="normal" variant="outlined" color='secondary' />
        </div>
        <Button onClick={()=>setCurrentStep(2)} variant="contained" color="primary" >Next</Button>
    </div>
  );
}
