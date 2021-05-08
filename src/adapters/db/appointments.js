const Appointment = require('../../framework/mongodb/appointments');

async function getById (appointmentId) {
  const response = await Appointment.findById(appointmentId);;
  return response;
}

async function query ({user,fromDate,toDate}) {
  const response = await Appointment.find({user,date:{$gte:fromDate,$lte:toDate}}).sort('date').populate('patient', 'name lastname');
  return response;
}

async function add (appointment) {
  const response = await Appointment.create(appointment);
  return response;
}

module.exports = Object.freeze({
  add,
  getById,
  query
});