import React from "react";
import PropTypes from "prop-types";
import PanelContainer from "../../../@common/components/panel/PanelContainer";
import PanelHeader from "../../../@common/components/panel/PanelHeader";
import PanelContent from "../../../@common/components/panel/PanelContent";
import FormHeading from "../../../@common/components/form/form-heading/FormHeading";

function SinglePanel({ id, iconName, headingTitle, activeIndex, setActiveIndex, children }) {
  const iconActive = id !== activeIndex && id <= activeIndex;

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
  activeIndex: PropTypes.number.isRequired,
  setActiveIndex: PropTypes.func.isRequired,
};
export default SinglePanel;
