import { createContext, useState } from "react"
import App from "./App";

export const multiStepContext = createContext();

const StepContex = () =>{
    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState([]);
    const [finalData, setFinalData] = useState([]);
    const submitData = ()=>{
        
    }
    return (
        <div>
            <multiStepContext.Provider value={{currentStep, setCurrentStep, userData, setUserData, finalData, setFinalData, submitData }} >
                <App />
            </multiStepContext.Provider>
        </div>
    );

}
export default StepContex;