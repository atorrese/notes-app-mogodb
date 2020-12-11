
const notesCtrl ={};
const Note = require('../models/Note');

notesCtrl.renderNoteForm = (req,res) => {
    res.render('notes/new-note');
}

notesCtrl.createNewNote = async(req,res) => {
    const {title, description} = req.body;
    const newNode =new  Note ({title,description});
    await newNode.save();
    req.flash('success_msg','Note Added Succesfully');
    res.redirect('/notes')
}

notesCtrl.renderNotes =  async(req,res) => {
   const notes= await Note.find();
   res.render('notes/all-notes', {notes});
}

notesCtrl.renderEditNoteForm = async(req,res) => {
    const note= await Note.findById(req.params.id);
    res.render('notes/edit-note', {note});
}
notesCtrl.updateNote = async(req,res) => {
    const {title,description} = req.body;
    const note= await Note.findByIdAndUpdate(req.params.id,{title,description});
    req.flash('success_msg','Note Updated Succesfully');
    res.redirect('/notes')
}

notesCtrl.deleteNote =  async(req,res) => {
   
    await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg','Note Deleted Succesfully');
    res.redirect('/notes');
}
module.exports= notesCtrl;