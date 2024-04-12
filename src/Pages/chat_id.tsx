import React, {useState} from 'react';
import Nav from '../Components/navbar';
import Post from '../Components/post';
import TextInput from '../Components/TextInput';
import { loginUser } from '../api/user';
import { TOKEN } from '../constatnt';
import {useNavigate} from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useMemo } from 'react';

const Chat_id = () => {
    const {id} = useParams()

    return (<div> ЧАТ </div>);
};

export default Chat_id