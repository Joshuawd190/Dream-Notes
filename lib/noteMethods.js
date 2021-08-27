const fs = require('fs');
const { resolve } = require('path');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

function createNote(body, notesArray) {
  let note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notesArray, null, 2)
  );
  return note;
}

function createID() {
  return uuidv4();
}

function deleteNote(id, oldNotesArray) {
  let notesArray = oldNotesArray.filter((note) => {
    return note.id != id;
  });
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notesArray, null, 2)
  );

  return notesArray;
}

module.exports = {
  createNote,
  deleteNote,
  createID,
};
