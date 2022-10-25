const express = require("express"),
  routes = express.Router(),
  niveis = require("./niveis");

// localhost:5000/niveis
routes.use("/niveis", niveis);

module.exports = routes;
