import FirstStep from "./Components/FirstStep";
import { Stepper, StepLabel, Step } from "@mui/material";
import SecondStep from "./Components/SecondStep";
import ThirdStep from "./Components/ThirdStep";
import { useContext } from "react";
import { multiStepContext } from './StepContex';

function App() {
  const { currentStep, finalData } = useContext(multiStepContext)
  const showStep = (step) =>{
    switch(step){
      case 1:
        return <FirstStep />
      case 2:
        return <SecondStep />
      case 3:
        return <ThirdStep />
      default: 
        return;
    }
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
      <div>
        <Stepper style={{ width: '18%' }} activeStep={ currentStep - 1 } orientation="horizontal" >
          <Step>
            <StepLabel>Personal Information</StepLabel>
          </Step>
          <Step>
            <StepLabel>Country</StepLabel>
          </Step>
          <Step>
            <StepLabel>Address</StepLabel>
          </Step>
        </Stepper>
      </div>
      { showStep(currentStep) }
    </div>
  );
}

export default App;
