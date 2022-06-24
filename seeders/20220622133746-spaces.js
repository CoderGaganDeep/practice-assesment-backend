"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // const user1 = await User.findOne({
    //   where: { email: "test@test.com" },
    // });

    // const user2 = await User.findOne({
    //   where: { email: "dummy@dummy.com" },
    // });
    await queryInterface.bulkInsert(
      "spaces",
      [
        {
          title: "LinkedIn",
          description:
            " LinkedIn is a social network site that focuses on professional networking and career development. ",
          backgroundColor: "#0000FF",
          color: "#000000 ",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: "1",
        },
        {
          title: "Facebook",
          description:
            "Facebook is a social networking website where users can post comments, share photographs, and post links to news or other interesting personal stuff.",
          backgroundColor: "#0000FF",
          color: "#00FF00",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: "2",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("spaces", null, {});
  },
};
