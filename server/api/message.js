router = require('express').Router();
const { Messages } = require('../db/models');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    let messages = await Messages.findAll();
    res.json(messages).status(200);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { text } = req.body;
    const newMessage = await Messages.create({
      text
    });
    res.json(newMessage).status(200);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await Messages.destroy({ where: { id: req.params.id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
