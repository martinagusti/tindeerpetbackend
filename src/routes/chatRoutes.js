const express = require("express");
const getChats = require("../controllers/chats/getChatsController");
const newMessage = require("../controllers/chats/newMessageController");

const chatRoutes = express.Router();

//endpoints publicos
chatRoutes.post("/:id", getChats);
chatRoutes.post("/message/:id", newMessage);

module.exports = {
  chatRoutes,
};
