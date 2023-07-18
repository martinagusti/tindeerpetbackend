const createJsonError = require("../../errors/createJsonError");
const throwJsonError = require("../../errors/throwJsonError");
const { isMatchRepository } = require("../../repositories/likeRepository");

const match = async (req, res) => {
  try {
    const { id } = req.params;
    const { idUser } = req.body;

    const isMatch = await isMatchRepository(idUser, id);

    if (isMatch.length === 1) {
      res.status(200);
      res.send(isMatch);
    } else {
      res.status(200);
      res.send([]);
    }
  } catch (error) {
    createJsonError(error, res);
  }
};

module.exports = match;
