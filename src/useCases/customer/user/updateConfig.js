module.exports = function makeUpdateConfig ({ userdb }) {
  return async function updateConfig(config,userId) {
    if (!config) {
      throw new Error('Configuración no recibida.');
    }
    const user = await userdb.update(userId,{config});
    return user;
  }
}