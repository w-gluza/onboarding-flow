import React from "react";
import PropTypes from "prop-types";
import "./ButtonGroup.css";

function ButtonGroup({ children }) {
  return <div className="button-group">{children}</div>;
}

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonGroup;
