'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable(
      'users',
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV1,
          unique: true,
          primariKey: true,
        },
        name: { type: Sequelize.STRING },
        email: { type: Sequelize.STRING },
        emailVerification: { type: Sequelize.DATE },
        password: { type: Sequelize.STRING },
        createdAt: { type: Sequelize.DATE },
        updatedAt: { type: Sequelize.DATE },
      },
      {
        instanceMethod: {
          generateHash: function (password) {
            return bcrypt.hash(password, bcrypt.genSaltSync(10));
          },
          validPassword: function (password) {
            return bcrypt.compare(password, this.password);
          },
        },
      },
    );
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable('users');
  },
};
