const express = require('express');
// require('dotenv').config();

const { PORT } = require('./config/ServerConfig');
const setupAndStartServer = async () => {
    // create new express oject
  const app = express();
  // create a basic route
  app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

setupAndStartServer();