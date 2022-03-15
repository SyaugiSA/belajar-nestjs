'use strict';
const bcrypt = require('bcrypt');
const uuid = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      'users',
      [
        {
          id: uuid.v1(),
          name: 'Admin',
          email: 'admin@admin.com',
          password: bcrypt.hashSync('admin', bcrypt.genSaltSync(10)),
        },
      ],
      {},
    );
  },

  down(queryInterface) {
    return queryInterface.bulkDelete('users', null, {});
  },
};
