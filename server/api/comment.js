const router = require('express').Router();
const { Comment, Post } = require('../db/models');
module.exports = router;

//get all comments but only for a specific post
// router.get('/:postId', async (req, res, next) => {
//   try {
//     let comments = await Comment.findAll({
//       where: { PostId: req.params.postId }
//     });
//     res.json(comments).status(200);
//   } catch (err) {
//     next(err);
//   }
// });

router.post('/', async (req, res, next) => {
  try {
    const { content, userId, postId } = req.body;
    const newComment = await Comment.create({
      content,
      PostId: postId,
      UserId: userId
    });
    res.json(newComment).status(200);
  } catch (err) {
    next(err);
  }
});

router.delete('/:commentId', async (req, res, next) => {
  try {
    await Comment.destroy({ where: { id: req.params.id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
