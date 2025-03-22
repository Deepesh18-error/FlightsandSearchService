const express = require('express');

const { FlightMiddlewares } = require('../../middlewares/index');


const Citycontroller = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');
const AirportConTroller = require('../../controllers/airport-controller');

const router = express.Router();

router.post('/city', Citycontroller.create);
router.delete('/city/:id', Citycontroller.destroy) ;
router.get('/city/:id', Citycontroller.get);
router.get('/city', Citycontroller.getAll);
router.patch('/city/:id', Citycontroller.update);


router.post(
    '/flights' , 
    FlightMiddlewares.validateCreateFlight,
    FlightController.create
);
router.get('/flights' , FlightController.getAll);

router.post('/airports' , AirportConTroller.create);

module.exports = router; 