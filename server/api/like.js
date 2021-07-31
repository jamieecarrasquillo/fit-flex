const router = require('express').Router();
const { Post, Like } = require('../db/models');

// gets all likes for a particular post
// router.get('/:postId', async (req, res, next) => {
//   try {
//     const likes = await Like.findAndCountAll({
//       where: { PostId: req.params.postId }
//     });
//     res.json(likes).status(200);
//   } catch (err) {
//     next(err);
//   }
// });

router.post('/', async (req, res, next) => {
  let user = req.user;
  try {
    let newLike = await Like.create({
      like: true,
      PostId: req.body.postId,
      UserId: user.id
    });
    res.json(newLike).status(200);
  } catch (err) {
    next(err);
  }
});

router.delete('/:likeId', async (req, res, next) => {
  try {
    await Like.destroy({ where: { id: req.params.id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
