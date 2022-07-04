import React, { useContext, useLayoutEffect, useState } from "react";
import PropTypes from "prop-types";
import { PanelContext } from "./PanelContext";

const DEFAULT_HEIGHT = "auto";

export function getHeight(element) {
  if (!element || !element.current) {
    return DEFAULT_HEIGHT;
  }
  return `${element.current.scrollHeight}px`;
}

function PanelContent({ children, eventKey }) {
  const [style, setStyle] = useState(null);
  const id = `panelContent" + ${eventKey + 1}`;
  const { activeIndex } = useContext(PanelContext);

  // * "useLayoutEffect - use this if you need to perform measurements" https://kentcdodds.com/blog/useeffect-vs-uselayouteffect
  useLayoutEffect(() => {
    const element = document.getElementById(id);
    if (eventKey === activeIndex) {
      const height = element.scrollHeight;
      setStyle({ height });
    } else {
      setStyle(null);
    }
  }, [eventKey, activeIndex]);

  return (
    <div id={id} className="panelContent" style={style}>
      {children}
    </div>
  );
}

PanelContent.propTypes = {
  children: PropTypes.node.isRequired,
  eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default PanelContent;
