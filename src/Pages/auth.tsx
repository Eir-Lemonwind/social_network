import React, {useState} from 'react';
import Nav from '../Components/navbar';
import Post from '../Components/post';
import TextInput from '../Components/TextInput';
import { loginUser } from '../api/user';
import { TOKEN } from '../constatnt';


const Auth = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")


    return (
        <div>
            <div>
                <h3>Вход</h3>
                <TextInput title={"Логин"} value={login} setValue={setLogin}/>
                <TextInput title={"Пароль"} value={password} setValue={setPassword}/>
                <button onClick={() => {
                    loginUser(login, password).then((value: any) => {
                        const token = value.token
                        localStorage.setItem(TOKEN, token)
                    })
                }}>Войти</button>
            </div>
        </div>
    );
};

export default Auth