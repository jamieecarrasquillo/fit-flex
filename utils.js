// Gets all comments for specific post
const getAllComments = async (postsModel) => {
  let comments = [];
  for (let i = 0; i < postsModel.length; i++) {
    comments.push(await postsModel[i].getComments());
  }

  return comments;
};

const getLikes = async (likeModel, postsModel) => {
  let likes = [];
  for (let i = 0; i < postsModel.length; i++) {
    likes.push(
      await likeModel.findAndCountAll({
        where: {
          PostId: postsModel[i].id
        }
      })
    );
  }

  return likes;
};

// change the userId argument to be dynamic
const followingIds = async (userModel, userId = 2) => {
  let user = await userModel.findAll({
    where: {
      id: userId
    },
    include: 'following'
  });

  console.log('following', user[0].dataValues.following);
  let followingIdsForPosts = user[0].dataValues.following.map(
    (users) => users.dataValues.id
  );
  console.log('IDS FOR POSTS', followingIdsForPosts);
  return followingIdsForPosts;
};

const prettyLogs = (object) => {
  console.log(JSON.stringify(object, null, 4));
};

module.exports = {
  getAllComments,
  getLikes,
  followingIds,
  prettyLogs
};
