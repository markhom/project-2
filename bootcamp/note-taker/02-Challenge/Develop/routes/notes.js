const notes = require('express').Router();

const {readFromFile, readAndAppend, writeToFile} = require('../helpers/fsUtils');

const notesData = require('../db/db.json');
notes.get('/', (req, res) => {
    
    readFromFile('./db/db.json').then(data => res.json(JSON.parse(data)));
})

notes.post('/', (req, res) => {
    console.info("request to save note")
    console.log(req.body)
    newNote = req.body
    newNote.id = Math.floor((1 + Math.random())*0x10000).toString(16).substring(1)
    console.log(newNote)
    readAndAppend(newNote, './db/db.json')

    const response = {
        status: 'success',
        body: newNote,
      };
  
      res.json(response);
    }  

);

notes.delete('/:id', (req, res) => {
    const noteId = req.params.id
    readFromFile('./db/db.json', 'utf8').then((data) => {
        const parsedData = JSON.parse(data)
        const newData = parsedData.filter((note) => note.id !== noteId)
        console.log(newData)
        return newData
    }).then((oogabooga) => writeToFile('./db/db.json', oogabooga)).then((oogabooga) => {
        res.json(oogabooga)
    }
    )
})

module.exports = notes;