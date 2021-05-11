module.exports = function makeNGetAllPatientsAdapter ({ getAllPatients }) {
  return async function getAllPatientsAdapter (req,res) {
    try {
      const user = res.locals.user.sub;
      const patients = await getAllPatients(user);
      return {
        statusCode: 200,
        body: { patients }
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