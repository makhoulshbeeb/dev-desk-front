import { useParams } from "react-router-dom";
import { useGetScriptsByNameQuery } from "../api/ScriptsApi";
import ScriptList from "../components/ScriptList";


export default function Search({searchFor}){
    var {data, isLoading, isSucces, isError, error} = useGetScriptsByNameQuery({name: searchFor});
    console.log(searchFor)
    return(
        <center>
            <ScriptList header={searchFor} list={data}></ScriptList>
        </center>
    )
}