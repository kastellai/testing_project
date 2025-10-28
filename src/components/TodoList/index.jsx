import { useEffect, useState } from "react"
import ListItem from "./../ListItem"
import NoteForm from "./../NoteForm"

import style from "./TodoList.module.scss"
import { getDataNotes } from "./../../libs/notes"

const TodoList = () => {

    const [ addNote, setAddNote ] = useState(false);
    const [ notesListEdited, setNotesListEdited ] = useState(false);

    const [ notes, setNotes ] = useState([]);
    
    useEffect(() => {
        setNotes(getDataNotes().toReversed());
    }, [notesListEdited])

    useEffect(() => {
        setNotesListEdited(false);
    }, [notes])



    return(
        <>
            <div className={style.todoList__wrapper}>
                <div className={style.todoList_headerArea}>
                {   addNote 
                    ? <NoteForm onCancel={setAddNote} onChange={setNotesListEdited}/>
                    : <button className={style.todoList__btn_add} onClick={() => setAddNote(!addNote)}>+ Aggiungi</button>
                }
                </div>
                <p className={style.todoList__header}>Ecco la tua to-do list:</p>
                <div className={style.todoList__items}>
                    {notes.map((item, index) => <ListItem key={index} content={item} onChange={setNotesListEdited}/>)} 
                </div>
            </div>  
        </>
    );
}

export default TodoList;