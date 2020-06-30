const fs = require('fs');
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4040; /* video says not to use 8080 in heroku*/ 

var userData = fs.readFileSync(__dirname, 'db', 'db.json');
var userNotes = JSON.parse(userData);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public')); /* brings in pictures*/

/* routes on the page*/ 
app.get('/api/notes', function (req, res) {
    res.json(notes);
});

app.get('/',function (req, res) {
    res.sendFile(path.join(__dirname,'/index.html'));
});

app.get('/notes',function (req, res) {
    res.sendFile(path.join(__dirname,'/notes.html'));
});

app.get('*',function (req, res) {
    res.sendFile(path.join(__dirname,'/index.html'));
});

app.post('/api/notes', function (req, res) {
    var addNote = req.body;
    addNote.id = addNote;
    userNotes.push(addNote);
    fs.writeFileSync(path.join(__dirname, 'db','db.json'),JSON.stringify(userNotes)
    );res.json(addNote);
});

/* starts and listens to port */
app.listen(PORT, function () {
    console.log('App is listening on PORT: ' + PORT);
});