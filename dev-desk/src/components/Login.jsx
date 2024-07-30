import React, { useState } from "react";
import Button from "./Button";
import LabelInput from "./LabelInput";
import "./styles/Form.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSignUp = () => {
    if (email === "" || password === "") {
      alert("Fields cannot be empty");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Invalid email format");
      return;
    }

    const user = {
      email,
      password,
    };

    console.log("User logged in:", user);
  };

  return (
    <div className="inner">
      <LabelInput
        name="Email"
        placeholder="example@gmail.com"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <LabelInput
        name="Password"
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        onClick={handleSignUp}
        bgColor="--primary-color"
        text="Login"
        borderRadius="0.5rem"
        textColor="--white-color"
      />
    </div>
  );
};

export default Login;
