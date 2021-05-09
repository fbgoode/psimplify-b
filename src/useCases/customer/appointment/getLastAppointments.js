module.exports = function makeGetLastAppointments ({ appointmentdb }) {
  return async function getLastAppointments(untilDate,user) {
    if (!untilDate) untilDate = new Date();
    const limit = 15;
    const appointments = await appointmentdb.query({untilDate,limit,user});
    const last = (appointments.length < limit);
    return {appointments,last};
  }
}