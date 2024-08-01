import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/ScriptEditor.css'
import { Editor } from "@monaco-editor/react";
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';
import Console from './Console';
import { useUpdateScriptMutation } from '../api/ScriptsApi';
import Assistant from './Assistant';

const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
};

export default function ScriptEditor({ scriptData = [{ id: '1', name: 'dummy.js', content: 'console.log("Hello World!")', language: 'javascript' }] }) {
  const header = scriptData[0].name;
  const editorRef = useRef();
  const [value, setValue] = useState(scriptData.content);
  const [updateScript] = useUpdateScriptMutation();

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };
  return (
    <div className='script-editor'>
      <Assistant editorRef={editorRef} language={scriptData.language}></Assistant>
      <div className='editor-container'>
        <div className="head-editor-tab">
          {<h3>{header}</h3>}
          <FontAwesomeIcon icon={faSave} size='2xl' onClick={()=>{updateScript({id: scriptData.id ,content: value, name: header})}}></FontAwesomeIcon>
        </div>
        <div className='editor'>
          <Editor options={{
            minimap: {
              enabled: false,
            },
          }}
            fontSize={32}
            height="75vh"
            theme="vs-dark"
            language={scriptData.language}
            defaultValue={value}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}>
          </Editor>
        </div>
      </div>
      <Console editorRef={editorRef} language={scriptData.language} version={LANGUAGE_VERSIONS[scriptData.language]}></Console>
    </div>
  )
}