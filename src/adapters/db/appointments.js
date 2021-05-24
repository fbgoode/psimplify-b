const Appointment = require('../../framework/mongodb/appointments');

async function getById (appointmentId) {
  const response = await Appointment.findById(appointmentId);;
  return response;
}

async function query ({user,fromDate,toDate,untilDate,limit}) {
  let response;
  if (untilDate) response = await Appointment.find({user,date:{$lt:untilDate}}).sort('-date').limit(limit).populate('patient', 'name lastname');
  else response = await Appointment.find({user,date:{$gte:fromDate,$lte:toDate}}).sort('date').populate('patient', 'name lastname');
  return response;
}

async function add (appointment) {
  const response = await Appointment.create(appointment);
  return response;
}

async function update (user,_id,appointment) {
  const response = await Appointment.findOneAndUpdate({_id,user},appointment,{new:true});
  return response;
}

module.exports = Object.freeze({
  add,
  getById,
  query,
  update
});