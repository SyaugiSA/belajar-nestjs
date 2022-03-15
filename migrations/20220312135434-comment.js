'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('comments', {
      id: {
        type: Sequelize.UUID,
        unique: true,
        primariKey: true,
      },
      post: { type: Sequelize.UUID },
      added_by: { type: Sequelize.UUID },
      body: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE },
      updatedAt: { type: Sequelize.DATE },
    });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable('comments');
  },
};
