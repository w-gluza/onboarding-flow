import React, { useLayoutEffect, useState } from "react";
import PropTypes from "prop-types";

const DEFAULT_HEIGHT = "auto";

export function getHeight(element) {
  if (!element || !element.current) {
    return DEFAULT_HEIGHT;
  }
  return `${element.current.scrollHeight}px`;
}

function PanelContent({ children, eventKey, activeIndex }) {
  const [style, setStyle] = useState(null);
  const id = `"panel-content" + ${eventKey + 1}`;

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
    <div id={id} className="panel-content" style={style}>
      {children}
    </div>
  );
}

PanelContent.defaultProps = {
  activeIndex: null,
};

PanelContent.propTypes = {
  children: PropTypes.node.isRequired,
  eventKey: PropTypes.number.isRequired,
  activeIndex: PropTypes.number,
};

export default PanelContent;
