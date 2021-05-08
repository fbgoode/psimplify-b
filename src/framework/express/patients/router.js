const router = require('express').Router();

const adapters = require('./adapters');

router.post('/patients', async (req, res) => {
    const result = await adapters.newPatient(req,res);
    res.status(result.statusCode).json(result.body);
});

module.exports = router;