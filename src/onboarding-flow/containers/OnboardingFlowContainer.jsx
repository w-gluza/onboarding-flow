import React, { useState, useEffect } from "react";
import OnboardingFlow from "./OnboardingFlow";
import formInitialValues from "../utils/formInitialValues";

function OnboardingFlowContainer() {
  const [stepperState, setStepperState] = useState(formInitialValues);

  useEffect(() => {
    localStorage.setItem("onboarding-form-two", JSON.stringify(stepperState));
  }, [stepperState]);

  const handleStepUpdate = (param) => {
    const newState = { ...stepperState.steps, ...param };
    setStepperState(newState);
  };

  return <OnboardingFlow handleStepUpdate={handleStepUpdate} />;
}

export default OnboardingFlowContainer;
