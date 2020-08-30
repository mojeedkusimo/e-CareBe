module.exports = (sequelize, DataTypes) => {
	const HealthCareProvider = sequelize.define(
		'HealthCareProvider',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING(255),
				defaultValue: false,
				allowNull: true,
			},
			address_line1: {
				type: DataTypes.TEXT,
				defaultValue: false,
				allowNull: true,
			},
			accreditation_no: {
				type: DataTypes.STRING,
				defaultValue: false,
				allowNull: true,
			},
			hotline: {
				type: DataTypes.STRING,
				defaultValue: false,
				allowNull: true,
			},
			private_govt: {
				type: DataTypes.ENUM,
				values: ['private', 'government'],
				defaultValue: false,
				allowNull: true,
			},
			occupation: {
				type: DataTypes.STRING(255),
				defaultValue: false,
				allowNull: true,
			},
			long: {
				type: DataTypes.STRING(255),
				defaultValue: false,
				allowNull: true,
			},
			lat: {
				type: DataTypes.STRING(255),
				defaultValue: false,
				allowNull: true,
			},
			healthcare_type: {
				type: DataTypes.STRING(255),
				defaultValue: false,
				allowNull: true,
			},
			address_line2: {
				type: DataTypes.TEXT,
				defaultValue: false,
				allowNull: true,
			},
			city: {
				type: DataTypes.STRING(255),
				defaultValue: false,
				allowNull: true,
			},
			state: {
				type: DataTypes.STRING(255),
				defaultValue: false,
				allowNull: true,
			},
			country: {
				type: DataTypes.STRING(255),
				defaultValue: false,
				allowNull: true,
			},
			zipcode: {
				type: DataTypes.INTEGER,
				defaultValue: false,
				allowNull: true,
			},
			created_at: {
				type: DataTypes.DATE,
				defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			},
			updated_at: {
				type: DataTypes.DATE,
				defaultValue: sequelize.literal(
					'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
				),
			},
		},
		{
			model: 'HealthCareProvider',
			tableName: 'health_care_providers',
		}
	);

	HealthCareProvider.associate = (models) => {
		HealthCareProvider.hasMany(models.Staff);
	};

	return HealthCareProvider;
};
