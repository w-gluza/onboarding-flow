import React from "react";
import PropTypes from "prop-types";
import PanelContext from "./PanelContext";
import "./Panel.css";

function PanelGroup({ children }) {
  return (
    <PanelContext>
      <section className="panelGroup">{children}</section>
    </PanelContext>
  );
}

PanelGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PanelGroup;
