import React from 'react';
import Page1 from '../Pages/chat';
import Page2 from '../Pages/profile';
import Page from '../Pages/news';
import './components.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className = "container">
      <div className = "item"> 
        <Link to="/"> Main page</Link>
      </div>
      <div className = "item">
        <Link to="/chat"> Page 1</Link>
      </div>
      <div className = "item">
        <Link to="/profile"> fsr</Link>
      </div>
    </div>
  );
}


export default Nav;