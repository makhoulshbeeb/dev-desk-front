import ScriptList from "../components/ScriptList";
import UserCard from "../components/UserCard";


export default function User({ username = 'moxifloxi' }) {
    return (
        <div className="flex" style={{justifyContent:"space-between"}}>
            <UserCard></UserCard>
            <ScriptList header={`${username}'s Projects`}></ScriptList>
        </div>
    )
}