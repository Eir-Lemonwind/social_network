import React, {useEffect, useState} from 'react';
import Nav from '../Components/navbar';
import Post from '../Components/post';
import TextInput from '../Components/TextInput';
import { loginUser } from '../api/user';
import { TOKEN } from '../constatnt';
import {useNavigate} from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import "./styles.css";
import { getMessages } from '../api/chats';
import { sendMessage } from '../api/chats';
import { getChat } from '../api/chats';
const Chat_id = () => {
    const {id} = useParams()
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState([])
    const [chat, setChat] = useState<any>()
    useEffect(()=>{
        getMessages(id).then((value)=>{
            setMessages(value.reverse())
        })
        getChat(id).then((value)=>{
            setChat(value)
        })
    }, [])

    return (
    <div className="chat_page">
        <div className="message_header">{chat?.name}</div>
        <div className="message_container">
            {messages.map((message:any)=>(
                <div style={{
                    float: message.userId == 1 ? "right" :"left",
                    clear: "both",
                    padding: "8px",
                    borderRadius: "8px", 
                    backgroundColor: "lightblue",
                    margin: "8px"
                }}>
                {message.message}
                    
                </div>
            ))}
        </div>
        <div style={{
            display: "flex",
            flexDirection: "row",
            height: "32px",
            alignItems: "end",
            gap: "16px"
        }}> 
            <TextInput title={""} value={input} setValue={setInput}/> 
            <button onClick={async ()=>{
                await sendMessage(input, id)
                getMessages(id).then((value)=>{
                    setMessages(value.reverse())
                })
                setInput("")
            }}>Отправить</button>
        </div>
    </div>
    );
};

export default Chat_id