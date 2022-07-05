import React from "react";
import PropTypes from "prop-types";
import "./Panel.css";

function PanelGroup({ children }) {
  return <section className="panelGroup">{children}</section>;
}

PanelGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PanelGroup;
