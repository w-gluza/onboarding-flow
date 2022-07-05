import React, { useState, useEffect } from "react";
import OnboardingFlow from "./OnboardingFlow";
import stepsInitialValues from "../utils/formInitialValues";
import getMaxCompletedStep from "../utils/getMaxCompletedStep";

function OnboardingFlowContainer() {
  const [stepperState, setStepperState] = useState(
    JSON.parse(localStorage.getItem("onboarding-flow")) ?? stepsInitialValues
  );

  // +1 because we want user to start to fill up the form from the next unfilled panel
  const completedStepsFakeAPI = getMaxCompletedStep(stepperState) + 1;

  useEffect(() => {
    localStorage.setItem("onboarding-flow", JSON.stringify(stepperState));
  }, [stepperState]);

  const handleStepUpdate = (param) => {
    const newState = { ...stepperState, ...param };
    setStepperState(newState);
  };

  return <OnboardingFlow handleStepUpdate={handleStepUpdate} initialActiveIndex={completedStepsFakeAPI} />;
}

export default OnboardingFlowContainer;
