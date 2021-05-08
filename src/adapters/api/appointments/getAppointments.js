module.exports = function makeGetAppointmentsAdapter ({ getAppointments }) {
  return async function getAppointmentsAdapter (req,res) {
    try {
      const fromDate = req.query.fromDate;
      const toDate = req.query.toDate;
      const user = "e0ec2c0f-874a-4ac2-8a46-2591b5665913";
      // const user = res.locals.user.sub;
      const appointment = await getAppointments(fromDate,toDate,user);
      return {
        statusCode: 200,
        body: { appointment }
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