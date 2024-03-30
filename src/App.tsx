import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom"; 
import Chat from './Pages/chat';
import Profile from './Pages/profile';
import News from './Pages/news';
import Auth from './Pages/auth'; 
import Addpost from './Pages/addpost';
import Blue from './Components/blue';
import Red from './Components/red';
import Contentum from './Components/contentum';

function App() {
  return (
    <div className="App">
            <Blue/>
            <main>
                <Red/>
                <Contentum/>
            </main>
    </div>
  );
}


export default App;
