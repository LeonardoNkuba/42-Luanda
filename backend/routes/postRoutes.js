// backend/routes/postRoutes.js

const express = require('express');
const router = express.Router();
const PostController = require('../controllers/postController');

// Definir rotas para posts
router.get('/', PostController.getAllPosts);
router.post('/', PostController.createPost);
router.get('/:id', PostController.getPostById);
router.put('/:id', PostController.updatePost);
router.delete('/:id', PostController.deletePost);

module.exports = router;
