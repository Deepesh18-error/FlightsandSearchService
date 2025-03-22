const { AirportService } = require('../services/index');

const airportService = new AirportService();

const create = async(req , res) => {
    try{
        const reponse = await airportService.create(req.body);
        return res.status(201).json({
            message : 'Successfullt created airport',
            err : {},
            data : reponse,
            success: true
        }); 
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data : {},
            succcess : false,
            err : error,
            message : 'Creation of new airport failed'
        })
    }
}

module.exports = {
    create
}