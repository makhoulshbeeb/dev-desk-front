import Button from './Button';
import DropDown from './DropDown';
import ScriptListItem from './ScriptListItem';
import './styles/ScriptList.css';

export default function ScriptList({ list = [{ scriptName: 'Test.js', language: 'javascript', username: 'moxifloxi' },{ scriptName: 'Test.js', language: 'javascript', username: 'moxifloxi' },{ scriptName: 'Test.js', language: 'javascript', username: 'moxifloxi' },{ scriptName: 'Test.js', language: 'javascript', username: 'moxifloxi' },{ scriptName: 'Test.js', language: 'javascript', username: 'moxifloxi' },{ scriptName: 'Test.js', language: 'javascript', username: 'moxifloxi' }] }) {
    return (
        <div className="script-list-container">
            <div className="head-tab">
                <Button bgColor={'--background-color'} text={'+ Create Project'} borderRadius='0.6rem'></Button>
                <DropDown></DropDown>
            </div>
            <div className='list-items'>
            {
                list.map(script => {
                    return (
                        <ScriptListItem script_name={script.scriptName} username={script.username} language={script.language} time_ago={'10 hours'}></ScriptListItem>
                    )
                })
            }
            </div>
        </div>
    )
}
