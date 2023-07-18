const createJsonError = require("../../errors/createJsonError");
const throwJsonError = require("../../errors/throwJsonError");
const { likeRepository } = require("../../repositories/likeRepository");

const like = async (req, res) => {
  try {
    const { id } = req.params;

    const { isLiked, idUser } = req.body;

    const insertLike = await likeRepository(id, isLiked, idUser);

    if (insertLike.affectedRows === 1) {
      res.status(200);
      res.send(insertLike);
    } else {
      throwJsonError(400, "Se produjo un error");
    }
  } catch (error) {
    createJsonError(error, res);
  }
};

module.exports = like;
