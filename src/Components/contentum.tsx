import React from 'react';
import {Route, Routes} from "react-router-dom"; 
import Chat from '../Pages/chat';
import Profile from '../Pages/profile';
import News from '../Pages/news';
import Auth from '../Pages/auth'; 
import Addpost from '../Pages/addpost';
import Chat_id from '../Pages/chat_id';

function Contentum() {
    return(<div id = "content">
        <Routes>
        <Route path={'/'} element={<News/>}/>
        <Route path={'/chat'} element={<Chat/>}/>
        <Route path={'/profile'} element={<Profile/>}/>
        <Route path={'/auth'} element={<Auth/>}/>
        <Route path={'/add'} element={<Addpost/>}/>
        <Route path={'/chat/:id'} element={<Chat_id/>}/>
      </Routes>
    </div>);
}

export default Contentum;