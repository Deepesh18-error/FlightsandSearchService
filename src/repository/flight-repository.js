const { Flight } = require('../models');

class FlightRepository {
  async createFlight(flightData) {
    try {
        const flight = await Flight.create(flightData);
        return flight;
    } catch (error) {
        console.log("Something went wrong in repository layer");
        throw { error };
    }
  }


   async getFlightById(flightId) {
  }

   async getAllFlights() {
  }

   async updateFlight(flightId, flight) {

  }

   async deleteFlight(flightId) {

  }
}

module.exports = FlightRepository;