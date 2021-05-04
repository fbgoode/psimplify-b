const makeUser = require('../../../entities/user');

module.exports = function makeRegisterUser ({ usersdb }) {
  return async function registerUser (userInfo) {
    const user = makeUser(userInfo);
    const newUser = await usersdb.addUser(user);
    return newUser;
  }
}