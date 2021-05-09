module.exports = function makeGetAppointmentsAdapter ({ getAppointments }) {
  return async function getAppointmentsAdapter (req,res) {
    try {
      const fromDate = req.query.fromDate;
      const toDate = req.query.toDate;
      const user = res.locals.user.sub;
      const appointments = await getAppointments(fromDate,toDate,user);
      return {
        statusCode: 200,
        body: { appointments }
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