import './App.css';
import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { useState } from 'react';

function App() {

  const [ userName, setUserName ] = useState("")
  const handleClick = (newName) => setUserName(newName);
  
  return (
     <Routes>
        <Route path="/" element={<LoginPage onLoginEvent={handleClick}/>} />
        { userName === "" 
          ? <Route path="/login" element={<LoginPage onLoginEvent={handleClick}/>}/>
          : <Route path="/home" element={<HomePage userName={userName}/>} />}

             
         {/* <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage onLoginEvent={handleClick}/>} /> */}

        
      </Routes>

  );
}

export default App;
