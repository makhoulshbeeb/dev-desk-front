import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import DropDown from "./DropDown";
import ListItem from "./ListItem";
import "./styles/ScriptList.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useGetAllScriptsQuery } from "../api/ScriptsApi";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ScriptList({
  header,
  height,
  list = [
    { id: "1", name: "test.js", language: "javascript", username: "tester" },
  ],
}) {
  const [language, setLanguage] = useState("javascript");
  var text = (
    <>
      <FontAwesomeIcon icon={faPlus} size="lg"></FontAwesomeIcon>&nbsp; Creat
      Project
    </>
  );
  return (
    <div className="script-list-container" style={{ height: height }}>
      <div className="head-tab">
        {header ? (
          <h2>{header}</h2>
        ) : (
          <Button
            bgColor={"--background-color"}
            text={text}
            borderRadius="0.6rem"
          ></Button>
        )}
        <DropDown onSelect={setLanguage} language={language}></DropDown>
      </div>
      <div className="script-list">
        {list.map((script) => {
          return (
            script.language == language && (
              <Link to={`/editor/?script=${script.id}`}>
                <ListItem
                  title={script.name}
                  subText={`@${script.username}`}
                  language={script.language}
                  time_ago={"10 hours"}
                ></ListItem>
              </Link>
            )
          );
        })}
      </div>
    </div>
  );
}
