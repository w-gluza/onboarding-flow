import React from "react";
import PropTypes from "prop-types";

function MainContainerLayout({ children }) {
  return <main className="main-container-layout">{children}</main>;
}

MainContainerLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContainerLayout;
