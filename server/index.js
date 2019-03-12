'use strict';
const express = require('express');
const usersRouter = require('./src/routers/router');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/api/health', (req, res) => {
    res.status(200).send('ok');
});

app.use('/api/', [usersRouter]);

app.listen(80, () => console.log('app listening on port 80'));

module.exports = app; 