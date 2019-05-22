import React from 'react';
import './App.css';
import Main from './Components//Main.js';
import Navbar from './Components/Navbar.js';
import 'antd/dist/antd.css';
// import Modal from "./Components/Modal.js";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Main/>
    </div>
  );
}

export default App;

