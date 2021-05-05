const makeUser = require('../../../entities/user');

module.exports = function makeRegisterUser ({ userdb }) {
  return async function registerUser (userInfo) {
    const user = makeUser(userInfo);
    const newUser = await userdb.addUser(user);
    return newUser;
  }
}