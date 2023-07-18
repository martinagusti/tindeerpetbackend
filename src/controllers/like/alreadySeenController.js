const createJsonError = require("../../errors/createJsonError");
const throwJsonError = require("../../errors/throwJsonError");
const { alreadySeenRepository } = require("../../repositories/likeRepository");

const alreadySeen = async (req, res) => {
  try {
    const { id } = req.params;

    const { idUser } = req.body;

    const alreadySeenController = await alreadySeenRepository(id, idUser);

    if (alreadySeenController.length === 0) {
      res.status(200);
      res.send([]);
    }

    if (alreadySeenController.length > 0) {
      res.status(200);
      res.send(alreadySeenController);
    }
  } catch (error) {
    createJsonError(error, res);
  }
};

module.exports = alreadySeen;
