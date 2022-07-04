import React from "react";
import "./WelcomeScreen.css";

function WelcomeScreen() {
  return (
    <div className="welcome-screen">
      <p>KYC & Due Dilligence</p>
      <h1>Add new customer</h1>
      <p>
        Estimated time: <span className="text--bold">10 minutes</span>
      </p>
    </div>
  );
}

export default WelcomeScreen;
