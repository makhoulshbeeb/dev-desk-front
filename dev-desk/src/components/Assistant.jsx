import './styles/Console.css'
import Button from './Button'
import axios from "axios";
import { useState, useToast } from 'react';

export default function Assistant({ editorRef}) {
    const [output, setOutput] = useState();
    async function assit(){
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions", 
            {
              model: "gpt-3.5-turbo",
              messages: [
                { role: "system", content: "You are a helpful coding assistant." },
                { role: "user", content: editorRef.current.getValue() },
              ],
              max_tokens: 100,
              temperature: 0.7,
            },
            {
              headers: {
                Authorization: `Bearer `, 
              },
            }
          );
          setOutput(response.data.choices[0].message.content.trim());
    }
    return (
        <div className='console-container'>
            <div className="head-console-tab">
                <Button bgColor={'--background-color'} text={'AI Assistant'} borderRadius='0.6rem' onClick={assit}></Button>
                <div></div>
            </div>
            <div className='console' style={{color : "var(--text-light)"}}>
                <p>{output}</p>
            </div>
        </div>
    )
}