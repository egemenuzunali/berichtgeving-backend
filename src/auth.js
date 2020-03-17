var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const _ = require('lodash')

const SECRET = process.env.SECRET || 'demo'

const auth = {
    createToken (user) {
      const token = jwt.sign({ userId: user.id }, SECRET);

      return token;
    },

    getRandomPassword (len = 8) {
      return Math.random().toString(36).slice(len * -1);
    },

    async getUser (db, headerToken) {
        let token;
        try {
            token = jwt.verify(headerToken, SECRET);
            const user = await this.userQuery(db, token.userId)

            return _.pick(user, ['id', 'fullName', 'email'])
        } catch (e) {
            console.error(e)
            return null;
        }
    },

    verifyPassword (input, hashed) {
      const res = bcrypt.compareSync(input, hashed);

      return res;
    },

    async hashPassword (password) {
      return bcrypt.hashSync(password, 10);
    },

    async userQuery (db, userId) {
      return await db.models.user.findOne(
        {
          where: { id: userId },
        }
      );
    }
};

module.exports = auth
