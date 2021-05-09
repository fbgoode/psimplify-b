const router = require('express').Router();

const adapters = require('./adapters');

router.post('/appointments', async (req, res) => {
    const result = await adapters.newAppointment(req,res);
    res.status(result.statusCode).json(result.body);
});

router.get('/appointments', async (req, res) => {
    const result = await adapters.getAppointments(req,res);
    res.status(result.statusCode).json(result.body);
});

router.get('/appointments/last', async (req, res) => {
    const result = await adapters.getLastAppointments(req,res);
    res.status(result.statusCode).json(result.body);
});

module.exports = router;