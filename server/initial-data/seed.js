const sequelize = require('../db/index');
const {
  User,
  Post,
  Messages,
  Blocked,
  Follower,
  Following,
  Like,
  Comment,
  Tags
} = require('../db/models');
// const faker = require('faker');

const seed = async () => {
  try {
    await Promise.all([
      User.create({
        username: 'jaeu',
        password: '12345',
        email: 'jamie@email.com',
        firstName: 'Jamie',
        lastName: 'Eunice',
        birthday: new Date(),
        profileImage:
          'https://media-exp3.licdn.com/dms/image/C4E03AQGr2JhwHUAbXg/profile-displayphoto-shrink_800_800/0/1593014512052?e=1631145600&v=beta&t=T2y_VlkiGChXiO5wtUpBumN_OLVAHFQgKDgXwe3nbfU',
        bio: "Let's grow together.",
        website: 'instagram.com/jeimiyuniseu'
      }),
      User.create({
        username: 'jonrolu',
        password: '12345',
        email: 'jon@email.com',
        firstName: 'Jonathan',
        lastName: 'Rosado',
        birthday: new Date(),
        profileImage:
          'https://media-exp3.licdn.com/dms/image/C4D03AQHTjEVkhkm6Eg/profile-displayphoto-shrink_800_800/0/1553806354877?e=1631750400&v=beta&t=9MlfQkkSFCauskb0Oia3uNBZ2UsiMOnbZe2P4LbiimY',
        bio: "Let's grow together.",
        website: 'instagram.com/jonrolu'
      }),
      Post.create({
        image:
          'https://media-exp3.licdn.com/dms/image/C4E03AQGr2JhwHUAbXg/profile-displayphoto-shrink_800_800/0/1593014512052?e=1631145600&v=beta&t=T2y_VlkiGChXiO5wtUpBumN_OLVAHFQgKDgXwe3nbfU',
        description: 'First image here.',
        location: 'NYC',
        UserId: 1
      }),
      Comment.create({
        content: 'So beautif.',
        UserId: 1
      }),
      Messages.create({
        text: 'I think I saw you yesterday.',
        senderId: 1,
        receiverId: 2,
        UserId: 1
      })
    ]);

    // for (let i = 0; i < 50; i++) {
    //   let username = faker.name.userName();
    //   let password = faker.internet.password(8);
    //   let email = faker.internet.email();
    //   let firstName = faker.name.firstName();
    //   let lastName = faker.name.lastName();
    //   let birthday = new Date();
    //   let profileImage = faker.image.imageUrl();
    //   let bio = faker.lorem.text();
    //   let website = faker.internet.url();

    //   await Promise.all([
    //     User.create({
    //       username: username,
    //       password: password,
    //       email: email,
    //       firstName: firstName,
    //       lastName: lastName,
    //       birthday: birthday,
    //       profileImage: profileImage,
    //       bio: bio,
    //       website: website
    //     })
    //   ]);
    // }
  } catch (err) {
    console.log(err.message);
  }
};

(async () => {
  await seed();
})();
