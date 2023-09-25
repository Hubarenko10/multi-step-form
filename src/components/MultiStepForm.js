import { useState } from "react"
import { YourInfo } from "./YourInfo/YourInfo"
import { Plan } from "./SelectPlan/Plan";
import { AddOns } from "./Add-ons/AddOns";
import { SummaryComponent } from "./Summary/Summary";
import { FinishPage } from "./FinishPage/FinishPage";


export const MultiStepForm = () => {
    const [currentStep,setCurrentStep] = useState(1);

    const Change = () => {
        setCurrentStep(currentStep-2)
    }

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
            return <Plan onNext = {handleNext} onPrevious = {handlePrevious}/>
            case 3:
            return <AddOns onNext = {handleNext} onPrevious = {handlePrevious}/>
            case 4:
            return <SummaryComponent onChange={Change} onNext = {handleNext} onPrevious = {handlePrevious}/>
            case 5:
            return <FinishPage/>
            default: return null;
        }
    
    }
    return(
        <>
          {renderStep()}  
        </>
    )
}


