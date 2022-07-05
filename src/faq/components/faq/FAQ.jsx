import React, { useState } from "react";
import PanelGroup from "../../../@common/components/panel/PanelGroup";
import PanelContainer from "../../../@common/components/panel/PanelContainer";
import PanelHeader from "../../../@common/components/panel/PanelHeader";
import PanelContent from "../../../@common/components/panel/PanelContent";
import faqQuestions from "../../resources/resources";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="faq-section">
      <h3 className="text--bright">FAQ</h3>
      <section className="faq-contents">
        <h4 className="text--bold">Get help with the KYC and Due Dilligence</h4>
        <p>
          Here you will find instruction on how to complete the KYC and Due Dilligence step by step. If you still have
          questions, let us know.
        </p>
        <PanelGroup>
          {faqQuestions.map(({ question, answer }, index) => (
            <PanelContainer key={question}>
              <PanelHeader eventKey={index + 50} activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
                {question}
              </PanelHeader>
              <PanelContent eventKey={index + 50} activeIndex={activeIndex}>
                {answer}
              </PanelContent>
            </PanelContainer>
          ))}
        </PanelGroup>
      </section>
    </section>
  );
}

export default FAQ;
