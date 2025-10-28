import ListItem from "./../ListItem"

import style from "./TodoList.module.scss"

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
            <div className={style.todoList__wrapper}>
                <p className={style.todoList__header}>Ecco la tua to-do list:</p>
                <ul>
                    {items.map((item, index) => <ListItem key={index} content={item}/>)} 
                </ul>
                <div>
                    <button className={style.todoList__btn_add}>+ Aggiungi</button>
                </div>
            </div>  
        </>
    );
}

export default TodoList;