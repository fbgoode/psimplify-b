module.exports = function makeGetSlotsAdapter ({ getSlots }) {
  return async function getSlotsAdapter (req,res) {
    try {
      const pid = req.params.pid;
      const [user, slots] = await getSlots(pid);
      if (!slots) {
        return {
          statusCode: 404,
          body: {
            error: 'Not found.'
          }
        }
      }
      return {
        statusCode: 200,
        body: { user, slots }
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