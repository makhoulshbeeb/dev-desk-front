import { useGetScriptsByUsernameQuery } from "../api/ScriptsApi";
import ScriptList from "../components/ScriptList";
import UserCard from "../components/UserCard";


export default function User({ username = 'moxifloxi' }) {
    var username = localStorage.getItem('username');
    var {data, isLoading, isSucces, isError, error} = useGetScriptsByUsernameQuery({username: username});
    return (
        <div className="flex" style={{justifyContent:"space-between"}}>
            <UserCard></UserCard>
            <ScriptList header={`${username}'s Projects`} list={data}></ScriptList>
        </div>
    )
}