import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TodoList from "./../../components/TodoList"
import style from "./HomePage.module.scss"

const HomePage = ({ onLogOut }) => {
    const [ loggedStatus, setLoggedStatus ] = useState({});

    useEffect(() => {
        setLoggedStatus({
            loggedStatus: localStorage.getItem('access_token'),
            username : localStorage.getItem('username'),
        });
    }, []);
    return (
        <>
        {loggedStatus.username 
        ? <div className={style.home__wrapper}>
                <h1 className={style.homeTitle}>Welcome {loggedStatus.username} 👋</h1>
                <button className={style.home__logout_btn} onClick={onLogOut}>LogOut</button>
                <TodoList />
            </div>
        : <div className={style.home__wrapper}>
                <h1 className={style.homeTitle}>⛔ Non autorizzato ⛔</h1>
                <Link to="/">
                    <button className={style.home__logout_btn}>
                        Effettua Log-in
                    </button>
                </Link>
            </div>
        }
        </>
    );
}

export default HomePage;