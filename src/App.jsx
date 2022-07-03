import React from "react";
import "./App.css";
import PageLayout from "./@common/layouts/PageLayout";
import OnboardingFlow from "./onboarding-flow";

function App() {
  return (
    <PageLayout>
      <OnboardingFlow />
    </PageLayout>
  );
}

export default App;
