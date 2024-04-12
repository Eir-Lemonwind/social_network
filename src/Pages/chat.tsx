import React, {useState} from 'react';
import Nav from '../Components/navbar';
import Blue from '../Components/blue';
import Red from '../Components/red';
import Contentum from '../Components/contentum';
import {useNavigate} from "react-router-dom";
import TextInput from '../Components/TextInput';
import { createChat, getChats } from '../api/chats';
import { useEffect } from 'react';

const Chat = () => {
    const navigate = useNavigate()
    const [chats, setChats] = useState([])
    const [name, setName] = useState("")

    useEffect(() => {
        getChats().then((value: any) => {
            setChats(value)
        })
    }, [])


    return (
        <center>
        <p></p>
        <p></p> 
        <div style={{display: "flex", flexDirection: "row", justifyContent: "end", gap: "16px", marginRight: "48px"}}>
        <TextInput title = {""} value={name} setValue={setName}/>
        <button onClick={async()=>{await createChat(name)
        getChats().then((value: any) => {
            setChats(value)
        })
        }} className = "chat_button"> Создать чат </button>
        </div>
        {chats.map((chat: any) =>
        <div className = "chat" onClick={() => {navigate(`/profile`)}}>
            {chat.name}
        </div>
        )}




        </center>
    );

}; 

export default Chat