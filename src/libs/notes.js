import { notesDB, notesDB2 } from "../data/notes";

// ---CRUD------------------------------------------------------------
// array di stringhe
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
// ---------------------------------------------------------------------


// ---CRUD---NO SERVER INTEGRATION--------------------------------------------------
// array di oggetti json
const getDataNotesJsonDB = () => { return notesDB2;}

const postDataNotesJsonDB = (newNote) => { 
    notesDB2.push(newNote);
    return notesDB2;
}

const putDataNotesJsonDB = (oldNote, newNote) => { 
    notesDB2.forEach((element, i) => {
        if (element.content == oldNote) {
            notesDB2[i] = newNote;
            console.log(notesDB2)
            return notesDB2;
        }
    });
}

const deleteDataNotesJsonDB = (newNote) => { 
    notesDB2.forEach((element, i) => {
        if (element.content == newNote) {
            notesDB2.splice(i, 1); 
            return notesDB2;
        }
    });
}
// ---------------------------------------------------------------------




// ---CRUD---SERVER INTEGRATION--------------------------------------------------
// array di oggetti json
const BASE_URL = "http://localhost:4000";
const END_POINT_NOTES = "/notes";

const getDataNotesJson = () => fetch(BASE_URL + END_POINT_NOTES).then(response => response.json());

const postDataNotesJson = (newNote) => fetch(BASE_URL + END_POINT_NOTES,
    {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(newNote),
    }).then(response => response.json());
    
const putDataNotesJson = (note) => fetch(BASE_URL + END_POINT_NOTES + `/${note.id}`, 
     {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(note),
    }).then(response => response.json());
    
const deleteDataNotesJson = (note) => fetch(BASE_URL + END_POINT_NOTES + `/${note.id}`,
    {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        },
    }).then(response => response.json());



export { 
    getDataNotes, postDataNotes, deleteDataNotes, putDataNotes,
    getDataNotesJsonDB, postDataNotesJsonDB, putDataNotesJsonDB, deleteDataNotesJsonDB,
    getDataNotesJson, postDataNotesJson, putDataNotesJson, deleteDataNotesJson,
 }