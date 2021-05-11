module.exports = function makeGetAllPatients ({ patientdb }) {
  return async function getAllPatients(user) {
    const patients = await patientdb.query({user});
    return patients;
  }
}