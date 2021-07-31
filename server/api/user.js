const router = require('express').Router();
const { User, Post } = require('../db/models');
module.exports = router;

//get all users to suggest new users to user
router.get('/', async (req, res, next) => {
  try {
    let users = await User.findAll({
      attributes: [
        'id',
        'username',
        'email',
        'firstName',
        'lastName',
        'birthday',
        'profileImage',
        'bio',
        'website'
      ]
    });

    res.json(users);
  } catch (err) {
    next(err);
  }
});

//user get single user view to view individual profiles or its own
router.get('/:userId', async (req, res, next) => {
  try {
    let user = await User.findByPk(req.params.id);
    res.json(user).status(200);
  } catch (err) {
    next(err);
  }
});

// TO DO
//user get to find users an user is looking for in search field
//uses sequelize, gig, find all, where, firstname, op.like, and term from req.query

//user post/create its own account
router.post('/', async (req, res, next) => {
  try {
    const {
      id,
      username,
      password,
      email,
      firstName,
      lastName,
      birthday,
      profileImage,
      bio,
      website
    } = req.body;

    let newUser = await User.create({
      id,
      username,
      password,
      email,
      firstName,
      lastName,
      birthday,
      profileImage,
      bio,
      website
    });
    res.json(newUser).status(200);
  } catch (err) {
    next(err);
  }
});

// user edit its own account
router.put('/', async (req, res, next) => {
  try {
    const {
      // id,
      username,
      password,
      email,
      firstName,
      lastName,
      birthday,
      profileImage,
      bio,
      website
    } = req.body;
    let user = await User.findOne({ where: { id } });
    let updatedUser = await user.update({
      // id,
      username,
      password,
      email,
      firstName,
      lastName,
      birthday,
      profileImage,
      bio,
      website
    });
    res.json(updatedUser).send(200);
  } catch (err) {
    next(err);
  }
});

//user deletes its own account
router.delete('/:userId', async (req, res, next) => {
  try {
    await User.destroy({ where: { id: req.params.id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

// gets all followers and following
router.get('/followers', async (req, res, next) => {
  let userLoggedIn = req.user;
  let user = await User.findOne({
    where: {
      id: userLoggedIn.id
    }
  });
  try {
    let followers = await user.getFollowees();
    res.send(followers).status(200);
  } catch (err) {
    next(err);
  }
});

// post following connection
router.post('/:userId/follow', async (req, res, next) => {
  let userLoggedIn = req.user;
  try {
    let user = await User.findOne({
      where: {
        id: userLoggedIn.id
      }
    });
    let userToFollow = await User.findOne({
      where: {
        id: req.params.userId
      }
    });

    let newFollowing = await user.addFollowee(userToFollow);
    res.send(newFollowing).status(200);
  } catch (err) {
    next(err);
  }
});

// delete following connection
router.delete('/:userId', async (req, res, next) => {
  let userLoggedIn = req.user;
  try {
    let user = await User.findOne({
      where: {
        id: userLoggedIn.id
      }
    });
    let userToStopFollowing = await User.findOne({
      where: {
        id: req.params.userId
      }
    });

    await user.removeFollower(userToStopFollowing);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
