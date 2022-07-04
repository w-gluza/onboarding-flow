import React, { useState, useMemo, createContext } from "react";
import PropTypes from "prop-types";

const PanelContext = createContext();

export { PanelContext };

function Store({ children }) {
  const [activeIndex, setActiveIndex] = useState(3);
  const panelPropsProvider = useMemo(() => ({ activeIndex, setActiveIndex }), [activeIndex, setActiveIndex]);

  return <PanelContext.Provider value={panelPropsProvider}>{children}</PanelContext.Provider>;
}

Store.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Store;
