import React, { useState, createContext } from "react";
import PropTypes from "prop-types";

const CTX = createContext();

export { CTX };

function Store({ children }) {
  const [activeIndex, setActiveIndex] = useState(null);

  return <CTX.Provider value={[activeIndex, setActiveIndex]}>{children}</CTX.Provider>;
}

Store.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Store;
