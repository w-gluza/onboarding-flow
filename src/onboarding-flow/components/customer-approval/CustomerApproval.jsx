import React from "react";
import PropTypes from "prop-types";
import Button from "../../../@common/components/button/Button";
import ButtonGroup from "../../../@common/components/button-group/ButtonGroup";

function CustomerApproval({ setActiveIndex }) {
  return (
    <article className="padding-md">
      <p>Your customer is now approved.</p>
      <ButtonGroup>
        <Button text="Close" variant="secondary" onClick={() => setActiveIndex(0)} />
      </ButtonGroup>
    </article>
  );
}

CustomerApproval.propTypes = {
  setActiveIndex: PropTypes.func.isRequired,
};

export default CustomerApproval;
