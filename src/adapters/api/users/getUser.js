module.exports = function makeGetuserAdapter ({ getUser }) {
  return async function getUserAdapter (httpRequest) {
    try {
      const id = httpRequest.params.id;
      const user = await getUser(id);
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
        statusCode: 400,
        body: {
          error: e.message
        }
      }
    }
  }
}