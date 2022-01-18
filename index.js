const express = require('express');
const bodyParser = require('body-parser');

const validateEmail = require('./middlewares/validateEmail');
const validatePassword = require('./middlewares/validatePassword');
const token = require('./middlewares/token');
const talkerList = require('./middlewares/talkerList');
const talkerId = require('./middlewares/talkerId');
const createTalker = require('./middlewares/createTalker');
const validateToken = require('./middlewares/validateToken');
const validateName = require('./middlewares/validateName');
const validateAge = require('./middlewares/validateAge');
const validateKeyTalk = require('./middlewares/validateKeyTalk');
const editTalker = require('./middlewares/editTalker');

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

app.post('/talker', validateToken, validateName, validateAge, validateKeyTalk, createTalker);

app.put('/talker/:id', validateToken, validateName, validateAge, validateKeyTalk, editTalker);

app.listen(PORT, () => {
  console.log('Online');
});