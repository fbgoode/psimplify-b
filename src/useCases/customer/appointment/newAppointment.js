module.exports = function makeNewAppointment ({ appointmentdb }) {
  return async function newAppointment(appointmentData,user) {
    appointmentData.user = user;
    const appointment = await appointmentdb.add(appointmentData);
    return appointment;
  }
}