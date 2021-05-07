module.exports = function makeGetuserAdapter ({ getUser }) {
  return async function getUserAdapter (httpRequest) {
    try {
      const email = httpRequest.params.email;
      const user = await getUser(email);
      if (!user) {
        return {
          statusCode: 404,
          body: {
            error: 'User not found.'
          }
        }
      }
      return {
        statusCode: 200,
        body: { user }
      }
    } catch (e) {
      // TODO: Error logging
      console.log(e)

      return {
        statusCode: 500,
        body: {
          error: e.message
        }
      }
    }
  }
}