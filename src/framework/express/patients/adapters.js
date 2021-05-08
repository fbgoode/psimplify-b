const patientdb = require('../../../adapters/db/patients');

const makeNewPatient = require('../../../useCases/customer/patient/newPatient');
const makeNewPatientAdapter = require('../../../adapters/api/patients/newPatient');
const newPatient = makeNewPatient({patientdb});
exports.newPatient = makeNewPatientAdapter({newPatient});