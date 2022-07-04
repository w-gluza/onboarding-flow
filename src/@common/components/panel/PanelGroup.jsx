import React from "react";
import PropTypes from "prop-types";
import Store from "./Store";
import "./Panel.css";

function PanelGroup({ children }) {
  return (
    <Store>
      <section className="panelGroup">{children}</section>
    </Store>
  );
}

PanelGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PanelGroup;
