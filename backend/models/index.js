const Sequelize = require('sequelize');
const sequelize = require('../config/config');

// Importar modelos
const User = require('./user');
const Post = require('./post');

// Sincronizar modelos
sequelize.sync()
  .then(() => {
    console.log('Modelos sincronizados com sucesso.');
  })
  .catch(err => {
    console.error('Erro ao sincronizar modelos:', err);
  });

module.exports = {
  User,
  Post
};
