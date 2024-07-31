import "./styles/Header.css";
import Button from "./Button";
import Input from "../components/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();

  const [search, setSearch] = useState(
    document.getElementById("search")
      ? document.getElementById("search").value
      : ""
  );
  return (
    <div className="header-container flex">
      <nav className="flex">
        <div className="logo">
          Dev<span>Desk</span>
        </div>

        <Link to="/">Home</Link>
        <Link to="/editor">Editor</Link>
        <Link to="/search">Search</Link>
      </nav>
      <div className="flex auth">
        <FontAwesomeIcon icon={faSearch} size="xl"></FontAwesomeIcon>
        <div>
          <Input name="search" id="search" placeholder="Search . . ."></Input>
        </div>
        <Button
          bgColor="--primary-color"
          text="Log In"
          borderRadius="2rem"
        ></Button>
        <Button
          bgColor="--background-light"
          text="Sign Up"
          borderRadius="2rem"
        ></Button>
      </div>
    </div>
  );
}
