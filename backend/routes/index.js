const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    res.send("Hello World");
});

router.use('/contacts', require('./contacts'));

router.use('/users', require('./users'));

module.exports = router;