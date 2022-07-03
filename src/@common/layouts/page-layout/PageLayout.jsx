import React from "react";
import PropTypes from "prop-types";
import SideNavLayout from "../side-nav-layout/SideNavLayout";
import MainContainerLayout from "../main-container-layout/MainContainerLayout";
import "./PageLayout.css";

function PageLayout({ children }) {
  return (
    <div className="page-layout">
      <SideNavLayout />
      <MainContainerLayout>{children}</MainContainerLayout>
    </div>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
