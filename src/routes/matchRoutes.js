const express = require("express");
const insertMatch = require("../controllers/match/insertMatchController");
const findMatchs = require("../controllers/match/findMatchs");

const matchRoutes = express.Router();

//endpoints publicos
matchRoutes.post("/:id", insertMatch);
matchRoutes.post("/", findMatchs);

module.exports = {
  matchRoutes,
};
