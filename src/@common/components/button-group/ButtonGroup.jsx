import React from "react";
import PropTypes from "prop-types";

function ButtonGroup({ children }) {
  return <div className="btn-group">{children}</div>;
}

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonGroup;
