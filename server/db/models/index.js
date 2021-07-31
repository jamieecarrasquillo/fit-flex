//Model Associations
const User = require('./user');
const Blocked = require('./Blocked');
const Messages = require('./Messages');
const Post = require('./Post');
const Like = require('./Like');
const Comment = require('./Comment');
const Tags = require('./Tags');
const Location = require('./Location');

// User has Many Posts
// Post have one User
User.hasMany(Post);
Post.belongsTo(User, {});

// User has many Blocked
//(but one since Blocked is an arrar of users)
// Blocked belongs to User
User.hasMany(Blocked, {
  as: 'blocker',
  foreignKey: 'blockerId'
});
User.hasMany(Blocked, {
  as: 'blocked',
  foreignKey: 'blockedId'
});
Blocked.belongsTo(User);

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
User.belongsToMany(User, {
  as: 'following',
  foreignKey: 'followingId',
  through: 'user_followers'
});
User.belongsToMany(User, {
  as: 'followee',
  foreignKey: 'followeeId',
  through: 'user_followers'
});

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

// Location can appear in many posts
// Post has only one location
Location.hasMany(Post);
Post.belongsTo(Location);

module.exports = {
  User,
  Blocked,
  Messages,
  Post,
  Like,
  Comment,
  Tags,
  Location
};
