// db calls come here
const Query = {
	async getAllUsers(parent, args, ctx, info) {
		return ctx.db.models.user.findAll({}, info);
	},
	async getAllClusters(parent, args, ctx, info) {
		return ctx.db.models.cluster.findAll({}, info);
	},
	async getallDirections(parent, args, ctx, info) {
		return ctx.db.models.direction.findAll({}, info);
	},

	async getDirectionByCluster(parent, args, ctx, info) {
		const { clusterId } = args;
		return ctx.db.models.direction.findAll(
			{
				where: {
					clusterId,
				},
			},
			info
		);
	},

	async getAllCoreProcesses(parent, args, ctx, info) {
		const { directionId } = args;
		return ctx.db.models.coreprocess.findAll(
			{
				where: {
					directionId,
				},
			},
			info
		);
	},
};

module.exports = Query;
