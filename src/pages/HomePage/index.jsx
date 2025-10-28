import TodoList from "./../../components/TodoList"
import style from "./HomePage.module.scss"

const HomePage = ({userName}) => {
    return (
        <div>
            <h1 className={style.homeTitle}>Welcome {userName} 👋</h1>
            <TodoList />
        </div>
    );
}

export default HomePage;