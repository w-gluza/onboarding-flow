import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Logo } from "./src/Logo.svg";
import { ReactComponent as Checkmark } from "./src/Checkmark.svg";
import { ReactComponent as ChevronUp } from "./src/ChevronUp.svg";
import { ReactComponent as ChevronDown } from "./src/ChevronDown.svg";
import { ReactComponent as One } from "./src/One.svg";
import { ReactComponent as Two } from "./src/Two.svg";
import { ReactComponent as Three } from "./src/Three.svg";
import { ReactComponent as Four } from "./src/Four.svg";
import { ReactComponent as Five } from "./src/Five.svg";
import { ReactComponent as Six } from "./src/Six.svg";

const iconTypes = {
  logo: Logo,
  checkmark: Checkmark,
  chevronUp: ChevronUp,
  chevronDown: ChevronDown,
  one: One,
  two: Two,
  three: Three,
  four: Four,
  five: Five,
  six: Six,
};

function IconComponent({ name, ...props }) {
  const Icon = iconTypes[name];
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Icon {...props} />;
}

IconComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default IconComponent;
