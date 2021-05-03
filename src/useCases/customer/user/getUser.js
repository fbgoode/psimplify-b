export default function makeGetUser ({ dbGetUserById }) {
  return async function getUser (id) {
    if (!id) {
      throw new Error('Debes proporcionar un id de usuario.');
    }
    const user = await dbGetUserById(id);
    return user;
  }
}