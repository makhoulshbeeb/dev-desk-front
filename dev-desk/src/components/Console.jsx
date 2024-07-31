import './styles/Console.css'
import Button from './Button'
import axios from "axios";
import { useState, useToast } from 'react';

export default function Console({ editorRef, language, version }) {
    const [output, setOutput] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const runCode = async () => {
        const sourceCode = editorRef.current.getValue();
        if (!sourceCode) return;
        try {
            setIsLoading(true);
            const response = await axios.post("https://emkc.org/api/v2/piston/execute", {
                language: language,
                version: version,
                files: [
                    {
                        content: sourceCode,
                    }
                ]
            });
            const { run: result } = response.data;
            setOutput(result.output.split("\n"));
            result.stderr ? setIsError(true) : setIsError(false);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='console-container'>
            <div className="head-console-tab">
                <Button bgColor={'--background-color'} text={'Run Code'} borderRadius='0.6rem' onClick={runCode}></Button>
                <div></div>
            </div>
            <div className='console' style={{color : isError?"red":"var(--text-light)"}}>
                {output
                    ? output.map((line, i) => <p key={i}>{line}</p>)
                    : 'Click "Run Code" to see the output here'}
            </div>
        </div>
    )
}