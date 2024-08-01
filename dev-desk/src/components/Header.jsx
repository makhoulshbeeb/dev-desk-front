import "./styles/Header.css";
import Button from "./Button";
import Input from "../components/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Search from "../pages/Search";

export default function Header() {
  const [search, setSearch]= useState('');
  const navigate = useNavigate();
  const username = localStorage.getItem('username')

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
        <FontAwesomeIcon icon={faSearch} size="xl" onClick={()=>{if(search.trim()!='') navigate(`/search/${search}`)}}></FontAwesomeIcon>
        <div>
          <Input name="search" id="search" placeholder="Search . . ." change={(e)=>setSearch(e.target.value)}></Input>
        </div>
        {username?<FontAwesomeIcon icon={faUser} size='3x' onClick={()=>{navigate(`/user/${username}`)}}></FontAwesomeIcon>:
        <>
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
        </>}
      </div>
    </div>
  );
}
