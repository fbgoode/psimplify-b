
  
const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const cognito = require('./middlewares/cognito');

const getUserAdapter = require('./users/getUser');

const app = new express();
app.use(cors());
app.use(express.json());
app.use(cognito);

app.get('/users/:id', async (req, res) => {
    const result = await getUserAdapter(req);
    res.status(result.statusCode).json(result.body);
});

exports.handler  = serverless(app);
exports.app = app;