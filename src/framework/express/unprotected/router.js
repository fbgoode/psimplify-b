const router = require('express').Router();

const adapters = require('./adapters');

router.post('/patients/:pid/appointments', async (req, res) => {
    res.locals.user = {sub: req.body.user};
    req.body.patient = req.params.pid;
    const result = await adapters.newAppointment(req,res);
    res.status(result.statusCode).json(result.body);
});

router.get('/patients/:pid/slots', async (req, res) => {
    const result = await adapters.getSlots(req,res);
    res.status(result.statusCode).json(result.body);
});

module.exports = router;