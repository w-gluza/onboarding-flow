import React, { useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { PanelContext } from "./PanelContext";

function PanelHeader({ children, eventKey }) {
  const { activeIndex, setActiveIndex } = useContext(PanelContext);

  const panelClasses = classNames("panelHeader", {
    panelHeaderActive: eventKey === activeIndex,
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

PanelHeader.propTypes = {
  children: PropTypes.node.isRequired,
  eventKey: PropTypes.number.isRequired,
};

export default PanelHeader;
