module.exports = function makeGetUserAdapter ({ getUser }) {
  return async function getUserAdapter (req,res) {
    try {
      const id = req.params.id;
      const userId = res.locals.user.sub;
      if (id != userId) {
        return {
          statusCode: 403,
          body: {
            error: 'Forbidden.'
          }
        }
      }
      const user = await getUser(id,userId);
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
          error: "Internal server error."
        }
      }
    }
  }
}