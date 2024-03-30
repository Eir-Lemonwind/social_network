import React, {useState} from 'react';
import Nav from '../Components/navbar';
import Post from '../Components/post';
import TextInput from '../Components/TextInput';


const Auth = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")


    return (
        <div>
            <div>
                <h3>Вход</h3>
                <TextInput title={"Логин"} value={login} setValue={setLogin}/>
                <TextInput title={"Пароль"} value={password} setValue={setPassword}/>
                <button>Войти</button>
            </div>
        </div>
    );
};

export default Auth