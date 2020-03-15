// db calls come here
const Query = {
	async getAllUsers(parent, args, ctx, info) {
		return ctx.db.models.user.findAll({}, info);
	},
};

module.exports = Query;
