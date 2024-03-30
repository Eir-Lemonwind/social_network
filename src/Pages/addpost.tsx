import React, {useState} from 'react';
import Nav from '../Components/navbar';
import Post from '../Components/post';
import TextInput from '../Components/TextInput';

const Addpost = () => {
    const [title, setTitle] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div>
            <TextInput title={"Название"} value={title} setValue={setTitle}/>
            <div>
            Содержание
            <textarea></textarea> 
            <button>Создать</button>  
            </div>
        </div>
    );

}; 

export default Addpost;