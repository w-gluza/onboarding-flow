import React from "react";
import PropTypes from "prop-types";

function PanelContainer({ children }) {
  return <div className="panelContainer">{children}</div>;
}

PanelContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PanelContainer;
