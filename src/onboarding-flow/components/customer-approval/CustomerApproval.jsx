import React from "react";
import PropTypes from "prop-types";
import Button from "../../../@common/components/button/Button";
import ButtonGroup from "../../../@common/components/button-group/ButtonGroup";
import stepsInitialValues from "../../utils/formInitialValues";

function CustomerApproval({ setActiveIndex, handleStepUpdate }) {
  const onClose = () => {
    setActiveIndex(0);

    // resetting stepper
    handleStepUpdate(stepsInitialValues);
  };
  return (
    <article className="spacing-md">
      <p>Your customer is now approved.</p>
      <ButtonGroup>
        <Button text="Close" variant="secondary" onClick={() => onClose()} />
      </ButtonGroup>
    </article>
  );
}

CustomerApproval.propTypes = {
  setActiveIndex: PropTypes.func.isRequired,
  handleStepUpdate: PropTypes.func.isRequired,
};

export default CustomerApproval;
