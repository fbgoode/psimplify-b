module.exports = function makeUpdateConfigAdapter ({ updateConfig }) {
  return async function updateConfigAdapter (req,res) {
    try {
      const config = req.body;
      const userId = res.locals.user.sub;
      const id = req.params.id;
      if (id != userId) {
        return {
          statusCode: 403,
          body: {
            error: 'Forbidden.'
          }
        }
      }
      const user = await updateConfig(config,userId);
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