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

// Conn.sync({ force: true }).then(() => {});
Conn.sync()
	.then(() => {
		console.log('successfully accepted connection');
	})
	.catch((e) => {
		console.log(e);
	});

module.exports = Conn;
