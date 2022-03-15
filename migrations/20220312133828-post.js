'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('posts', {
      id: {
        type: Sequelize.UUID,
        unique: true,
        primariKey: true,
      },
      tittle: { type: Sequelize.STRING },
      body: { type: Sequelize.STRING },
      added: { type: Sequelize.DATE },
      added_by: { type: Sequelize.UUID },
      createdAt: { type: Sequelize.DATE },
      updatedAt: { type: Sequelize.DATE },
    });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable('posts');
  },
};
