'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Jewelry', [
      {
        name: "Piece 1",
        description: "This Green Goddess of an Emerald wearing a Diamond Crown is available and a perfect valentine’s day gift!",
        image: "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/52692451_10157056941228501_549182659092283392_n.jpg?_nc_cat=105&_nc_ht=scontent-ort2-2.xx&oh=03668f58145c8f4f85b3352e04e3960e&oe=5CF389A0",
        price: 350.00,
        available: "true",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Piece 2",
        description: "The perfect Valentine’s Day ring! Pink Tourmaline and Diamonds set in Solid 14K Yellow Gold.",
        image: "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/52378448_10157056941258501_7656918037173370880_n.jpg?_nc_cat=109&_nc_ht=scontent-ort2-2.xx&oh=1351e4e329e52490bb9a9db2e9940348&oe=5CEC446D",
        price: 230.00,
        available: "true",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Piece 3",
        description: "Any February babies out there? This is the perfect birthstone ring to celebrate you! ",
        image: "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/52274825_10157056941243501_7875361899209031680_n.jpg?_nc_cat=104&_nc_ht=scontent-ort2-2.xx&oh=c32192b9ca37aeacc8e38f02ba828862&oe=5CDFC574",
        price: 380.00,
        available: "true",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Piece 4",
        description: "This solid 14K Yellow Gold and Onyx ring with decorated filligree will make anyone swoon!",
        image: "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/52065898_10157056941253501_3172439032974016512_n.jpg?_nc_cat=101&_nc_ht=scontent-ort2-2.xx&oh=b7fd92f2790958a53f1e5c2cd5723377&oe=5D276049",
        price: 420.00,
        available: "true",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Piece 5",
        description: "Any September babies? This beautiul sappphire and diamond ring is meant for you!",
        image: "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/52605751_10157056941308501_3056500337893441536_n.jpg?_nc_cat=110&_nc_ht=scontent-ort2-2.xx&oh=2c5185786713afebeabc86a8da6d5e6b&oe=5D27A826",
        price: 270.00,
        available: "true",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Piece 6",
        description: "This ring is 10K white and yellow gold with diamonds! It’s a perfect everyday ring, size 7.",
        image: "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/51739611_10157056941328501_7246307721882894336_n.jpg?_nc_cat=103&_nc_ht=scontent-ort2-2.xx&oh=83f55ede127348d33b3ee7758328f582&oe=5CF6E5FB",
        price: 180.00,
        available: "true",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Piece 7",
        description: "This ring is White Gold and Garnet and absolutely stunning!",
        image: "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/52331899_10157056941373501_1305660003465560064_n.jpg?_nc_cat=106&_nc_ht=scontent-ort2-2.xx&oh=caa6e858a111bbabd346d4bece61038b&oe=5CF7F8E2",
        price: 450.00,
        available: "false",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Piece 8",
        description: "This 10k Yellow Gold Ring with a gorgeous red Garnet Center and Diamond Halo is ready for you to take her home!",
        image: "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/52465990_10157056941383501_8752325995496734720_n.jpg?_nc_cat=102&_nc_ht=scontent-ort2-2.xx&oh=f7886b8be4c6bb24975c3bf68993800e&oe=5CEE1526",
        price: 375.00,
        available: "false",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Jewelry', null, {})
  }
};
