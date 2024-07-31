import { useGetScriptsByUsernameQuery } from "../api/ScriptsApi";
import HeroSection from "../components/HeroSection";
import ScriptList from "../components/ScriptList";

export default function Home() {
  var username = localStorage.getItem("username");
  var { data, isLoading, isSucces, isError, error } =
    useGetScriptsByUsernameQuery({ username: username });
  return (
    <>
      <HeroSection></HeroSection>
      <ScriptList height={"80dvh"} list={data}></ScriptList>
    </>
  );
}
