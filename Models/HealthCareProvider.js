module.exports = (sequelize, DataTypes) => {
  const HealthCareProvider = sequelize.define(
    "HealthCareProvider",
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
      address_line1: {
        type: DataTypes.TEXT,
      },
      accreditation_no: {
        type: DataTypes.STRING,
      },
      hotline: {
        type: DataTypes.STRING,
      },
      private_govt: {
        type: DataTypes.ENUM,
        values: ["private", "government"],
      },
      occupation: {
        type: DataTypes.STRING(255),
      },
      long: {
        type: DataTypes.STRING(255),
      },
      lat: {
        type: DataTypes.STRING(255),
      },
      healthcare_type: {
        type: DataTypes.STRING(255),
      },
      address_line2: {
        type: DataTypes.TEXT,
      },
      city: {
        type: DataTypes.STRING(255),
      },
      state: {
        type: DataTypes.STRING(255),
      },
      country: {
        type: DataTypes.STRING(255),
      },
      zipcode: {
        type: DataTypes.INTEGER,
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
      model: "HealthCareProvider",
      tableName: "health_care_providers",
    }
  );

  HealthCareProvider.associate = (models) => {
    HealthCareProvider.hasMany(models.Staff);
  };

  return HealthCareProvider;
};
