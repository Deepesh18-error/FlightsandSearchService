const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/ServerConfig');


const setupAndStartServer = async () => {
    // create new express oject
  const app = express();
  // create a basic route

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

setupAndStartServer();