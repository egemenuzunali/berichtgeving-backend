const fs = require('fs');
const _ = require('lodash')
const { ApolloServer, gql } = require('apollo-server');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const db = require('./db');
const auth = require('./auth')

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
					const client = await ctx.db.models.direction.findAll(
						{
							where: { clusterId: parent.id },
						},
						info
					);
					return client;
				},
			},
			Direction: {
				async coreProcesses(parent, args, ctx, info) {
					console.log(parent.id);
					const client = await ctx.db.models.coreprocess.findAll(
						{
							where: { directionId: parent.id },
						},
						info
					);
					return client;
				},
			},
		},
		resolverValidationOptions: {
			requireResolversForResolverType: false,
		},
		async context ({ req }) {
			const token = _.get(req, 'headers.authorization', null)
			console.log('token', token)
			const user = token ? await auth.getUser(db, token) : null

			return { ...req, db, user, token }
		}
	});
}

module.exports = createServer;
