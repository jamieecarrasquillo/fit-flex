router = require('express').Router();
const { Messages } = require('../db/models');
const Op = require('Sequelize').Op;
module.exports = router;

// SELECT * FROM MESSAGES WHERE (SENDERID = JAMIE AND RECEIVERID = MILI) OR (SENDERID = MILI AND RECEIVERID = JAMIE)

// Finds all conversations that user has with other people
router.get('/', async (req, res, next) => {
  let user = req.user;
  try {
    let messages = await Messages.findAll({
      where: { UserId: user.id }
    });
    res.json(messages).status(200);
  } catch (err) {
    next(err);
  }
});

// Loads specific conversation that user is having with other user
router.get('/:userId', async (req, res, next) => {
  let user = req.user;
  try {
    let messages = await Messages.findAll({
      where: {
        [Op.and]: [
          { senderId: { [Op.or]: [user.id, req.params.userId] } },
          { receiverId: { [Op.or]: [user.id, req.params.userId] } }
        ]
      }
    });
    res.json(messages).status(200);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { text, senderId, receiverId, UserId } = req.body;
    const newMessage = await Messages.create({
      text,
      senderId,
      receiverId,
      UserId
    });
    res.json(newMessage).status(200);
  } catch (err) {
    next(err);
  }
});

router.delete('/:messageId', async (req, res, next) => {
  try {
    await Messages.destroy({ where: { id: req.params.id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
