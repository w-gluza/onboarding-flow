import React from "react";
import PropTypes from "prop-types";
import SideNavLayout from "./SideNavLayout";
import MainContainerLayout from "./MainContainerLayout";

function PageLayout({ children }) {
  return (
    <>
      <SideNavLayout />
      <MainContainerLayout>{children}</MainContainerLayout>
    </>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
