module.exports = function makeNewPatientAdapter ({ newPatient }) {
  return async function newPatientAdapter (req,res) {
    try {
      const patientData = req.body;
      const userId = res.locals.user.sub;
      const patient = await newPatient(patientData,userId);
      return {
        statusCode: 200,
        body: { patient }
      }
    } catch (e) {
      // TODO: Error logging
      console.log(e)

      return {
        statusCode: 500,
        body: {
          error: "Internal server error."
        }
      }
    }
  }
}