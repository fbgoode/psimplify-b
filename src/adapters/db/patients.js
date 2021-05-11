const Patient = require('../../framework/mongodb/patients');

async function getById (patientId) {
  const response = await Patient.findById(patientId);;
  return response;
}

async function query ({user}) {
  const response = await Patient.find({user}).sort('-updatedAt');
  return response;
}

async function add (patient) {
  const response = await Patient.create(patient);
  return response;
}

module.exports = Object.freeze({
  add,
  getById,
  query
});