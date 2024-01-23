const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/contacts', require('./contacts'));

router.get('/', (req, res) => {
    res.send("Hello World");
});

router.use('/contacts', require('../routes/contacts'));

// router.use('/contacts', require('./contacts'));

module.exports = router;