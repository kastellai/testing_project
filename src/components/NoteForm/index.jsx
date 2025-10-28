import { useEffect, useState } from "react";
import style from "./NoteForm.module.scss";
import { postDataNotes, postDataNotesJson } from "./../../libs/notes"


const NoteForm = ({onCancel, onChange}) => {
    const [ newNote, setNewNote ] = useState("");
    const [ newImageUrl, setNewImageUrl ] = useState("");

    const [ newNoteJson, setNewNoteJson ] = useState("");

    const handlerNewNoteInput = (event) => setNewNote(event.target.value);
    const handlerNewImageUrlInput = (event) => setNewImageUrl(event.target.value);

    const handlerOnSave = (e) => {
        e.preventDefault();

        postDataNotesJson(newNoteJson);
        // postDataNotes(newNote);
        
        onChange(true);
        onCancel(false);
    }

    useEffect(() => {
        setNewNoteJson({
            // id: ,
            content: newNote,
            img: newImageUrl,
            date: new Date(),
        });
    }, [newNote, newImageUrl]);

    return(
        <form className={style.formWrapper}>
            <input value={newImageUrl} onChange={handlerNewImageUrlInput} required placeholder="Image url"></input>
            <textarea value={newNote} onChange={handlerNewNoteInput} rows="5" cols="30" required></textarea>
            <div className={style.formButtons}>
                <button onClick={handlerOnSave}>Save</button>
                <button onClick={() => onCancel(false)}>Cancel</button>
            </div>
        </form>
    );
}

export default NoteForm;