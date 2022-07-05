import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

function PanelHeader({ children, eventKey, activeIndex, setActiveIndex }) {
  const panelClasses = classNames("panel-header", {
    "panel-header-active": eventKey === activeIndex,
  });

  const handleClick = (e) => {
    setActiveIndex(e === activeIndex ? null : e);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className={panelClasses}
      onClick={() => handleClick(eventKey)}
      onKeyPress={() => handleClick(eventKey)}
    >
      {children}
    </div>
  );
}

PanelHeader.defaultProps = {
  activeIndex: null,
};

PanelHeader.propTypes = {
  children: PropTypes.node.isRequired,
  eventKey: PropTypes.number.isRequired,
  activeIndex: PropTypes.number,
  setActiveIndex: PropTypes.func.isRequired,
};

export default PanelHeader;
