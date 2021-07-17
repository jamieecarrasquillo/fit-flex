const router = require('express').Router();
const { Comment, Post } = require('../db/models');
module.exports = router;

//get all comments but only for a specific post
router.get('/', async (req, res, next) => {
  try {
    let comments = await Comment.findAll();
    res.json(comments).status(200);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { content } = req.body;
    const newComment = await Comment.create({
      content
    });
    res.json(newComment).status(200);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await Comment.destroy({ where: { id: req.params.id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
