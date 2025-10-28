import { notesDB } from "../data/notes";

const BASE_URL = "";

const http = (resource) => fetch(BASE_URL + resource).then(response => response.json());

const getDataNotes = () => { return notesDB;}

const postDataNotes = (newNote) => { 
    notesDB.push(newNote);
    return notesDB;
}

const putDataNotes = (oldNote, newNote) => { 
    const index = notesDB.indexOf(oldNote);
    notesDB[index] = newNote;
    return notesDB;
}

const deleteDataNotes = (newNote) => { 
    const index = notesDB.indexOf(newNote);
    if (index > -1) { 
        notesDB.splice(index, 1); 
    }
    return notesDB;
}

export { getDataNotes, postDataNotes, deleteDataNotes, putDataNotes }