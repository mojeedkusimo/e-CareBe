module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define(
    "Patient",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(255),
      },
      age: {
        type: DataTypes.INTEGER,
      },
      sex: {
        type: DataTypes.ENUM,
        values: ["male", "female"],
      },
      marital_status: {
        type: DataTypes.ENUM,
        values: ["single", "married"],
      },
      email: {
        type: DataTypes.STRING(255),
      },
      occupation: {
        type: DataTypes.STRING(255),
      },
      address: {
        type: DataTypes.STRING(255),
      },
      next_of_kin: {
        type: DataTypes.STRING(255),
      },
      nok_address: {
        type: DataTypes.STRING(255),
      },
      nok_phone: {
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
      model: "Patient",
      tableName: "patients",
    }
  );
  Patient.associate = (models) => {
    Patient.belongsTo(models.PatientRecord);

    Patient.belongsTo(models.Appointment, {
      onDelete: "cascade",
    });
  };
  return Patient;
};
