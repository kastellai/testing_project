import { notesDB, notesDB2 } from "../data/notes";

const BASE_URL = "";
const http = (resource) => fetch(BASE_URL + resource).then(response => response.json());


// array di stringhe
const getDataNotes = () => { return notesDB;}

// array di oggetti json
const getDataNotesJson = () => { return notesDB2;}

// array di stringhe
const postDataNotes = (newNote) => { 
    notesDB.push(newNote);
    return notesDB;
}

// array di oggetti json
const postDataNotesJson = (newNote) => { 
    notesDB2.push(newNote);
    console.log(notesDB2)
    return notesDB2;
}

// array di stringhe
const putDataNotes = (oldNote, newNote) => { 
    const index = notesDB.indexOf(oldNote);
    notesDB[index] = newNote;
    return notesDB;
}

// array di oggetti json
const putDataNotesJson = (oldNote, newNote) => { 
    notesDB2.forEach((element, i) => {
        if (element.content == oldNote) {
            notesDB2[i] = newNote;
            console.log(notesDB2)
            return notesDB2;
        }
    });
}

// array di stringhe
const deleteDataNotes = (newNote) => { 
    const index = notesDB.indexOf(newNote);
    if (index > -1) { 
        notesDB.splice(index, 1); 
    }
    return notesDB;
}

// array di oggetti json
const deleteDataNotesJson = (newNote) => { 
    notesDB2.forEach((element, i) => {
        if (element.content == newNote) {
            notesDB2.splice(i, 1); 
            return notesDB2;
        }
    });
}



export { 
    getDataNotes, postDataNotes, deleteDataNotes, putDataNotes,
    getDataNotesJson, postDataNotesJson, putDataNotesJson, deleteDataNotesJson,
 }