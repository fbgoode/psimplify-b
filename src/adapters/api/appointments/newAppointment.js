module.exports = function makeNewAppointmentAdapter ({ newAppointment }) {
  return async function newAppointmentAdapter (req,res) {
    try {
      const appointmentData = req.body;
      const user = res.locals.user.sub;
      // const user = "e0ec2c0f-874a-4ac2-8a46-2591b5665913";
      const appointment = await newAppointment(appointmentData,user);
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