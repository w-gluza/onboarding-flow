const STEPS_ENUM = {
  welcomeStepCompleted: 1,
  companyDetailsCompleted: 2,
  uboCompleted: 3,
  businessNatureCompleted: 4,
  estimatedMonthlyVolume: 5,
  customerApproval: 6,
};

const getMaxCompletedStep = (valuesFromLS) => {
  const stepsArray = Object.keys(valuesFromLS).map((key) => ({
    name: key,
    isCompleted: valuesFromLS[key],
    stepNumber: STEPS_ENUM[key],
  }));

  const maxCompletedStep = Math.max(...stepsArray.map((o) => o.isCompleted && o.stepNumber), 0);

  return maxCompletedStep || 0;
};

export default getMaxCompletedStep;
