module.exports = function makeGetUser ({ userdb }) {
  return async function getUser(email) {
    if (!email) {
      throw new Error('Debes proporcionar el email de usuario.');
    }
    const user = await userdb.getByEmail(email);
    return user;
  }
}