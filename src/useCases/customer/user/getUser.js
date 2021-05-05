module.exports = function makeGetUser ({ userdb }) {
  return async function getUser (id) {
    if (!id) {
      throw new Error('Debes proporcionar un id de usuario.');
    }
    const user = await userdb.getUserById(id);
    return user;
  }
}