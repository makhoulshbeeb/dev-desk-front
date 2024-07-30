import React, { useState } from "react";
import Button from "./Button";
import LabelInput from "./LabelInput";
import "./styles/Form.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const handleSignUp = () => {
    const user = {
      name,
      email,
      password,
      confirmedPassword,
    };
    console.log(user);
    if (name === "" || email === "" || password === "") {
      alert("Cannot be emty");
      return;
    }
    if (confirmedPassword !== password) {
      alert("not compatibale password");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("invalied email");
    }
  };
  return (
    <div className="inner">
      <LabelInput
        name="Name"
        type="Text"
        placeholder="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <LabelInput
        name="Email"
        type="email"
        placeholder="example@gmail.com"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <LabelInput
        name="Password"
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <LabelInput
        name="Confirmed-Password"
        type="password"
        placeholder="password"
        value={confirmedPassword}
        onChange={(e) => {
          setConfirmedPassword(e.target.value);
        }}
      />

      <Button
        bgColor="--primary-color"
        text="Signup"
        borderRadius="0.5rem"
        textColor="--white-color"
        onClick={handleSignUp}
      />
    </div>
  );
};

export default Signup;
