import React from 'react';
import Nav from '../Components/navbar';
import "../Components/components.css";

const Profile = () => {
    return (
    <div>
       <div id = "profpic2"> <img src = {require("../Components/profpic.jpg")} height="150" width="150"/> </div>
       <div id = "profname">Владимир Ястребов</div>
       <div id = "status">Ученик [10И2]</div>
       <div id = "friends">
        <p>Друзья</p>
        <img src = {require("../Components/profpic.jpg")} height="60" width="60"/> 
        <p>Сообщества</p>
        <img src = {require("../Components/burning-note.jpg")} height="60" width="60"/> 
        </div>
    </div>

    );

}; 

export default Profile