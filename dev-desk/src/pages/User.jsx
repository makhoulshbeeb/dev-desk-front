import { useParams } from "react-router-dom";
import { useGetScriptsByUsernameQuery } from "../api/ScriptsApi";
import ScriptList from "../components/ScriptList";
import UserCard from "../components/UserCard";
import { useGetUsersByUsernameQuery } from "../api/UsersApi";


export default function User() {
    const {username} = useParams();
    const {data, isLoading, isSucces, isError, error} = useGetScriptsByUsernameQuery({username: username});
    return (
        <div className="flex" style={{justifyContent:"space-between"}}>
            <UserCard userData = {{username: username}}></UserCard>
            <ScriptList header={`${username}'s Projects`} list={data}></ScriptList>
        </div>
    )
}