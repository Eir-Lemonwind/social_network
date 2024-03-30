import React from 'react';
import { Link } from 'react-router-dom';
import "./components.css";

function Red() {
    return(<div id = "red">
        <p><Link to ="/" className="link" style={{ textDecoration: 'none' }}> Новости </Link></p>
        <p><Link to = "/chat" className="link" style={{ textDecoration: 'none' }}>Чат</Link></p>
        <p>Сообщества</p>
        <p>Расписание</p>
        <p>Медиархив</p>
    </div>);
}


export default Red;