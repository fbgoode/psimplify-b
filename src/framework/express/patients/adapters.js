const patientdb = require('../../../adapters/db/patients');

const makeNewPatient = require('../../../useCases/customer/patient/newPatient');
const makeNewPatientAdapter = require('../../../adapters/api/patients/newPatient');
const newPatient = makeNewPatient({patientdb});
exports.newPatient = makeNewPatientAdapter({newPatient});

const makeGetAllPatients = require('../../../useCases/customer/patient/getAllPatients');
const makeGetAllPatientsAdapter = require('../../../adapters/api/patients/getAllPatients');
const getAllPatients = makeGetAllPatients({patientdb});
exports.getAllPatients = makeGetAllPatientsAdapter({getAllPatients});