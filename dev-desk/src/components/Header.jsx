import "./styles/Header.css";
import Button from "./Button";
import Input from "../components/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="header-container flex">
      <nav className="flex">
        <div className="logo">
          Dev<span>Desk</span>
        </div>

        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/Favorites">Favorites</Link>
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
          onClick={() => {
            navigate("/form/login");
          }}
        ></Button>
        <Button
          bgColor="--background-light"
          text="Sign Up"
          borderRadius="2rem"
          onClick={() => {
            navigate("/form/signup");
          }}
        ></Button>
      </div>
    </div>
  );
}
