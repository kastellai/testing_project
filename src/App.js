import './App.css';
import { Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { useEffect, useState } from 'react';
import { logOut, logOutDB } from "./../src/libs/user";

function App() {
  const navigate = useNavigate()

  const [ userName, setUserName ] = useState("");
  const [ loggedStatus, setLoggedStatus ] = useState({});

  const handleClick = (newName) => setUserName(newName);

  useEffect(() => {
    setLoggedStatus({name: userName, logged: true});
  }, [userName]);
  
  const onLogOut = () => {
    // without server
    // logOutDB();
    // navigate("/");

    // with server
    logOut(localStorage.getItem("access_token"))
      .then((statusCode) => {
          if (statusCode === 200) {
            localStorage.clear(); 
            navigate('/');
          }
      });
  }

  return (
     <Routes> 
      <Route path="/" element={<LoginPage onLoginEvent={handleClick}/>} />
        { !loggedStatus 
        ? <Route path="/" element={<LoginPage onLoginEvent={handleClick}/>} />
        : loggedStatus && <Route path="/home" element={<HomePage onLogOut={onLogOut}/>} />}
      </Routes>

  );
}

export default App;
