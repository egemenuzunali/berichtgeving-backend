const fs = require('fs');
const { ApolloServer, gql } = require('apollo-server');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const db = require('./db');

const typeDefs = gql`
	${fs.readFileSync(__dirname.concat('/schema.graphql'), 'utf8')}
`;

function createServer() {
	return new ApolloServer({
		typeDefs,
		resolvers: {
			Mutation,
			Query,
		},
		resolverValidationOptions: {
			requireResolversForResolverType: false,
		},
		context: (req) => ({ ...req, db }),
	});
}

module.exports = createServer;
