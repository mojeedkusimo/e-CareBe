"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    return queryInterface.createTable("appointments", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      patient_name: {
        type: Sequelize.STRING(255),
      },
      patient_email: {
        type: Sequelize.STRING(255),
      },
      phone_no: {
        type: Sequelize.STRING(255),
      },
      preferred_date: {
        type: Sequelize.DATEONLY,
      },
      preferred_time: {
        type: Sequelize.TIME,
      },
      reason_for_appointment: {
        type: Sequelize.ENUM,
        values: ["consultation", "antenatal", "others"],
      },
      patient_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "patients", // name of Target model
          key: "id", // key in Target model that we're referencing
        },
      },
      staff_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "staffs", // name of Target model
          key: "id", // key in Target model that we're referencing
        },
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
    return queryInterface.dropTable("appointments");
  },
};
