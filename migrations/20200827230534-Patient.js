"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    return queryInterface.createTable("patients", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(255),
      },
      age: {
        type: Sequelize.INTEGER,
      },
      sex: {
        type: Sequelize.ENUM,
        values: ["male", "female"],
      },
      marital_status: {
        type: Sequelize.ENUM,
        values: ["single", "married"],
      },
      email: {
        type: Sequelize.STRING(255),
      },
      occupation: {
        type: Sequelize.STRING(255),
      },
      address: {
        type: Sequelize.STRING(255),
      },
      next_of_kin: {
        type: Sequelize.STRING(255),
      },
      nok_address: {
        type: Sequelize.STRING(255),
      },
      nok_phone: {
        type: Sequelize.STRING(255),
      },
      password: {
        type: Sequelize.STRING(255),
      },
      password_token: {
        type: Sequelize.STRING(255),
      },
      password_token_expire: {
        type: Sequelize.STRING(255),
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        ),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable("patients");
  },
};
