const { CityService } = require('../services/index');

const cityService = new CityService(); // Making object
/* POST
Credata -> req.body
*/
const create = async (req , res) => {
    try{
        const city = await cityService.createCity(req.body); // Q
        return res.status(201).json({ // Q
            data: city,
            success: true,
            message: "City created successfully",
            err : {} // Q
        });
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "City creation failed",
            err : error
        });
    }
}

const destroy = async (req , res) => {
    try{
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "City deleted successfully",
            err : {}
        });
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "City deletion failed",
            err : error
        });
    }
}

// PATCH -> /city/:id -> req.body
const update = async (req , res) => {
    try{
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "City updated successfully",
            err : {}
        });
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "City updation failed",
            err : error
        });
    }
}
 
// GET -> /city/:id
const get = async (req , res) => {
    try{
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "City fetched successfully",
            err : {}
        });
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "City fetch failed",
            err : error
        });
    }
}

const getAll = async (req , res) => {
    try{
        const cities = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data: cities,
            success: true,
            message: "City fetched successfully",
            err : {}
        });
    } catch (error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "City fetch failed",
            err : error
        });
    }
}
module.exports = {
    create,
    destroy,
    update,
    get,
    getAll

};
