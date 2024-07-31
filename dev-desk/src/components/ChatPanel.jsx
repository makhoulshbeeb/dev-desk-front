import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/ChatPanel.css'
import { faChevronDown, faChevronUp, faPaperPlane, faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import ListItem from './ListItem'
import Input from './Input';
import { useDeleteChatMutation , useGetAllChatsQuery, useGetChatsByUsernameQuery } from '../api/ChatsApi';
import { useEffect, useState } from 'react';
import { useCreateMessageMutation, useGetMessagesQuery } from '../api/MessagesApi';

export default function ChatPanel({username='2R0GPVEef32h7b7MCaKS'}) {
    const [chatId, setChatId] = useState(null);
    const [toggle, setToggle] = useState(false);
    useEffect(()=>{
        console.log(chatId);
    },[chatId]);
    var {data, isLoading, isSucces, isError, error} = useGetAllChatsQuery();
    console.log(data);
    useEffect(()=>{console.log(data)},[data]);
    useEffect(()=>{if(!toggle) setChatId(null)},[toggle])
    return (
        <>
        <div className='chat-container'>
            <ChatToggleBar setToggle={setToggle} toggle={toggle}></ChatToggleBar>
            {toggle && <ChatList list={data}  setChatId={setChatId}></ChatList>}
        </div>
        {chatId && <Chat chat_id={chatId}></Chat>}
        </>
    )
}

function ChatToggleBar({setToggle, toggle}) {
    return (
        <div className='chat-toggle'>
            <div>
                <div className='my-pfp'></div>
                <div>Messaging</div>
            </div>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} size='lg'></FontAwesomeIcon>
                <br></br>
                <FontAwesomeIcon icon={toggle?faChevronDown:faChevronUp} onClick={()=>{setToggle(!toggle)}}></FontAwesomeIcon>
            </div>
        </div>
    )
}

function ChatList({ list = [{id:2, username_2: 'test'}], setChatId, chatId}) {
    const [deleteChat] = useDeleteChatMutation();
    return (
        <div className="chat-list">
            {
                list.map(element => {
                    if (chatId==element.id) console.log(chatId)
                    return (
                        <div key={element.id} onClick={()=>{setChatId(element.id)}} onDoubleClick={()=>{console.log(element.id);deleteChat({id: element.id})}}>
                            <ListItem title={element.username_2} subText={'element.lastMessage'} time_ago={'1min'} image={require('./assets/icons/profile.png')} imageBorderRadius={'36px'} bgColor={`${element.id!=chatId?'var(--background-color)':'var(--background-color)'}`}></ListItem>
                            <hr></hr>
                        </div>
                    )
                })
            }
        </div>
    )
}

function Chat(chat_id){
    var {data, isLoading, isSucces, isError, error} = useGetMessagesQuery(chat_id);
    console.log(data)
    return(
        <div className='chat'>
            <ChatLog messages={data}></ChatLog>
            <ChatInput chat_id={chat_id}></ChatInput>
        </div>
    )
}

function ChatLog({ messages = [{username: 'moxifloxi', message:'long string jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj', created_at:'now'}] }){
    return(
        <div className='chat-log'>
            {messages.map(element=>{
                return(
                    <ChatMessage
                        type= {element.username==localStorage.getItem('username')?'sent':'recieved'}
                        message={element.message}
                        time={element.created_at}
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
            <div className='flex'><div>{message}</div></div>
            <p>{time}</p>
        </div>
    )
}
function ChatInput(chat_id){
    const [sendMessage]= useCreateMessageMutation();
    const [input, setInput] = useState('');
    const username = localStorage.getItem('username')
    return(
        <div className='chat-input'>
            <div style={{flexGrow:1}}><Input placeholder={'Type here...'} change={(e)=>setInput(e.target.value)}></Input></div>
            <div className='send-btn' onClick={()=>{sendMessage({username : username, message : input, chat_id: chat_id})}}><FontAwesomeIcon icon={faPaperPlane} color='var(--text-color)' size='xl'></FontAwesomeIcon></div>
        </div>
    )
}