module.exports = function makeRegisterUser ({ userdb }) {
  return async function registerUser (userInfo) {
    const newUser = await userdb.add(userInfo);
    return newUser;
  }
}