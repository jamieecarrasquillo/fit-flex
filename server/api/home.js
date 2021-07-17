const router = require('express').Router();
const { Post, Comment } = require('../db/models');

module.exports = router;

//To Do
//get all post from people you follow
router.use('/', async (req, res, next) => {
  try {
    const posts = await Post.findAll();
    // let comments = await posts[0].getComments();
    // console.log(comments);
    res.json(posts).status(200);
  } catch (err) {
    next(err);
  }
});

//To Do
//get all post from sugested people to follow

//get single post view with its own comments
router.get('/:id', async (req, res, next) => {
  try {
    let post = await Post.findByPk(req.params.id);
    res.json(post).status(200);
  } catch (err) {
    next(err);
  }
});

//user post new post
router.post('/', async (req, res, next) => {
  try {
    const { image, description, location, save } = req.body;
    const newPost = await Post.create({
      image,
      description,
      location,
      save
    });
    res.json(newPost).status(200);
  } catch (err) {
    next(err);
  }
});

//user edit post information
router.put('/', async (req, res, next) => {
  try {
    const { id, description, location, save } = req.body;
    let post = await Post.findOne({ where: { id } });
    let updatedPost = await post.update({
      description,
      location,
      save
    });
    res.json(updatedPost).status(200);
  } catch (err) {
    next(err);
  }
});

//user delete post
router.delete('/:id', async (req, res, next) => {
  try {
    await Post.destroy({ where: { id: req.params.id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
