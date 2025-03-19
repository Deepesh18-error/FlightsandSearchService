const { City } = require('../models/index');
const { Op } = require('sequelize');

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ 
             name 
            });
            return city;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error}; // Throw the actual error instead of an object
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: { id: cityId }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error}; 
        }
    }

    async updateCity(cityId, data) {
        try {
            // the above code is equivalent to the below code 
            // but it is returning the updated data
            // const city = await City.update(data, {
            //     where: { 
            //         id: cityId 
            //     },
            //     returning: true
            // });
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error}; 
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error}; 
        }
    }

    async getAllCities(filter) { // filter can be empty also
        try {
            if(filter.name){
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error}; 
        }
    }  
}

module.exports = CityRepository;
// Compare this snippet from FlightsandSearch/src/routes/city-routes.js: