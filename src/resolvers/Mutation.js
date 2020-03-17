const _ = require('lodash');
const injectKernProcessens = require('../migration');
const auth = require('../auth');

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

	async runMigration(parent, args, ctx) {
		await injectKernProcessens(ctx.db);
		return { message: 'Success !!' };
	},

	async signIn(parent, args, ctx) {
		const user = await ctx.db.models.user.findOne({
			where: { email: args.username },
		});

		if (!user || !auth.verifyPassword(args.password, user.password)) {
			throw new Error('Invalid credentials');
		}

		const token = auth.createToken(user.dataValues);
		await ctx.db.models.token.create({ token });

		return {
			token,
			user: _.pick(user.dataValues, 'id', 'fullName', 'email'),
		};
	},

	async signOut(parent, args, ctx) {
		ctx.db.models.token.destroy({ where: { token: ctx.token }})

		return {
			message: 'Success'
		}
	},
};

module.exports = Mutations;
