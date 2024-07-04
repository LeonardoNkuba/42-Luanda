// backend/app.js
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const sequelize = require('./config/config');
const http = require('http')

const app = express();

// Middleware
app.use(bodyParser.json());

// Rotas
app.use('/users', userRoutes);
app.use('/posts', postRoutes);

// Testar a conexão com o banco de dados
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });

module.exports = app;

http.createServer(function(req, res){
  res.write("<h1>API SUCCESS");
}).listen(4002)
