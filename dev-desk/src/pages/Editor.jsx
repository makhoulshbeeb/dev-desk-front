import { useParams } from "react-router-dom";
import ScriptEditor from "../components/ScriptEditor";
import { useGetScriptQuery } from "../api/ScriptsApi";


export default function Editor(){
    const {script} = useParams();
    console.log(script);
    const {data} = useGetScriptQuery({id: script});
    return(
            data && <ScriptEditor scriptData={data}></ScriptEditor>
    )
}