const router = require('express').Router();
const Op = require('Sequelize').Op;
const { Post, Like, User } = require('../db/models');
const { getAllComments, getLikes, followingIds } = require('../../utils');

module.exports = router;

//To Do
//get all post from people you follow
router.get('/', async (req, res, next) => {
  // get user id from user signed in, then
  // call isFollowing to get ids from people
  // the user follows
  // if no following return 'no following found' or err
  // after that lets sort feed posts by date
  try {
    // remember to find the logged in user id and pass it as argument
    let followingArray = await followingIds(User);
    if (followingArray === []) {
      throw new Error('No Followers found.');
    }

    const posts = await Post.findAll({
      where: {
        UserId: {
          [Op.in]: followingArray
        }
      }
    });
    let comments = await getAllComments(posts);
    let likes = await getLikes(Like, posts);

    res.json({ posts, comments, likes }).status(200);
  } catch (err) {
    next(err);
  }
});

//To Do
//get all post from sugested people to follow
router.get('/explore', async (req, res, next) => {
  try {
    const posts = await Post.findAll();
    let comments = await getAllComments(posts);
    let likes = await getLikes(Like, posts);

    res.json({ posts, comments, likes }).status(200);
  } catch (err) {
    next(err);
  }
});

//get single post view with its own comments
router.get('/:postId', async (req, res, next) => {
  try {
    let post = await Post.findByPk(req.params.postId);
    let comments = await post.getComments();
    const likes = await Like.findAndCountAll({
      where: { PostId: req.params.postId }
    });
    res.json({ post, comments, likes }).status(200);
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
router.delete('/:postId', async (req, res, next) => {
  try {
    await Post.destroy({ where: { id: req.params.id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
