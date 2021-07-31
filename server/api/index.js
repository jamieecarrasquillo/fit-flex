const router = require('express').Router();

router.use('/user', require('./user.js'));
router.use('/message', require('./message.js'));
router.use('/comment', require('./comment.js'));
router.use('/like', require('./like.js'));
router.use('/', require('./home.js'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

module.exports = router;
