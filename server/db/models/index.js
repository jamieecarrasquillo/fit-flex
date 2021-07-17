//Model Associations
const User = require('./user');
const Blocked = require('./Blocked');
const Follower = require('./Follower');
const Following = require('./Following');
const Messages = require('./Messages');
const Post = require('./Post');
const Like = require('./Like');
const Comment = require('./Comment');
const Tags = require('./Tags');

// User has Many Posts
// Post have one User
User.hasMany(Post);
Post.belongsTo(User, {
  // as: 'user',
  constraints: false
});

// User has many Blocked
//(but one since Blocked is an arrar of users)
// Blocked belongs to User
User.hasMany(Blocked);
Blocked.belongsTo(User, {
  // as: 'user',
  constraints: false
});

// Message belongs to one User
// User has many Messages
User.hasMany(Messages, {
  as: 'sender',
  foreignKey: 'senderId'
});
User.hasMany(Messages, {
  as: 'receiver',
  foreignKey: 'receiverId'
});
Messages.belongsTo(User);

// Following belongs to User
// User has many Following
User.hasMany(Following);
Following.belongsTo(User);

// Follower belongs to User
// User has many Follower
User.hasMany(Follower);
Follower.belongsTo(User);

// Post has many Comment
// Comment belongs to Post
Post.hasMany(Comment);
Comment.belongsTo(Post);

// User has many Comment
// Comment belongs to User
User.hasMany(Comment);
Comment.belongsTo(User);

// Post has many Like
// Like belongs to Post
Post.hasMany(Like);
Like.belongsTo(Post);

// User has many Like
// Like belongs to User
User.hasMany(Like);
Like.belongsTo(User);

// Post has many Tag
// Tag belongs to Post
Post.belongsToMany(Tags, { through: 'post_tags' });
Tags.belongsToMany(Post, { through: 'post_tags' });

module.exports = {
  User,
  Blocked,
  Follower,
  Following,
  Messages,
  Post,
  Like,
  Comment,
  Tags
};
