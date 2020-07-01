const fs = require('fs');
const express = require('express');
const path = require('path');

var pathway = path.join(__dirname, 'db', 'db.json');

const app = express();
const PORT = process.env.PORT || 4040; /* video says not to use 8080 in heroku*/ 

var userData = fs.readFileSync(pathway, 'utf-8');
var userNotes = JSON.parse(userData);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public')); /* brings in pictures*/

/* routes on the page*/ 
app.get('/api/notes', function (req, res) {
    res.json(userNotes);
});

app.get('/',function (req, res) {
    res.sendFile(path.join(__dirname,'public', '/index.html'));
});

app.get('/notes',function (req, res) {
    res.sendFile(path.join(__dirname,'public', '/notes.html'));
});

app.get('*',function (req, res) {
    res.sendFile(path.join(__dirname, 'public', '/index.html'));
});

/* post section */
app.post('/api/notes', function (req, res) {
    var addNote = req.body;
    addNote.id = addNote;
    userNotes.push(addNote);
    fs.writeFileSync(path.join(__dirname, 'db','db.json'),JSON.stringify(userNotes)
    );res.json(addNote);
});

/* delete section */ 
app.delete('api/notes/:id', function (req, res) {
    var toDelete = req.params.id;
    let deleteNotes = JSON/parse(fs.readFileSync(path.join(__dirname, 'db', 'db.json')));
    toDelete = toDelete.filter(note => note.id !== toDelete);
    fs.writeFileSync(path.join(__dirname, 'db', 'db.json'), JSON.stringify(deleteNotes)
    );res.json(deleteNotes);
});

/* starts and listens to port */
app.listen(PORT, function () {
    console.log('App is listening on PORT: ' + PORT);
});