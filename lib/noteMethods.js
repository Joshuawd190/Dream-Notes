const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

function createNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notesArray }, null, 2)
  );
  return note;
}

function createID() {
  return uuidv4();
}

function deleteNote(id, notesArray) {
  let updatedNotesArray = notesArray.filter((note) => {
    return note.id != id;
  });
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ updatedNotesArray }, null, 2)
  );
  return updatedNotesArray;
}

module.exports = {
  createNote,
  deleteNote,
  createID,
};
