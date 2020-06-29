const fs = require('fs');
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4040; /* video says not to use 8080 in heroku*/ 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.listen(PORT, function () {
    console.log('App is listening on 3080');
});