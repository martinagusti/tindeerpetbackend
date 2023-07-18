const express = require("express");
const like = require("../controllers/like/likeController");
const match = require("../controllers/like/matchController");
const alreadySeen = require("../controllers/like/alreadySeenController");

const likeRoutes = express.Router();

//endpoints publicos
likeRoutes.post("/:id", like);
likeRoutes.post("/ismatch/:id", match);
likeRoutes.post("/alreadyseen/:id", alreadySeen);

module.exports = {
  likeRoutes,
};
