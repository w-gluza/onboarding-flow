import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function OnboardingFlow() {
  const [isOpen, setOpen] = useLocalStorage("is-open", false);

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <button type="button" onClick={handleToggle}>
        Toggle
      </button>
      {isOpen && <div>Content</div>}
    </div>
  );
}

export default OnboardingFlow;
