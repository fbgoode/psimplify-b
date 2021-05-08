const router = require('express').Router();

const userRouter = require('./users/router');
const patientRouter = require('./patients/router');
const appointmentRouter = require('./appointments/router');

router.use(userRouter);
router.use(patientRouter);
router.use(appointmentRouter);

module.exports = router;