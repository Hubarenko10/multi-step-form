import { useState } from "react"
import { YourInfo } from "./YourInfo/YourInfo"


export const MultiStepForm = () => {
    const [currentStep,setCurrentStep] = useState(1);

    const handleNext = () => {
        setCurrentStep(currentStep+1)
    }
    const handlePrevious = () => {
        setCurrentStep(currentStep-1)
    }
     const renderStep = () => {
        switch(currentStep){
            case 1:
            return <YourInfo onNext = {handleNext}/>;
            case 2:
            return <button onClick={handlePrevious}>Go Back</button>
            default: return null;
        }
    
    }
    return(
        <>
          {renderStep()}  
        </>
    )
}


