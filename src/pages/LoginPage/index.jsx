import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { isUserAllowed } from "./../../libs/user";
import style from "./LoginPage.module.scss"
// TODO: come rendere il pulsante stessa larghezza


const LoginPage = ({onLoginEvent}) => {
    const navigate = useNavigate()

    const [ usernameInput, setUsernameInput ] = useState("");
    const [ passwordInput, setPasswordInput ] = useState("");
    const [ userData, setUserData ] = useState({});

    const [ showErrorBanner, setShowErrorBanner ] = useState(false);

    const handlerUsernameInput = (event) => {
        setUsernameInput(event.target.value)
    }

    const handlerPasswordInput = (event) => {
        setPasswordInput(event.target.value)
    }

    useEffect(() => {
        setShowErrorBanner(false);
        setUserData({username: usernameInput, password: passwordInput});
    }, [usernameInput, passwordInput])


    const handleSubmit = (e) => {
        e.preventDefault();
        setUserData({
            username: usernameInput,
            password: passwordInput
        });

        isUserAllowed(userData)

        if (localStorage.getItem('access_token') === "ALLOWED") {
            onLoginEvent(usernameInput);
            navigate('/home')
        } else {
            setShowErrorBanner(true);
        }

    }

    return (
        <form className={style.loginForm}>
            <p>Sign In on XxX</p>
            <input value={usernameInput} onChange={handlerUsernameInput} type="text" placeholder="Username" required autoComplete="false"></input>
            <input value={passwordInput} onChange={handlerPasswordInput} type="password" placeholder="Password" required autoComplete="false"></input>
            <button onClick={handleSubmit} type="submit">LOGIN</button>
            {showErrorBanner && <div className={style.loginForm__errorBanner}>Errore durante il login.
            Riprova ad inserire username e password.</div>}
        </form>
    );
}

export default LoginPage;