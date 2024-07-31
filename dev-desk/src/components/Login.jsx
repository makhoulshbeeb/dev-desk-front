import React, { useState } from "react";
import Button from "./Button";
import LabelInput from "./LabelInput";
import "./styles/Form.css";
import { useLoginMutation } from "../api/AuthApi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login,  isLoading, error ] = useLoginMutation();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const navigate = useNavigate();
  const handleLogIn = async () => {
    if (email === "" || password === "") {
      alert("Fields cannot be empty");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Invalid email format");
      return;
    }

    try {
      const result = await login({ email, password }).unwrap();
      console.log("Login successful:", result.error);
      localStorage.setItem("token", result.authorisation.token);
      localStorage.setItem("username", result.user.username);
      navigate("/");
    } catch (e) {
      console.error("Login failed:", e.message);
      alert("Login failed. Please check your credentials.");
    }
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
        onClick={handleLogIn}
        bgColor="--primary-color"
        text="Login"
        borderRadius="0.5rem"
        textColor="--white-color"
      />
    </div>
  );
};

export default Login;
