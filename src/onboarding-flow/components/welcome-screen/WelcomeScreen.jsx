import React from "react";
import PropTypes from "prop-types";
import Button from "../../../@common/components/button/Button";
import ButtonGroup from "../../../@common/components/button-group/ButtonGroup";

function WelcomeScreen({ handleStepUpdate, setActiveIndex, id }) {
  const step = {
    welcomeStepCompleted: true,
  };

  const onNext = () => {
    setActiveIndex(id + 1);
    handleStepUpdate(step);
  };

  return (
    <article className="padding-md">
      <p>
        You need to upload and complete KYC & Due Dilligence. Input your basic information about the customer and add
        the UBO. Upload KYC documents and add Due Dilligence.
      </p>
      <ButtonGroup>
        <Button text="Start" variant="secondary" onClick={() => onNext()} />
      </ButtonGroup>
    </article>
  );
}

WelcomeScreen.propTypes = {
  id: PropTypes.number.isRequired,
  setActiveIndex: PropTypes.func.isRequired,
  handleStepUpdate: PropTypes.func.isRequired,
};

export default WelcomeScreen;
