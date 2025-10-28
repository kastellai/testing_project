import "../HomePage/style.css"
import TodoList from "./../../components/TodoList"


const HomePage = ({userName}) => {
    return (
        <div>
            <h1>Welcome {userName}</h1>
            <TodoList />
        </div>
    );
}

export default HomePage;