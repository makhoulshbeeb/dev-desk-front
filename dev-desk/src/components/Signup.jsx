import React, { useState } from "react";
import Button from "./Button";
import LabelInput from "./LabelInput";
import "./styles/Form.css";
import { useRegisterMutation } from "../api/AuthApi";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmedPassword, setConfirmedPassword] = useState("");
  const navigate = useNavigate();
  const [register, { isLoading, error }] = useRegisterMutation();

  const handleSignUp = async () => {
    if (name === "" || email === "" || password === "") {
      alert("Fields cannot be empty");
      return;
    }

    // if (confirmedPassword !== password) {
    //   alert("Passwords do not match");
    //   return;
    // }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email format");
      return;
    }
    const result = {
      name,
      username,
      email,
      password,
    };
    try {
      const res = await register(result).unwrap();
      console.log("register successful:", res);
      navigate("/form/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="inner">
      <LabelInput
        name="Name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <LabelInput
        name="Username"
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <LabelInput
        name="Email"
        type="email"
        placeholder="example@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <LabelInput
        name="Password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* <LabelInput
        name="Confirmed Password"
        type="password"
        placeholder="Password"
        value={confirmedPassword}
        onChange={(e) => setConfirmedPassword(e.target.value)}
      /> */}

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
