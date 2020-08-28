module.exports = (sequelize, DataTypes) => {
  const Staff = sequelize.define(
    "Staff",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      provider_id: {
        type: DataTypes.INTEGER,
      },
      staff_email: {
        type: DataTypes.STRING(255),
      },
      staff_name: {
        type: DataTypes.STRING(255),
      },
      password: {
        type: DataTypes.STRING(255),
      },
      password_token: {
        type: DataTypes.STRING(255),
      },
      password_token_expire: {
        type: DataTypes.STRING(255),
      },
      phone_no: {
        type: DataTypes.STRING(255),
      },
      role: {
        type: DataTypes.STRING,
      },
      department: {
        type: DataTypes.STRING,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        ),
      },
    },
    {
      model: "Staff",
      tableName: "staffs",
    }
  );
  Staff.associate = (models) => {
    Staff.hasOne(models.HealthCareProvider, {
      foreignKey: "provider_id",
    });

    Staff.belongsTo(models.Appointment);
  };
  return Staff;
};
