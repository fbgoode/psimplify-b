module.exports = function makeGetUser ({ usersdb }) {
  return async function getUser (id) {
    if (!id) {
      throw new Error('Debes proporcionar un id de usuario.');
    }
    const user = await usersdb.getUserById(id);
    return user;
  }
}