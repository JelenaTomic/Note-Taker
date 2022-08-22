const router = require('express').Router();
const notes = require('../../db/db.json');

var fs = require("fs");

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



module.exports = router;