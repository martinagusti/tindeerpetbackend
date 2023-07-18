const createJsonError = require("../../errors/createJsonError");
const throwJsonError = require("../../errors/throwJsonError");
const { findUsers } = require("../../repositories/userRepository");

const getUsers = async (req, res) => {
  try {
    const userInfo = await findUsers();

    if (!userInfo) {
      throwJsonError(400, "No se han encontrado usuarios");
    }

    res.status(200);
    res.send(userInfo);
  } catch (error) {
    createJsonError(error, res);
  }
};

module.exports = getUsers;
