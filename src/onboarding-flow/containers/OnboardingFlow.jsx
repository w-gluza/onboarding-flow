import React, { useEffect, useState } from "react";
import Intro from "../components/intro/Intro";
import PanelGroup from "../../@common/components/panel/PanelGroup";
import SinglePanel from "../components/single-panel/SinglePanel";
import getMaxCompletedStep from "../utils/getMaxCompletedStep";

// panels
import WelcomeScreen from "../components/welcome-screen/WelcomeScreen";
import CompanyDetails from "../components/company-details/CompanyDetails";
import UltimateBeneficialOwner from "../components/ultimate-beneficial-owner/UltimateBeneficialOwner";
import BusinessNature from "../components/business-nature/BusinessNature";
import EstimatedBusinessVolume from "../components/estimated-business-volume/EstimatedBusinessVolume";
import CustomerApproval from "../components/customer-approval/CustomerApproval";

function OnboardingFlow() {
  const [activeIndex, setActiveIndex] = useState(null);
  useEffect(() => {
    setActiveIndex(getMaxCompletedStep());
  }, []);

  return (
    <section className="onboarding-section">
      <Intro />
      <PanelGroup>
        <SinglePanel
          id={1}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          iconName="one"
          headingTitle="Welcome"
        >
          <WelcomeScreen />
        </SinglePanel>

        <SinglePanel
          id={2}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          iconName="two"
          headingTitle="Company details"
        >
          <CompanyDetails />
        </SinglePanel>

        <SinglePanel
          id={3}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          iconName="three"
          headingTitle="Ultimate beneficial owner(s)"
        >
          <UltimateBeneficialOwner />
        </SinglePanel>

        <SinglePanel
          id={4}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          iconName="four"
          headingTitle="Nature of business"
        >
          <BusinessNature />
        </SinglePanel>

        <SinglePanel
          id={5}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          iconName="five"
          headingTitle="Estimated monthly volume"
        >
          <EstimatedBusinessVolume />
        </SinglePanel>

        <SinglePanel
          id={6}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          iconName="six"
          headingTitle="Customer approval"
        >
          <CustomerApproval />
        </SinglePanel>
      </PanelGroup>
    </section>
  );
}

export default OnboardingFlow;
