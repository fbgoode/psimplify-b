module.exports = function makeNewPatient ({ patientdb }) {
  return async function newPatient(patientData,user) {
    patientData.user = user;
    const patient = await patientdb.add(patientData);
    return patient;
  }
}