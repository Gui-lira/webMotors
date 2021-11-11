const bodyParser = require('body-parser');
const express = require('express');
const { findAllController, deleteOneController, updateOneController, insertOneController } = require('./controllers');

const app = express();

app.use(bodyParser.json());

app.get('/adds', findAllController);

app.delete('/adds/:id', deleteOneController);

app.put('/adds/:id', updateOneController);

app.post('/adds', insertOneController);

module.exports = app;