const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const User = require('./user');

const Post = sequelize.define('Post', {
    conteudo: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    data_criacao: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

// Relacionamento
Post.belongsTo(User, { foreignKey: 'autor_id', onDelete: 'CASCADE' });

module.exports = Post;
