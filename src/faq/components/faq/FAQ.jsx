import React from "react";
import "./FAQ.css";
import Accordion from "../../../@common/components/panel/PanelGroup";
import Item from "../../../@common/components/panel/PanelContainer";
import Toggle from "../../../@common/components/panel/PanelHeader";
import Collapse from "../../../@common/components/panel/PanelContent";
import faqQuestions from "../../resources/resources";

function FAQ() {
  return (
    <section className="faq-section">
      <h3 className="text--bright">FAQ</h3>
      <section className="faq-contents">
        <h4 className="text--bold">Get help with the KYC and Due Dilligence</h4>
        <p>
          Here you will find instruction on how to complete the KYC and Due Dilligence step by step. If you still have
          questions, let us know.
        </p>
        <div className="panels-container">
          <Accordion>
            {faqQuestions.map(({ question, answer }, index) => (
              <Item key={question}>
                <Toggle eventKey={index}>{question}</Toggle>
                <Collapse eventKey={index}>{answer}</Collapse>
              </Item>
            ))}
          </Accordion>
        </div>
      </section>
    </section>
  );
}

export default FAQ;
