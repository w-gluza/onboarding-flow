import React from "react";
import PropTypes from "prop-types";

function PanelGroup({ children }) {
  return <section className="panel-group">{children}</section>;
}

PanelGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PanelGroup;
