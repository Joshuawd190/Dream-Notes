const router = require('express').Router();
const notes = require('../../db/db.json');
const { createID, createNote, deleteNote } = require('../../lib/noteMethods');

router.get('/notes', (req, res) => {
  let results = notes;
  res.json(results);
});

router.post('/notes', (req, res) => {
  req.body.id = createID();
  const note = createNote(req.body, notes);

  res.json(note);
});

router.delete('/note/:id', (req, res) => {
  const deletedNote = deleteNote(req.params.id, notes);

  res.json(deletedNote);
});
