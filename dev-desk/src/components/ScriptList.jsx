import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';
import DropDown from './DropDown';
import ListItem from './ListItem';
import './styles/ScriptList.css';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function ScriptList({header, height, list = [{ scriptName: 'Test.js', language: 'javascript', username: 'moxifloxi' },{ scriptName: 'Test.js', language: 'javascript', username: 'moxifloxi' },{ scriptName: 'Test.js', language: 'javascript', username: 'moxifloxi' },{ scriptName: 'Test.js', language: 'javascript', username: 'moxifloxi' },{ scriptName: 'Test.js', language: 'javascript', username: 'moxifloxi' },{ scriptName: 'Test.js', language: 'javascript', username: 'moxifloxi' },{ scriptName: 'Test.js', language: 'javascript', username: 'moxifloxi' },{ scriptName: 'Test.js', language: 'javascript', username: 'moxifloxi' },{ scriptName: 'Test.js', language: 'javascript', username: 'moxifloxi' }] }) {
    var text = <><FontAwesomeIcon icon={faPlus} size='lg'></FontAwesomeIcon>&nbsp; Creat Project</>
    return (
        <div className="script-list-container" style={{height:height}}>
            <div className="head-tab">
                {header?<h2>{header}</h2>:<Button bgColor={'--background-color'} text={text} borderRadius='0.6rem'></Button>}
                <DropDown></DropDown>
            </div>
            <div className='script-list'>
            {
                list.map(script => {
                    return (
                        <ListItem title={script.scriptName} subText={`@${script.username}`} language={script.language} time_ago={'10 hours'}></ListItem>
                    )
                })
            }
            </div>
        </div>
    )
}
