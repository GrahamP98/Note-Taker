const fs = require('fs');
const path = require('path');
let { notesArr } = require('../../../db/db.json');
console.log(notesArr);

function createNewNote(body, notesArr) {
    const note = body;
    notesArr.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../../../db/db.json'),
        JSON.stringify({ notesArr }, null, 2)
    ); 
    return note;
}

function deleteNote(id, notes) {
    let notesArr = notes.filter(el => {
        if (el.id == id) {
            return false
        } else {
            return true
        }
    })
    
    let index = 0;
    notesArr.forEach(note => {
        note.id = index;
        index += 1;
    });

    fs.writeFileSync(
        path.join(__dirname, '../../../db/db.json'),
        JSON.stringify({ notesArr }, null, 2)
    );
    return notesArr;
}

module.exports = {
    createNewNote,
    deleteNote
};
