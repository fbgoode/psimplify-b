const router = require('express').Router();

const userRouter = require('./users/router');
const patientRouter = require('./patients/router');

router.use(userRouter);
router.use(patientRouter);

module.exports = router;