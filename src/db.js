const Sequelize = require('sequelize');

// these should come from env vars
const Conn = new Sequelize('postgres', 'postgres', 'dbpassword', {
	host: process.env.DB_HOSTNAME,
	dialect: 'postgres',
});

// const User = Conn.define('user', {
// 	email: {
// 		type: Sequelize.STRING,
// 		allowNull: false,
// 		validate: {
// 			isEmail: true,
// 		},
// 		unique: {
// 			args: true,
// 			msg: 'Email address already in use!',
// 		},
// 	},
// 	fullName: {
// 		type: Sequelize.STRING,
// 		allowNull: false,
// 	},
// 	phoneNumber: {
// 		type: Sequelize.INTEGER,
// 		allowNull: true,
// 	},
// 	password: {
// 		type: Sequelize.STRING,
// 		allowNull: false,
// 	},
// 	resetToken: {
// 		type: Sequelize.STRING,
// 		allowNull: true,
// 	},
// 	resetTokenExpiry: {
// 		type: Sequelize.FLOAT,
// 		allowNull: true,
// 	},
// });

const CoreProcess = Conn.define('coreprocess', {
	description: {
		type: Sequelize.STRING(1000),
		allowNull: false,
	},
	crucialProcess: {
		type: Sequelize.BOOLEAN,
		allowNull: false,
	},
	currentBCPLevel: {
		type: Sequelize.STRING,
		allowNull: true,
	},
	continuitySafe: {
		type: Sequelize.BOOLEAN,
		allowNull: true,
	},
	requestDecisionWGTeam: {
		type: Sequelize.STRING,
		allowNull: true,
	},
	chainDependency: {
		type: Sequelize.BOOLEAN,
		allowNull: true,
	},
	extraFTEForContinuity: {
		type: Sequelize.BOOLEAN,
		allowNull: true,
	},
});

const Cluster = Conn.define('cluster', {
	description: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: {
			args: true,
			msg: 'Directie is al toegevoegd',
		},
	},
});

const Direction = Conn.define('direction', {
	description: {
		type: Sequelize.STRING,
		allowNull: false,
	},
});

// const DailyReportCoreProcess = Conn.define('dailyReportcoreprocess', {
// 	description: {
// 		type: Sequelize.STRING,
// 		allowNull: false,
// 	},
// 	dateReport: {
// 		type: Sequelize.DATE,
// 		allowNull: false,
// 	},
// 	bcpLevel: {
// 		type: Sequelize.STRING,
// 		allowNull: false,
// 	},
// 	chainDependency: {
// 		type: Sequelize.BOOLEAN,
// 		allowNull: false,
// 	},
// 	continuity: {
// 		type: Sequelize.STRING,
// 		allowNull: false,
// 	},
// 	wgDecision: {
// 		type: Sequelize.STRING,
// 		allowNull: false,
// 	},
// });

Direction.belongsTo(Cluster, { foreignKey: 'clusterId' });
CoreProcess.belongsTo(Cluster, { foreignKey: 'clusterId' });
CoreProcess.belongsTo(Direction, { foreignKey: 'directionId' });

Conn.sync({ force: true }).then(() => {});
Conn.sync()
	.then(() => {
		console.log('successfully accepted connection');
	})
	.catch((e) => {
		console.log(e);
	});

module.exports = Conn;
