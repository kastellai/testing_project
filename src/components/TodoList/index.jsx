import ListItem from "./../ListItem"
import "../TodoList/style.css"

const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
]

const TodoList = () => {
    return(
        <>
            <div className="todoList__wrapper">
                <p className="todoList__header">Ecco la tua to-do list:</p>
                <ul>
                    {items.map((item, index) => <ListItem key={index} content={item}/>)} 
                </ul>
                <div>
                    <button className="todoList__btn-add">+ Aggiungi</button>
                </div>
            </div>  
        </>
    );
}

export default TodoList;