import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/ChatPanel.css'
import { faChevronUp, faMessage, faPaperPlane, faPenToSquare, faUpDown } from '@fortawesome/free-solid-svg-icons'
import ListItem from './ListItem'
import Input from './Input';

export default function ChatPanel({chat_id}) {
    chat_id=1;
    return (
        <>
        <div className='chat-container'>
            <ChatToggleBar></ChatToggleBar>
            <ChatList></ChatList>
        </div>
        {chat_id!=0 && <Chat></Chat>}
        </>
    )
}

function ChatToggleBar() {
    return (
        <div className='chat-toggle'>
            <div>
                <div className='my-pfp'></div>
                <div>Messaging</div>
            </div>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} size='lg'></FontAwesomeIcon>
                <br></br>
                <FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon>
            </div>
        </div>
    )
}

function ChatList({ list = [{ username: 'LebronJames', lastMessage: 'Wanna a sprite cranberry?', time_ago: '5min' }, { username: 'LebronJames', lastMessage: 'Wanna a sprite cranberry?', time_ago: '5min' }, { username: 'LebronJames', lastMessage: 'Wanna a sprite cranberry? Wanna a sprite cranberry?Wanna a sprite cranberry?', time_ago: '5min' }, { username: 'LebronJames', lastMessage: 'Wanna a sprite cranberry?', time_ago: '5min' }, { username: 'LebronJames', lastMessage: 'Wanna a sprite cranberry?', time_ago: '5min' }, { username: 'LebronJames', lastMessage: 'Wanna a sprite cranberry?', time_ago: '5min' }, { username: 'LebronJames', lastMessage: 'Wanna a sprite cranberry?', time_ago: '5min' }, { username: 'LebronJames', lastMessage: 'Wanna a sprite cranberry?', time_ago: '5min' }] }) {
    return (
        <div className="chat-list">
            {
                list.map(element => {
                    return (
                        <>
                            <ListItem title={element.username} subText={element.lastMessage} time_ago={element.time_ago} image={require('./assets/icons/profile.png')} imageBorderRadius={'36px'} bgColor='var(--background-color)'></ListItem>
                            <hr></hr>
                        </>
                    )
                })
            }
        </div>
    )
}

function Chat(){
    return(
        <div className='chat'>
            <ChatLog></ChatLog>
            <ChatInput></ChatInput>
        </div>
    )
}

function ChatLog({ messages=[{username:'moxifloxi',message:'OK! stfu', time:'28-7-2024 2:02 am'},{username:'LebronJames',message:'Wanna sprite cranberry?', time:'28-7-2024 2:01 am'},{username:'moxifloxi',message:'no', time:'28-7-2024 2:02 am'},{username:'LebronJames',message:'Wanna sprite cranberry?', time:'28-7-2024 2:01 am'},{username:'moxifloxi',message:'no', time:'28-7-2024 2:02 am'},{username:'LebronJames',message:'Wanna a sprite cranberry? Wanna a sprite cranberry?Wanna a sprite cranberry?', time:'28-7-2024 2:01 am'},{username:'moxifloxi',message:'no', time:'28-7-2024 2:02 am'},{username:'LebronJames',message:'Wanna a sprite cranberry? Wanna a sprite cranberry?Wanna a sprite cranberry?', time:'28-7-2024 2:01 am'},{username:'moxifloxi',message:'no', time:'28-7-2024 2:02 am'},{username:'LebronJames',message:'Wanna sprite cranberry?', time:'28-7-2024 2:01 am'},{username:'moxifloxi',message:'no', time:'28-7-2024 2:02 am'},{username:'LebronJames',message:'Wanna a sprite cranberry? Wanna a sprite cranberry?Wanna a sprite cranberry?', time:'28-7-2024 2:01 am'}]}){
    return(
        <div className='chat-log'>
            {messages.map(element=>{
                return(
                    <ChatMessage
                        type= {element.username=='moxifloxi'?'sent':'recieved'}
                        message={element.message}
                        time={element.time}
                    ></ChatMessage>
                )
            }
            )}
        </div>
    )
}
function ChatMessage({type , message, time}){
    return(
        <div className={`message ${type}`}>
            <div>{message}</div>
            <p>{time}</p>
        </div>
    )
}
function ChatInput(){
    return(
        <div className='chat-input'>
            <div style={{flexGrow:1}}><Input placeholder={'Type here...'}></Input></div>
            <div className='send-btn'><FontAwesomeIcon icon={faPaperPlane} color='var(--text-color)' size='xl'></FontAwesomeIcon></div>
        </div>
    )
}