const createJsonError = require("../../errors/createJsonError");
const throwJsonError = require("../../errors/throwJsonError");
const { insertMatchRepository } = require("../../repositories/matchRepository");

const insertMatch = async (req, res) => {
  try {
    const { id } = req.params;

    const { idUser } = req.body;

    const insertedMatch = await insertMatchRepository(id, idUser);

    if (insertedMatch.affectedRows === 2) {
      res.status(200);
      res.send(insertedMatch);
    } else {
      throwJsonError(400, "Se produjo un error");
    }
  } catch (error) {
    createJsonError(error, res);
  }
};

module.exports = insertMatch;
