import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import "../LoginPage/style.css"
// TODO: come rendere il pulsante stessa larghezza


const LoginPage = ({onLoginEvent}) => {
    const navigate = useNavigate()

    const [ usernameInput, setUsernameInput ] = useState("");
    const [ passwordInput, setPasswordInput ] = useState("");
    const [ userData, setUserData ] = useState({});

    const handlerUsernameInput = (event) => {
        setUsernameInput(event.target.value)
    }

    const handlerPasswordInput = (event) => {
        setPasswordInput(event.target.value)
    }

    useEffect(() => {
        setUserData({username: usernameInput, password: passwordInput});
    }, [usernameInput, passwordInput])


    const handleSubmit = (e) => {
        e.preventDefault();
        setUserData({
            name: usernameInput,
            password: passwordInput
        });

        onLoginEvent(usernameInput);
        navigate('/home')

    }

    return (
        <form className="loginForm">
            <p>Sign In on XxX</p>
            <input value={usernameInput} onChange={handlerUsernameInput} type="text" placeholder="Username" required autoComplete="false"></input>
            <input value={passwordInput} onChange={handlerPasswordInput} type="password" placeholder="Password" required autoComplete="false"></input>
            <input value="LOGIN" onClick={handleSubmit} type="submit" className="loginFormButton"></input>
        </form>
    );
}

export default LoginPage;