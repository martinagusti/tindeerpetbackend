const express = require("express");
const getUsers = require("../controllers/users/getUsers");
const registerUser = require("../controllers/users/registerController");
const loginUser = require("../controllers/users/loginController");

const userRoutes = express.Router();

//endpoints publicos
userRoutes.get("/", getUsers);
userRoutes.post("/", registerUser);
userRoutes.post("/login", loginUser);

module.exports = {
  userRoutes,
};
