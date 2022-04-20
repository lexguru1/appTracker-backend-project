"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "applications",
      [
        {
          company: "Microsoft",
          position: "Frontend Developer",
          status: "APPLIED",
          jd: "lorem",
          createdAt: new Date(),
          updatedAt: new Date(),
          appListId: 1,
        },
        {
          company: "Microsoft",
          position: "Frontend Developer",
          status: "PHONE",
          jd: "lorem",
          createdAt: new Date(),
          updatedAt: new Date(),
          appListId: 1,
        },
        {
          company: "Microsoft",
          position: "Frontend Developer",
          status: "TECH",
          jd: "lorem",
          createdAt: new Date(),
          updatedAt: new Date(),
          appListId: 1,
        },
        {
          company: "Microsoft",
          position: "Frontend Developer",
          status: "HIRED",
          jd: "lorem",
          createdAt: new Date(),
          updatedAt: new Date(),
          appListId: 1,
        },
        {
          company: "Microsoft",
          position: "Frontend Developer",
          status: "APPLIED",
          jd: "lorem",
          createdAt: new Date(),
          updatedAt: new Date(),
          appListId: 2,
        },
        {
          company: "Microsoft",
          position: "Frontend Developer",
          status: "PHONE",
          jd: "lorem",
          createdAt: new Date(),
          updatedAt: new Date(),
          appListId: 2,
        },
        {
          company: "Microsoft",
          position: "Frontend Developer",
          status: "TECH",
          jd: "lorem",
          createdAt: new Date(),
          updatedAt: new Date(),
          appListId: 2,
        },
        {
          company: "Microsoft",
          position: "Frontend Developer",
          status: "HIRED",
          jd: "lorem",
          createdAt: new Date(),
          updatedAt: new Date(),
          appListId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("applications", null, {});
  },
};
