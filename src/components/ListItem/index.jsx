import style from "./ListItem.module.scss"
import { deleteDataNotesJson, putDataNotes, putDataNotesJson } from "./../../libs/notes";
import { useState, useEffect } from "react";


const ListItem = ({content, imgUrl, onChange}) => {
    const [ editNote, setEditNote ] = useState(false);
    const [ newNote, setNewNote ] = useState("");
    const [ newImageUrl, setNewImageUrl ] = useState("");

    const [ newNoteJson, setNewNoteJson ] = useState("");


    const handlerNewNoteInput = (event) => setNewNote(event.target.value);
    const handlerNewImageUrlInput = (event) => setNewImageUrl(event.target.value);

    const handlerOnDelete = (note) => {
        // deleteDataNotes(note)
        deleteDataNotesJson(note)

        onChange(true);
        setEditNote(false);
        alert("Eliminato!");
        // window.location.href = "/home";
    }

    const handlerOnEditing = () => {
        setEditNote(!editNote);
        setNewNote(content)
        setNewImageUrl(imgUrl)
    }

    const handlerOnCancelEditing = () => {
        setEditNote(false);
    }

    const handlerOnSaveEditing = (oldNote) => {
        // putDataNotes(oldNote, newNote)
        putDataNotesJson(oldNote, newNoteJson)
        onChange(true);
        setEditNote(false);
        alert("Nota aggiornata!");
    }

    useEffect(() => {
            setNewNoteJson({
                content: newNote,
                img: newImageUrl,
                date: new Date(),
            });
        }, [newNote, newImageUrl]);

    return (
        <li className={style.listItem__wrapper}>
        
        { editNote 
            ? <form className={style.listItem__text}>
                    <input value={newImageUrl} onChange={handlerNewImageUrlInput} required placeholder="Image url"></input>
                    <textarea value={newNote} onChange={handlerNewNoteInput} rows="5" cols="30" required ></textarea>
                </form>
            
            : <div className={style.listItem__contentImg}>
                    <img src={imgUrl} />
                    <div className={style.listItem__text}>{content}</div>
                </div>
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