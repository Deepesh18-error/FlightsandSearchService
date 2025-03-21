const { Flight } = require('../models/index');
const { Op } = require('sequelize');
class FlightRepository { 
  
  #createFilter(data){
    let filter = {};
    if(data.arrivalAirportId){
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if(data.departureAirportId){
      filter.departureAirportId = data.departureAirportId;
    }
    if(data.minPrice && data.maxPrice){
      Object.assign(filter , {
        [Op.and]:[
          { price: {[Op.lte]: data.maxPrice} },
          { price: {[Op.gte]: data.minPrice} }
        ]
      })
    }
    if(data.minPrice){
      Object.assign(filter, {price: {[Op.gte] : data.minPrice}});
    }
    if(data.maxPrice){
      Object.assign(filter , {price: {[Op.lte]: data.maxPrice}});
    }
    return filter;
  }

  async createFlight(flightData) {
    try {
        const flight = await Flight.create(flightData);
        return flight;
    } catch (error) {
        console.log("Something went wrong in repository layer");
        throw { error };
    }
  }


   async getFlight(flightId) {
    try {
      const flight = await Flight.findByPk(flightId);
      return flight;
  } catch (error) {
      console.log("Something went wrong in repository layer");
      throw { error };
  }
  }

   async getAllFlights(filter) {
    try {
      const filterObject = this.#createFilter(filter);
      const flight = await Flight.findAll({
        where : filterObject
      });
      return flight;
  } catch (error) {
      console.log("Something went wrong in repository layer");
      throw { error };
  }
  }

   async updateFlight(flightId, flight) {
  }

   async deleteFlight(flightId) {

  }
}

module.exports = FlightRepository;

/*
where : {
arrivalAirportId : 2.
departureAiprotId : 4,
price : {[Op.gte] : 400}
}
*/