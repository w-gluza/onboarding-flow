import React from "react";
import "./FAQ.css";

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
          <div header={<h5>What do I need of customer information?</h5>}>
            <p className="text--sm">Yes, you can pause in the middle of the flow and get back if you need so.</p>
          </div>
          <div header={<h5>How long does the workflow take?</h5>}>
            <p className="text--sm">Yes, you can pause in the middle of the flow and get back if you need so.</p>
          </div>
          <div header={<h5>Can I come back later?</h5>}>
            <p className="text--sm">Yes, you can pause in the middle of the flow and get back if you need so.</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default FAQ;
