// backend/controllers/userController.js

const User = require('../models/user');

exports.getAllUsers = (req, res) => {
    User.findAll()
        .then(users => res.json(users))
        .catch(err => res.status(500).json({ error: err.message }));
};

exports.createUser = (req, res) => {
    const { nome, email, senha, tipo } = req.body;
    User.create({ nome, email, senha, tipo })
        .then(user => res.status(201).json(user))
        .catch(err => res.status(500).json({ error: err.message }));
};

exports.getUserById = (req, res) => {
    const { id } = req.params;
    User.findByPk(id)
        .then(user => {
            if (!user) {
                res.status(404).json({ error: 'Usuário não encontrado' });
            } else {
                res.json(user);
            }
        })
        .catch(err => res.status(500).json({ error: err.message }));
};

exports.updateUser = (req, res) => {
    const { id } = req.params;
    const { nome, email, senha, tipo } = req.body;
    User.findByPk(id)
        .then(user => {
            if (!user) {
                res.status(404).json({ error: 'Usuário não encontrado' });
            } else {
                return user.update({ nome, email, senha, tipo });
            }
        })
        .then(updatedUser => res.json(updatedUser))
        .catch(err => res.status(500).json({ error: err.message }));
};

exports.deleteUser = (req, res) => {
    const { id } = req.params;
    User.findByPk(id)
        .then(user => {
            if (!user) {
                res.status(404).json({ error: 'Usuário não encontrado' });
            } else {
                return user.destroy();
            }
        })
        .then(() => res.json({ message: 'Usuário excluído com sucesso' }))
        .catch(err => res.status(500).json({ error: err.message }));
};


// controllers/UserController.js

exports.getAdminUser = async (req, res) => {
  try {
    const adminUser = await User.findOne({
      where: { tipo: 'Administrador' } // Filtre pelo tipo de usuário administrador
    });

    if (!adminUser) {
      return res.status(404).json({ message: 'Nenhum usuário administrador encontrado.' });
    }

    res.status(200).json(adminUser);
  } catch (error) {
    console.error('Erro ao buscar usuário administrador:', error);
    res.status(500).json({ message: 'Erro interno ao buscar usuário administrador.' });
  }
};

