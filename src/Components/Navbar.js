import React from "react";
import logo from '../images/logo.png'
import 'antd/dist/antd.css';

function Navbar(props) {
    return (
        <div className="header">
            <img className="logo" alt="logo" src={logo}/>
            <h1 id="title">Restaraunt Finder</h1>
        </div>
    )
}

export default Navbar;