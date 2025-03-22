const { ClienErrorCodes } = require('../utils/error-codes');
const validateCreateFlight = (req , res , next) => {
    if( 
        ! req.body.flightNumber ||
        ! req.body.airplaneId ||
        ! req.body.departureAirportId ||
        ! req.body.arrivalAirportId ||
        ! req.body.arrivalTime ||
        ! req.body.departureTime ||
        ! req.body.price
    )
    {
        return res.status(ClienErrorCodes.BAD_REQUEST).json({
            data : {},
            success : false,
            message : 'Invalid request body for create flight',
            err : 'Missing mandatory request properties to create a flight'
        });
    }
    next();
}

module.exports = {
    validateCreateFlight
}