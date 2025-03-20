const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/ServerConfig');
const ApiRoutes = require('./routes/index'); 

const db = require('./models/index');
// const { City , Airport } = require('./models/index');

const setupAndStartServer = async () => {
    // create new express oject
  const app = express();
  // create a basic route

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/api', ApiRoutes);

  app.listen(3000, async () => {
    console.log(`Server is running on port ${PORT}`);
    if(process.env.SYNC_DB){
      db.sequelize.sync({ alter: true });
    }
    //different ways to query the database
    // const airports = await Airport.findAll({
    //   include: [
    //     {
    //       model: City
    //     }
    //   ]
    // });
    // console.log(airports);

    // db.sequelize.sync({ alter: true });

    // Different ways to query the database
    // const city = await City.findOne({
    //   where: {
    //     id: 7
    //   }
    // });
    // const airports = await city.getAirports();

    // // another way to query the database
    // const newAirport = await Airport.findOne({
    //   where: {
    //     id: 8
    //   }
    // });
    // await city.addAirport(newAirport);


    // console.log(city , airports);

  });
}

setupAndStartServer(); 