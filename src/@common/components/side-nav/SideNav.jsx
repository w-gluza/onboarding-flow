import React from "react";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import "./SideNav.css";

function SideNav() {
  return (
    <nav className="nav">
      <Logo className="logo" />
    </nav>
  );
}

export default SideNav;
