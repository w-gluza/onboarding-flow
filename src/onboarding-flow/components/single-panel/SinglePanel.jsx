import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import PanelContainer from "../../../@common/components/panel/PanelContainer";
import PanelHeader from "../../../@common/components/panel/PanelHeader";
import PanelContent from "../../../@common/components/panel/PanelContent";
import FormHeading from "../../../@common/components/form/form-heading/FormHeading";
import getMaxCompletedStep from "../../utils/getMaxCompletedStep";

function SinglePanel({ id, iconName, headingTitle, children }) {
  const [activeIndex, setActiveIndex] = useState(null);
  useEffect(() => {
    setActiveIndex(getMaxCompletedStep());
  }, []);

  const iconActive = id !== activeIndex && id <= getMaxCompletedStep();

  return (
    <PanelContainer key={id}>
      <PanelHeader eventKey={id} activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
        <FormHeading iconName={iconName} text={headingTitle} isCompleted={iconActive} />
      </PanelHeader>
      <PanelContent eventKey={id} activeIndex={activeIndex}>
        {children}
      </PanelContent>
    </PanelContainer>
  );
}

SinglePanel.propTypes = {
  id: PropTypes.number.isRequired,
  iconName: PropTypes.string.isRequired,
  headingTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default SinglePanel;
