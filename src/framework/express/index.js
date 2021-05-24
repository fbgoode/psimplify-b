
  
const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const cognito = require('./middlewares/cognito');
const connectToDatabase = require('../mongodb');

const routers = require('./routers');
const unprotectedRoutes = require('./unprotected/router');

const app = new express();
app.use(cors());
app.use(express.json());
app.use(connectToDatabase);
app.use(unprotectedRoutes);
app.use(cognito);
app.use(routers);


exports.handler  = serverless(app);
exports.app = app;