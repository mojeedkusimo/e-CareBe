"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    return queryInterface.createTable("health_care_providers", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(255),
      },
      address_line1: {
        type: Sequelize.TEXT,
      },
      accreditation_no: {
        type: Sequelize.STRING,
      },
      hotline: {
        type: Sequelize.STRING,
      },
      private_govt: {
        type: Sequelize.ENUM,
        values: ["private", "government"],
      },
      occupation: {
        type: Sequelize.STRING(255),
      },
      long: {
        type: Sequelize.STRING(255),
      },
      lat: {
        type: Sequelize.STRING(255),
      },
      healthcare_type: {
        type: Sequelize.STRING(255),
      },
      address_line2: {
        type: Sequelize.TEXT,
      },
      city: {
        type: Sequelize.STRING(255),
      },
      state: {
        type: Sequelize.STRING(255),
      },
      country: {
        type: Sequelize.STRING(255),
      },
      zipcode: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable("health_care_providers");
  },
};
