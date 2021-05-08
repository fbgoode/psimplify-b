module.exports = function makeGetAppointments ({ appointmentdb }) {
  return async function getAppointments(fromDate,toDate,user) {
    const appointments = await appointmentdb.query({user,fromDate,toDate});
    return appointments;
  }
}