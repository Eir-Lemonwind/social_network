import React from 'react';
import TextInput from '../Components/TextInput';
import {useState} from 'react';
import "./components.css";
import { Link } from 'react-router-dom';



function Blue() {
    const [search, setSearch] = useState("")
    return(<div id = "blue">
        <div id="search">
            <TextInput title={""} value={search} setValue={setSearch}/>
        </div>
        <div id = "profpic">
            <Link to="/profile">
             <img src = {require("../Components/profpic.jpg")} height="60" width="60"/> 
             </Link>
        </div>
        <div id = "logo"> 
        <Link to="/">
            <img src = {require("../Components/logo.png")} height="72" width="72"/> 
        </Link>
        </div>
    </div>);
}

export default Blue;
