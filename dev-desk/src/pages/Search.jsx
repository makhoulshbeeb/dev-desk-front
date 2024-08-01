import { useParams } from "react-router-dom";
import { useGetScriptsByNameQuery } from "../api/ScriptsApi";
import ScriptList from "../components/ScriptList";


export default function Search(){
    const {search} = useParams();
    var {data, isLoading, isSucces, isError, error} = useGetScriptsByNameQuery({name: search});
    console.log(search)
    return(
        <center>
            <ScriptList header={search} list={data}></ScriptList>
        </center>
    )
}