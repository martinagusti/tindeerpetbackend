const { getConnection } = require("../infraestructure/database.js");

const getChatsRepository = async (id, idUser) => {
  const pool = await getConnection();

  const sql = `SELECT * FROM tinder.chat where IdUser = ? AND IdUser2 = ?  OR IdUser = ? AND IdUser2 = ? order by id`;

  const [chats] = await pool.query(sql, [idUser, id, id, idUser]);

  return chats;
};

const newMessageRepository = async (id, idUser, text) => {
  const pool = await getConnection();

  const sql = `INSERT INTO chat (IdUser, IdUser2, text) values (?,?,?)`;

  const [message] = await pool.query(sql, [idUser, id, text]);

  return message;
};

module.exports = {
  getChatsRepository,
  newMessageRepository,
};
