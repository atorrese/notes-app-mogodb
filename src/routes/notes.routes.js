const { Router }  = require('express')

const router = Router();

const { 
    renderNoteForm,
    createNewNote, 
    renderNotes, 
    renderEditNoteForm, 
    updateNote, 
    deleteNote
} = require('../controllers/notes.controller')

//New Note
router.get('/notes/add',renderNoteForm);
router.post('/notes/new-note',createNewNote);
//Get All Notes
router.get('/notes',renderNotes);
//New Note
router.get('/notes/edit/:id',renderEditNoteForm);
router.put('/notes/edit/:id',updateNote);

//Delete Notes
router.delete('/notes/delete/:id',deleteNote);

module.exports= router;