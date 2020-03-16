const Sequelize = require('sequelize');

// these should come from env vars
const Conn = new Sequelize('postgres', 'postgres', 'dbpassword', {
	host: process.env.DB_HOSTNAME,
	dialect: 'postgres',
});

const User = Conn.define('user', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
});

// only uncomment this next line if you want to drop all tables from your DB !! THIS FLUSHES ALL YOUR DATA DOWN THE DRAIN
// Conn.sync({ force: true }).then(() => {});
Conn.sync()
	.then(() => {
		console.log('successfully accepted connection');
	})
	.catch((e) => {
		console.log(e);
	});

module.exports = Conn;
