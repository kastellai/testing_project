import style from "./ListItem.module.scss"
import { deleteDataNotes, putDataNotes } from "./../../libs/notes";
import { useState } from "react";


const ListItem = ({content, onChange}) => {

    const [ editNote, setEditNote ] = useState(false);
    const [ newNote, setNewNote ] = useState("");

    const handlerNewNoteInput = (event) => setNewNote(event.target.value);

    const handlerOnDelete = (note) => {
        deleteDataNotes(note)
        onChange(true);
        setEditNote(false);
        alert("Eliminato!");
        // window.location.href = "/home";
    }

    const handlerOnEditing = () => {
        setEditNote(!editNote);
        setNewNote(content)
    }

    const handlerOnCancelEditing = () => {
        setEditNote(false);
    }

    const handlerOnSaveEditing = (oldNote) => {
        putDataNotes(oldNote, newNote)
        onChange(true);
        setEditNote(false);
        alert("Nota aggiornata!");
    }


    return (
        <li className={style.listItem__wrapper}>
        
        { editNote 
            ? <form className={style.listItem__text}>
                    <textarea value={newNote} onChange={handlerNewNoteInput} rows="5" cols="30" required ></textarea>
                </form>
            
            : <div className={style.listItem__text}>{content}</div>
        }

                <div className={style.listItem__buttons}>
                {editNote && <button onClick={() => handlerOnSaveEditing(content)} className={style.listItem__btn_done}>Done</button>}

                {editNote 
                    ? <button onClick={handlerOnCancelEditing} className={style.listItem__btn_edit}>Cancel</button>
                    : <button onClick={handlerOnEditing} className={style.listItem__btn_edit}>Edit</button>
                }
                
                <button onClick={() => handlerOnDelete(content)} className={style.listItem__btn_delete}>Elimina</button>     
            </div>   

        </li>
    );
}

export default ListItem;