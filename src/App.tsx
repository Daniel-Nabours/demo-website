import { useState } from "react";
import Navbar from "./components/Navbar";
import logo from "./logo.svg";
import "./scss/styles.scss";

function App() { 

  return (
    <div className="App">   
        <Navbar/> 
      <div className="layout-div" style={{height:'20vh', width:'20vw'}}></div>
      <div className="layout-div" style={{height:'20vh', width:'20vw'}}></div>
      <div className="layout-div" style={{ height: '20vh', width: '20vw' }}></div>
    </div>
  );
}

export default App;
