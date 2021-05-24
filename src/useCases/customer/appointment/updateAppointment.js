module.exports = function makeUpdateAppointment ({ appointmentdb }) {
  return async function updateAppointment(id,appointmentData,user) {
    const appointment = await appointmentdb.update(user,id,appointmentData);
    return appointment;
  }
}