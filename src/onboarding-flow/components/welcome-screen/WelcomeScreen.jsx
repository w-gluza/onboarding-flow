import React from "react";
import Button from "../../../@common/components/button/Button";
import ButtonGroup from "../../../@common/components/button-group/ButtonGroup";

function WelcomeScreen() {
  return (
    <article className="padding-md">
      <p>
        You need to upload and complete KYC & Due Dilligence. Input your basic information about the customer and add
        the UBO. Upload KYC documents and add Due Dilligence.
      </p>
      <ButtonGroup>
        <Button text="Start" variant="secondary" onClick={() => console.log("start")} />
      </ButtonGroup>
    </article>
  );
}

export default WelcomeScreen;
