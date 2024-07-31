import { useGetScriptsByNameQuery } from "../api/ScriptsApi";
import ScriptList from "../components/ScriptList";


export default function Search(searchFor){
    var search = localStorage.getItem('search');
    var {data, isLoading, isSucces, isError, error} = useGetScriptsByNameQuery({name: search});
    return(
        <center>
            <ScriptList header={search} list={data}></ScriptList>
        </center>
    )
}