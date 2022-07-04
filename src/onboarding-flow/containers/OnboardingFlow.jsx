import React from "react";
import FormHeading from "../../@common/components/form/form-heading/FormHeading";
import Intro from "../components/intro/Intro";
import WelcomeScreen from "../components/welcome-screen/WelcomeScreen";
import PanelGroup from "../../@common/components/panel/PanelGroup";
import Item from "../../@common/components/panel/PanelContainer";
import Toggle from "../../@common/components/panel/PanelHeader";
import Collapse from "../../@common/components/panel/PanelContent";
import CompanyDetails from "../components/company-details/CompanyDetails";

function OnboardingFlow() {
  return (
    <section>
      <Intro />
      <PanelGroup>
        <Item key="1">
          <Toggle eventKey="1">
            <FormHeading name="one" text="Welcome" />
          </Toggle>
          <Collapse eventKey="1">
            <WelcomeScreen />
          </Collapse>
        </Item>
        <Item key="2">
          <Toggle eventKey="2">
            <FormHeading name="two" text="Company Details" />
          </Toggle>
          <Collapse eventKey="2">
            <CompanyDetails />
          </Collapse>
        </Item>
      </PanelGroup>
    </section>
  );
}

export default OnboardingFlow;
