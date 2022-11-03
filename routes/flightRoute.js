const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.getAllFlight)
    .get('/:id', controller.getSingleFlight)
    .post('/', controller.addFlight)
    .put('/:id', controller.updateFlight)
    .delete('/:id', controller.updateFlight);

module.exports = router;

