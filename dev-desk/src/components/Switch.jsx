import React, { useEffect, useState } from "react";
import "./styles/SwitchButton.css";

const SwitchButton = ({ setIsSignup, isSignup }) => {
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isSignup}
        onChange={() => {
          setIsSignup(!isSignup);
        }}
      />
      <span className="slider"></span>
    </label>
  );
};

export default SwitchButton;
