const kernprocess = require('./kernprocess.js');

// needs refactoring

const injectKernProcessen = async (db) => {
	for (let index = 0; index < kernprocess.clusters.length; index++) {
		const createdCluster = await db.models.cluster.create({
			description: kernprocess.clusters[index].naam,
		});

		for (let i = 0; i < kernprocess.clusters[index].directies.length; i++) {
			const createdDirection = await db.models.direction.create({
				description: kernprocess.clusters[index].directies[i].naam,
				clusterId: createdCluster.id,
			});
			for (
				let index2 = 0;
				index2 < kernprocess.clusters[index].directies[i].kernprocessen.length;
				index2++
			) {
				await db.models.coreprocess.create({
					description:
						kernprocess.clusters[index].directies[i].kernprocessen[index2].naam,
					crucialProcess:
						kernprocess.clusters[index].directies[i].kernprocessen[index2]
							.crucial,
					clusterId: createdCluster.id,
					directionId: createdDirection.id,
				});
			}
		}
	}
	return;
};

module.exports = injectKernProcessen;
