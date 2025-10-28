import { useState } from "react"
import ListItem from "./../ListItem"

import style from "./TodoList.module.scss"

const items = [
    "Item 1 sjdsijdsodjksaofjkfdopjkfdsosjgogpjfgop fdsisdjafadjssiodf gdsijgaajfsg gdsgfs",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
]

const TodoList = () => {

    const [addNote, setAddNote ] = useState(false);

    return(
        <>
            {addNote && <div>ADD NOTE</div>}
            <div className={style.todoList__wrapper}>
                <p className={style.todoList__header}>Ecco la tua to-do list:</p>
                <div className={style.todoList__items}>
                    {items.map((item, index) => <ListItem key={index} content={item}/>)} 
                </div>
               
                <div>
                    <button className={style.todoList__btn_add} onClick={() => setAddNote(!addNote)}>+ Aggiungi</button>
                </div>
            </div>  
        </>
    );
}

export default TodoList;