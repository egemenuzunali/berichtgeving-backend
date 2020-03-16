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
			Cluster: {
				async directions(parent, args, ctx, info) {
					console.log(parent.id);
					const client = await ctx.db.models.direction.findAll({
						where: { clusterId: parent.id },
					});
					return client;
				},
			},
			Direction: {
				async coreProcesses(parent, args, ctx, info) {
					console.log(parent.id);
					const client = await ctx.db.models.coreprocess.findAll({
						where: { directionId: parent.id },
					});
					return client;
				},
			},
		},
		resolverValidationOptions: {
			requireResolversForResolverType: false,
		},
		context: (req) => ({ ...req, db }),
	});
}

module.exports = createServer;
