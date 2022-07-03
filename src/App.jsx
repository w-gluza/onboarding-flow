import React from "react";
import "./App.css";
import PageLayout from "./@common/layouts/page-layout/PageLayout";
import OnboardingFlow from "./onboarding-flow";
import FAQ from "./faq";

function App() {
  return (
    <PageLayout>
      <OnboardingFlow />
      <FAQ />
    </PageLayout>
  );
}

export default App;
