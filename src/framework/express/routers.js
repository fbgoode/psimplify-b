const router = require('express').Router();

const userRouter = require('./users/router');

router.use(userRouter);

module.exports = router;