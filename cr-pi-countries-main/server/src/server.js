const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mainRouter = require("./routes");

const server = express();

server.use(morgan("dev"));
server.use(express.json()); // funcion de parseo
server.use(cors());

server.use(mainRouter) 

module.exports = server;
