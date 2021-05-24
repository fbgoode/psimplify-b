module.exports = function makeRegisterUser ({ userdb }) {
  return async function registerUser (userInfo) {
    const existingUser = await userdb.getById(userInfo._id);
    if(existingUser) return existingUser;
    const newUser = await userdb.add(userInfo);
    return newUser;
  }
}