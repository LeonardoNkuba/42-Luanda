const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Define your routes here
router.get('/', UserController.getAllUsers);
router.post('/', UserController.createUser);
router.get('/:id', UserController.getUserById);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);
// Other CRUD routes...
router.get('/adminUser', UserController.getAdminUser);

module.exports = router;
