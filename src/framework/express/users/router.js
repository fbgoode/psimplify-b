const router = require('express').Router();

const adapters = require('./adapters');

router.get('/users/:email', async (req, res) => {
    console.log(req);
    const result = await adapters.getUser(req);
    res.status(result.statusCode).json(result.body);
});

module.exports = router;