// backend/controllers/postController.js

const Post = require('../models/post');

exports.getAllPosts = (req, res) => {
    Post.findAll()
        .then(posts => res.json(posts))
        .catch(err => res.status(500).json({ error: err.message }));
};

exports.createPost = (req, res) => {
    const { autor_id, conteudo } = req.body;
    Post.create({ autor_id, conteudo })
        .then(post => res.status(201).json(post))
        .catch(err => res.status(500).json({ error: err.message }));
};

exports.getPostById = (req, res) => {
    const { id } = req.params;
    Post.findByPk(id)
        .then(post => {
            if (!post) {
                res.status(404).json({ error: 'Post não encontrado' });
            } else {
                res.json(post);
            }
        })
        .catch(err => res.status(500).json({ error: err.message }));
};

exports.updatePost = (req, res) => {
    const { id } = req.params;
    const { conteudo } = req.body;
    Post.findByPk(id)
        .then(post => {
            if (!post) {
                res.status(404).json({ error: 'Post não encontrado' });
            } else {
                return post.update({ conteudo });
            }
        })
        .then(updatedPost => res.json(updatedPost))
        .catch(err => res.status(500).json({ error: err.message }));
};

exports.deletePost = (req, res) => {
    const { id } = req.params;
    Post.findByPk(id)
        .then(post => {
            if (!post) {
                res.status(404).json({ error: 'Post não encontrado' });
            } else {
                return post.destroy();
            }
        })
        .then(() => res.json({ message: 'Post excluído com sucesso' }))
        .catch(err => res.status(500).json({ error: err.message }));
};
