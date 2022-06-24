"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "Why I moved to Netherlands",
          content:
            "My husband got onsit opportunity in Ntherlands, I love him so much and wanted to stay together with him I moved to Netherlands.",
          imageUrl:
            "https://www.state.gov/wp-content/uploads/2018/11/Netherlands-2114x1406.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: "2",
        },
        {
          name: "How I became Dutch citizen?",
          content:
            "In order to become dutch citizen I gave inburgering exam which tests the knowledge of Dutch language",
          imageUrl:
            "https://www.iamexpat.nl/sites/default/files/styles/article_full_custom_user_desktop_2x/public/dutch-passport.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: "2",
        },
        {
          name: "Why switching from Marketing to Software Development",
          content:
            "I am switching from Marketing to Software Development because I've keen interest and have developed skills that are relevant to this industry and this type of work brings me personal satisfaction. ",
          imageUrl:
            "https://online.maryville.edu/wp-content/uploads/2017/09/MSBDA-data-anoymized.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: "1",
        },
        {
          name: "Why javaScript is in trend",
          content:
            "JavaScript is good because it allows you to create cross-platform applications — for this, you can use the React Native, Ionic, or PhoneGap frameworks. ",
          imageUrl:
            "https://www.techzine.nl/wp-content/uploads/2021/07/shutterstock_1062509657-scaled.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: "1",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stories", null, {});
  },
};
