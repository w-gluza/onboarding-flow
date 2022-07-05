import React from "react";
import Button from "../../../@common/components/button/Button";
import ButtonGroup from "../../../@common/components/button-group/ButtonGroup";

function CustomerApproval() {
  return (
    <article className="padding-md">
      <p>Your customer is now approved.</p>
      <ButtonGroup>
        <Button text="Close" variant="secondary" onClick={() => console.log("close")} />
      </ButtonGroup>
    </article>
  );
}

export default CustomerApproval;
