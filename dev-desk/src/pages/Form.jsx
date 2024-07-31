import React, { useEffect, useState } from "react";
import SwitchButton from "../components/Switch";
import Login from "../components/Login";
import Signup from "../components/Signup";
import "../components/styles/Form.css";
import { useParams } from "react-router-dom";

export default function Form() {
  const [isSignup, setIsSignup] = useState(false);

  const params = useParams();

  useEffect(() => {
    setIsSignup(params.id === "signup");
  }, [params]);

  return (
    <div className="outer-form">
      <div className="container-form">
        <div className="logo">
          Dev<span>Desk</span>
        </div>
        <SwitchButton
          isSignup={isSignup}
          param={params.id}
          setIsSignup={setIsSignup}
        />
        {isSignup ? <Signup /> : <Login />}
      </div>
    </div>
  );
}
