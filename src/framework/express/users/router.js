const router = require('express').Router();

const adapters = require('./adapters');

router.get('/users/:id', async (req, res) => {
    const result = await adapters.getUser(req,res);
    res.status(result.statusCode).json(result.body);
});

router.put('/users/:id/profile', async (req, res) => {
    const result = await adapters.updateProfile(req,res);
    res.status(result.statusCode).json(result.body);
});

router.put('/users/:id/config', async (req, res) => {
    const result = await adapters.updateConfig(req,res);
    res.status(result.statusCode).json(result.body);
});

module.exports = router;