const readline = require('readline');
const db = require('../db');
const auth = require('../auth');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const userCreate = () => {
	rl.question('Full name: ', function(fullName) {
		rl.question('Email: ', async function(email) {
			const password = auth.getRandomPassword();

			try {
        console.log('test', await auth.hashPassword(password),)
				const res = await db.models.user.create({
					fullName,
					email,
					password: await auth.hashPassword(password),
				});

				// @todo Mani, email temp password to user?

				if (res.errors) {
					console.log('d');
				} else {
					console.log(
						`User with id ${res.dataValues.id} created ${fullName} (${email}), temporary password:`,
						`\x1b[33m${password}\x1b[0m`
					);
				}
			} catch (e) {
				e.errors.map((i) => {
					console.error(i.message);
				});
			}

			rl.close();
		});
	});
};

setTimeout(userCreate, 750);

rl.on('close', function() {
	process.exit(0);
});
