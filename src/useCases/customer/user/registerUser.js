import makeUser from '../../../entities/user'

export default function makeRegisterUser ({ dbAddUser }) {
  return async function registerUser (userInfo) {
    const user = makeUser(userInfo);
    const newUser = await dbAddUser(user);
    return newUser;
  }
}