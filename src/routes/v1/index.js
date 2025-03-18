const express = require('express');
const Citycontroller = require('../../controllers/city-controller');
const router = express.Router();

router.post('/city', Citycontroller.create);


module.exports = router;