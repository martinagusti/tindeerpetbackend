const createJsonError = require("../../errors/createJsonError");
const throwJsonError = require("../../errors/throwJsonError");
const { getChatsRepository } = require("../../repositories/chatsRepository");

const getChats = async (req, res) => {
  try {
    const { id } = req.params;

    const { idUser } = req.body;

    const chats = await getChatsRepository(id, idUser);

    if (!chats) {
      throwJsonError(400, "Se produjo un error");
    }

    res.status(200);
    res.send(chats);
  } catch (error) {
    createJsonError(error, res);
  }
};

module.exports = getChats;
