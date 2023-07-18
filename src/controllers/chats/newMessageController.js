const createJsonError = require("../../errors/createJsonError");
const throwJsonError = require("../../errors/throwJsonError");
const { newMessageRepository } = require("../../repositories/chatsRepository");

const newMessage = async (req, res) => {
  try {
    const { id } = req.params;

    const { idUser, text } = req.body;

    const message = await newMessageRepository(id, idUser, text);

    const idMessage = message.insertId;

    if (!message) {
      throwJsonError(400, "Se produjo un error");
    }

    res.status(201);
    res.send({ ID: idMessage, id, idUser, text });
  } catch (error) {
    createJsonError(error, res);
  }
};

module.exports = newMessage;
