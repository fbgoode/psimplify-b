module.exports = function makeGetLastAppointmentsAdapter ({ getLastAppointments }) {
  return async function getLastAppointmentsAdapter (req,res) {
    try {
      const untilDate = req.query.untilDate;
      const user = res.locals.user.sub;
      const result = await getLastAppointments(untilDate,user);
      return {
        statusCode: 200,
        body: result
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