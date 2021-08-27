const router = require('express').Router();
const notes = require('../../db/db.json');
const { createID, createNote, deleteNote } = require('../../lib/noteMethods');

router.get('/notes', (req, res) => {
  res.json(notes);
});

router.post('/notes', (req, res) => {
  req.body.id = createID();
  let note = createNote(req.body, notes);

  res.json(note);
});

router.delete('/notes/:id', (req, res) => {
  deleteNote(req.params.id, notes);

  res.status(202);
});

module.exports = router;
