const createClusters = require('./migration');

const Mutations = {
	async addUser(parent, args, ctx, info) {
		const { name } = args;
		const user = await ctx.db.models.user.create(
			{
				name,
			},
			info
		);
		return user;
	},

	async runMigration(parent, args, ctx, info) {
		await createClusters(ctx.db);
		return { message: 'Success !!' };
	},
};

module.exports = Mutations;
