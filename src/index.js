const createServer = require('./createServer');
require('dotenv').config({ path: __dirname + '/../.env' });

const server = createServer();

server.listen({ port: process.env.PORT }).then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
