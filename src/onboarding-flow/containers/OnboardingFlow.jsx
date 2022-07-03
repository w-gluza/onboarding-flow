import React from "react";
import WelcomeScreen from "../components/welcome-screen/WelcomeScreen";
import CompanyDetails from "../components/company-details/CompanyDetails";

function OnboardingFlow() {
  return (
    <>
      <WelcomeScreen />
      <CompanyDetails />
    </>
  );
}

export default OnboardingFlow;
