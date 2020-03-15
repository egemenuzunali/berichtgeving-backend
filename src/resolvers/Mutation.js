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
};

module.exports = Mutations;
