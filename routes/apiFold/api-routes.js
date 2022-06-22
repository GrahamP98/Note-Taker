const routes = require('express').Router();
const { createNote, deleteNote} = require('../../public/assets/js/notes');
let { notesArr } = require('../../db/db.json');

routes.get('/notes', (req, res) => {
    let results = notesArr;
    res.json(results);
});

routes.post('/notes', (req, res) => {
    if(notesArr){
        req.body.id = notesArr.length.toString();
    } else 
    {req.body.id = 0}
    res.json(createNote(req.body, notesArr));
});

routes.delete('/notes/:id', async (req, res) => {
    const { id } = req.params
    notesArr = await deleteNote(id, notesArr);
    res.json(notesArr);
});

module.exports = routes;