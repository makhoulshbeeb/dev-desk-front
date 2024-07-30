import React, { useState } from "react";
import SwitchButton from "../components/Switch";
import Login from "../components/Login";
import Signup from "../components/Signup";
import "../components/styles/Form.css";

export default function Form() {
  const [isSignup, setIsSignup] = useState(false);

  const handleToggle = (isOn) => {
    setIsSignup(isOn);
  };

  return (
    <div className="outer-form">
      <div className="container-form">
        <div className="logo">
          Dev<span>Desk</span>
        </div>
        <SwitchButton onToggle={handleToggle} />
        {isSignup ? <Signup /> : <Login />}
      </div>
    </div>
  );
}
