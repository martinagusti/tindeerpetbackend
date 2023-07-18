const throwJsonError = require("../../errors/throwJsonError");
const { findMatchsRepository } = require("../../repositories/matchRepository");

const findMatchs = async (req, res) => {
  try {
    const { idUser } = req.body;

    const matchs = await findMatchsRepository(idUser);

    if (!matchs) {
      throwJsonError(400, "Se produjo un error");
    }

    res.status(200);
    res.send(matchs);
  } catch (error) {
    createJsonError(error, res);
  }
};

module.exports = findMatchs;
