const express = require('express');
const bodyParser = require('body-parser');

const validateEmail = require('./middlewares/validateEmail');
const validatePassword = require('./middlewares/validatePassword');
const token = require('./middlewares/token');
const talkerList = require('./middlewares/talkerList');
const talkerId = require('./middlewares/talkerId');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', talkerList);

app.get('/talker/:id', talkerId);

app.post('/login', validateEmail, validatePassword, token);

app.listen(PORT, () => {
  console.log('Online');
});