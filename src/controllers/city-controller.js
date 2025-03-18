const { CityService } = require('../services/index');

const cityRepository = new CityRepository(); // Making object
/* POST
Credata -> req.body
*/
const create = async (req , res) => {
    try{
        const city = await cityRepository.createCity(req.body); // Q
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

const destroy= async (req , res) => {
    try{
        const response = await cityRepository.deleteCity(req.params.id);
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
        const response = await cityRepository.updateCity(req.params.id, req.body);
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
const show = async (req , res) => {
    try{
        const response = await cityRepository.getCity(req.params.id);
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
