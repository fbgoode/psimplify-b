module.exports = function makeNewPatient ({ patientdb }) {
  return async function newPatient(patientData,userId) {
    patientData.userId = userId;
    const patient = await patientdb.add(patientData);
    return patient;
  }
}