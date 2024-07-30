import React, { useState } from "react";
import "./styles/SwitchButton.css";

const SwitchButton = ({ onToggle }) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    onToggle(!isOn);
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={isOn} onChange={toggleSwitch} />
      <span className="slider"></span>
    </label>
  );
};

export default SwitchButton;
