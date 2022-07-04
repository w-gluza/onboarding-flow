import React from "react";
import PropTypes from "prop-types";
import PanelContainer from "../../../@common/components/panel/PanelContainer";
import PanelHeader from "../../../@common/components/panel/PanelHeader";
import PanelContent from "../../../@common/components/panel/PanelContent";
import FormHeading from "../../../@common/components/form/form-heading/FormHeading";

function SinglePanel({ id, iconName, headingTitle, children }) {
  return (
    <PanelContainer key={id}>
      <PanelHeader eventKey={id}>
        <FormHeading iconName={iconName} text={headingTitle} />
      </PanelHeader>
      <PanelContent eventKey={id}>{children}</PanelContent>
    </PanelContainer>
  );
}

SinglePanel.propTypes = {
  id: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  headingTitle: PropTypes.string.isRequired,
  children: PropTypes.number.isRequired,
};
export default SinglePanel;
