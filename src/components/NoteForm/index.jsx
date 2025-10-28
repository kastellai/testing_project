import { useState } from "react";
import style from "./NoteForm.module.scss";
import { postDataNotes } from "./../../libs/notes"


const NoteForm = ({onCancel, onChange}) => {
    const [ newNote, setNewNote ] = useState("");

    const handlerNewNoteInput = (event) => setNewNote(event.target.value);

    const handlerOnSave = (e) => {
        e.preventDefault();
        postDataNotes(newNote);
        onChange(true);
        onCancel(false);
    }

    return(
        <form className={style.formWrapper}>
            <textarea value={newNote} onChange={handlerNewNoteInput} rows="5" cols="30" required></textarea>
            <div className={style.formButtons}>
                <button onClick={handlerOnSave}>Save</button>
                <button onClick={() => onCancel(false)}>Cancel</button>
            </div>
        </form>
    );
}

export default NoteForm;