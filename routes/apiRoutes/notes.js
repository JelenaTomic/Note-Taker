const router = require('express').Router();
const notes = require('../../db/db.json');

const fs = require("fs");

router.get('/notes', (req, res) => {
    res.json(notes);
});

//  POST Request
router.post("/notes", (req, res) =>{
    const newNote = req.body;
    newNote.id = notes.length + 1;
    notes.push(newNote);
    fs.writeFile("./db/db.json", JSON.stringify(notes), function () {
        res.json(notes);
    });
});
// DELETE Request
router.delete("/notes/:id",(req, res) =>{
    const id = req.params.id;
    notes.splice(id - 1, 1);

    for (i=1; i < notes.length+1; i++){
        notes[i-1].id = i;
       
    };

    fs.writeFile("./db/db.json", JSON.stringify(notes), function () {
        res.json(notes);
    });
});



module.exports = router;