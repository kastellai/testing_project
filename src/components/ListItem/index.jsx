import style from "./ListItem.module.scss"
import { deleteDataNotes, putDataNotes } from "./../../libs/notes";
import { useState } from "react";
import NoteForm from "../NoteForm";


const ListItem = ({content, onChange}) => {

    const [ editNote, setEditNote ] = useState(false);

    const handlerOnDelete = (note) => {
        deleteDataNotes(note)
        onChange(true);
        alert("Eliminato!");
        // window.location.href = "/home";
    }

    const handlerOnEdit = (oldNote, newNote) => {
        putDataNotes(oldNote, newNote)
        onChange(true);
        alert("Nota aggiornata!");
        // window.location.href = "/home";
    }


    return (
        <li className={style.listItem__wrapper}>
        {editNote 
            ? <div>EDIT</div>
            :    <>
                    <div className={style.listItem__text}>{content}</div>
                    <div className={style.listItem__buttons}>
                        <button className={style.listItem__btn_done}>Done</button>
                        <button onClick={() => setEditNote(!editNote)} className={style.listItem__btn_edit}>Edit</button>
                        <button onClick={() => handlerOnDelete(content)} className={style.listItem__btn_delete}>Elimina</button>     
                    </div>   
                </>   
        }

        </li>
    );
}

export default ListItem;