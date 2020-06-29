const fs = require('fs');
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4040; /* video says not to use 8080 in heroku*/ 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

/* starts and listens to port */
app.listen(PORT, function () {
    console.log('App is listening on PORT: ' + PORT);
});