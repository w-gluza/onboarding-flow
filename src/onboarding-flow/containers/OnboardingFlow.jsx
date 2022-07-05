import React, { useState } from "react";
import PropTypes from "prop-types";
import Intro from "../components/intro/Intro";
import PanelGroup from "../../@common/components/panel/PanelGroup";
import SinglePanel from "../components/single-panel/SinglePanel";

// panels
import WelcomeScreen from "../components/welcome-screen/WelcomeScreen";
import CompanyDetails from "../components/company-details/CompanyDetails";
import UltimateBeneficialOwner from "../components/ultimate-beneficial-owner/UltimateBeneficialOwner";
import BusinessNature from "../components/business-nature/BusinessNature";
import EstimatedBusinessVolume from "../components/estimated-business-volume/EstimatedBusinessVolume";
import CustomerApproval from "../components/customer-approval/CustomerApproval";

function OnboardingFlow({ handleStepUpdate }) {
  const [activeIndex, setActiveIndex] = useState(null);

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
          <WelcomeScreen handleStepUpdate={handleStepUpdate} setActiveIndex={setActiveIndex} id={1} />
        </SinglePanel>

        <SinglePanel
          id={2}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          iconName="two"
          headingTitle="Company details"
        >
          <CompanyDetails setActiveIndex={setActiveIndex} id={2} />
        </SinglePanel>

        <SinglePanel
          id={3}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          iconName="three"
          headingTitle="Ultimate beneficial owner(s)"
        >
          <UltimateBeneficialOwner setActiveIndex={setActiveIndex} id={3} />
        </SinglePanel>

        <SinglePanel
          id={4}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          iconName="four"
          headingTitle="Nature of business"
        >
          <BusinessNature setActiveIndex={setActiveIndex} id={4} />
        </SinglePanel>

        <SinglePanel
          id={5}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          iconName="five"
          headingTitle="Estimated monthly volume"
        >
          <EstimatedBusinessVolume setActiveIndex={setActiveIndex} id={5} />
        </SinglePanel>

        <SinglePanel
          id={6}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          iconName="six"
          headingTitle="Customer approval"
        >
          <CustomerApproval setActiveIndex={setActiveIndex} />
        </SinglePanel>
      </PanelGroup>
    </section>
  );
}

OnboardingFlow.propTypes = {
  handleStepUpdate: PropTypes.func.isRequired,
};

export default OnboardingFlow;
